// cool-underline.js

export async function initCoolUnderline() {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js');
  
  const underlineElements = document.querySelectorAll('u');
  underlineElements.forEach(setupUnderlineAnimation);

  // Observe body for theme changes
  const observer = new MutationObserver(() => {
      underlineElements.forEach(updateUnderlineColor);
  });
  observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['color']
  });
}

function setupUnderlineAnimation(element) {
  const triggerElement = findAncestorWithViewport(element);
  if (triggerElement) {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      if (!element.dataset.underlineAnimated) {
                          createMultilineUnderlineAnimation(element);
                          element.dataset.underlineAnimated = 'true';
                      }
                      observer.unobserve(entry.target);
                  }
              });
          },
          { threshold: 0.1 }
      );
      observer.observe(triggerElement);

      // Check if the element is already in the viewport
      const boundingRect = triggerElement.getBoundingClientRect();
      if (boundingRect.top < window.innerHeight && boundingRect.bottom >= 0) {
          createMultilineUnderlineAnimation(element);
          element.dataset.underlineAnimated = 'true';
          observer.unobserve(triggerElement);
      }
  } else {
      console.warn('No ancestor element with data-viewport="true" found for', element);
      createMultilineUnderlineAnimation(element);
  }
}

function findAncestorWithViewport(element) {
  let currentElement = element;
  while (currentElement && currentElement !== document.body) {
      if (currentElement.dataset.viewport === 'true') {
          return currentElement;
      }
      currentElement = currentElement.parentElement;
  }
  return null;
}

function createMultilineUnderlineAnimation(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const clientRects = range.getClientRects();

  element.style.position = 'relative';

  const elementRect = element.getBoundingClientRect();
  const lines = [];

  // Group client rects into lines
  for (let i = 0; i < clientRects.length; i++) {
    const rect = clientRects[i];
    if (lines.length === 0 || Math.abs(rect.top - lines[lines.length - 1][0].top) > 2) {
      lines.push([rect]);
    } else {
      lines[lines.length - 1].push(rect);
    }
  }

  // Create underline segment for each line
  lines.forEach((line, index) => {
    const lineLeft = Math.min(...line.map(r => r.left)) - elementRect.left;
    const lineRight = Math.max(...line.map(r => r.right)) - elementRect.left;
    const lineTop = Math.min(...line.map(r => r.top)) - elementRect.top;
    const lineBottom = Math.max(...line.map(r => r.bottom)) - elementRect.top;

    const lineRect = {
      left: lineLeft,
      right: lineRight,
      top: lineTop,
      bottom: lineBottom,
      width: lineRight - lineLeft,
      height: lineBottom - lineTop
    };

    createUnderlineSegment(element, lineRect, index);
  });
}

function createUnderlineSegment(element, lineRect, index) {
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", lineRect.width);
  svg.setAttribute("height", lineRect.height);
  svg.style.position = 'absolute';
  svg.style.left = `${lineRect.left}px`;
  svg.style.top = `${lineRect.top}px`;
  svg.style.overflow = 'visible';
  svg.style.pointerEvents = 'none';
  svg.style.zIndex = '-1'; // Place behind the text
  svg.style.opacity = '0.5'; // Adjust opacity as needed

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", generateMarkerPath(lineRect.width, lineRect.height));
  path.setAttribute("fill", `${document.body.getAttribute('color-theme') === 'dark' ? 'rgba(180,180,0,0.3)' : 'rgba(180,180,0,0.3)'}`);
  path.setAttribute("stroke", "none");
  path.style.opacity = '0.5'; // Adjust opacity as needed
  path.style.mixBlendMode = 'multiply';

  svg.appendChild(path);
  element.appendChild(svg);

  // Animate the marker using GSAP
  gsap.set(path, { scaleX: 0, transformOrigin: "left center" });
  gsap.to(path, {
    scaleX: 1,
    duration: 0.5,
    ease: "power1.inOut",
    delay: index * 0.1
  });
}

function generateMarkerPath(width, height) {
  const curvature = height * 0.1; // Adjust this value to change the waviness
  return `
    M 0,${height}
    Q ${width/4},${height-curvature * Math.random() * 2} ${width/2},${height}
    Q ${3*width/4},${height+curvature * Math.random() * 2} ${width},${height}
    L ${width},0
    Q ${3*width/4},${curvature} ${width/2},0
    Q ${width/4},${-curvature} 0,0
    Z
  `;
}

function updateUnderlineColor(element) {
  const svgs = element.querySelectorAll('svg');
  svgs.forEach(svg => {
      const path = svg.querySelector('path');
      if (path) {
          path.setAttribute("fill", "currentColor");
      }
  });
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
  });
}