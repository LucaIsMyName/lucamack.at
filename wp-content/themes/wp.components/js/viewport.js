/**
 * @name viewport.js
 * @version 1.0
 * @author luca mack
 * @description provides a HTML data attribute for checking if an element is in the viewport.
 */

(function () {
  // Function to handle the intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      entry.target.setAttribute("data-viewport", entry.isIntersecting ? "true" : "false");
    });
  }


  function parseOffset(offset) {
    // Handle custom CSS variables
    if (offset.startsWith('var(')) {
      // Create a temporary element to compute the actual value of the CSS variable
      const tempDiv = document.createElement('div');
      document.body.appendChild(tempDiv);
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.position = 'absolute';
      tempDiv.style.height = offset;
      const computedValue = window.getComputedStyle(tempDiv).height;
      document.body.removeChild(tempDiv);
      return computedValue;
    }

    // If the offset is a number, assume pixels
    if (!isNaN(offset)) {
      return `${offset}px`;
    }

    // For other valid CSS units (like rem, em, %), use as-is
    return offset;
  }

  function initializeObservers() {
    const elements = document.querySelectorAll("[data-viewport]");
    const observers = {};

    elements.forEach(el => {
      // Ensure the offset is treated as a string
      const offsetAttr = el.getAttribute('data-viewport-offset');
      const offset = offsetAttr ? parseOffset(offsetAttr.toString()) : '0px';

      if (!observers[offset]) {
        observers[offset] = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: `${offset} ${offset} ${offset} ${offset}`,
          threshold: 0.1
        });
      }
      observers[offset].observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", initializeObservers);

})();
