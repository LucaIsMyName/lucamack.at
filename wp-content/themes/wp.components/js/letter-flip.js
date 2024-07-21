/**
 * LetterFlip library for animating text characters.
 * @namespace
 */
const LetterFlipStyle = `
.letter {
    display: inline-block;
    transition: transform 2s, opacity 2s; /* Adjust the timing if needed */
    backface-visibility: hidden; /* Hide the back of the letter during the flip */
}
`

const LetterFlip = (() => {
  /**
   * Initializes the letter flip animation on elements with data-letter-flip attributes.
   */
  const init = () => {
    document.querySelectorAll('[data-letter-flip]').forEach(element => {
      // Get attributes
      const timeout = parseInt(element.getAttribute('data-letter-flip-timeout'), 10) || 20;
      const delay = parseInt(element.getAttribute('data-letter-flip-delay'), 10) || 1000;
      const trigger = element.getAttribute('data-letter-flip-trigger') || 'viewport';
      const duration = parseInt(element.getAttribute('data-letter-flip-duration'), 10) || 2000;

      // Process text content
      processText(element);

      // Trigger animation based on specified trigger
      if (trigger === 'viewport') {
        // Check if element is in viewport
        if (isElementInViewport(element)) {
          startAnimation(element, timeout, delay, duration);
        }
        window.addEventListener('scroll', () => {
          if (isElementInViewport(element)) {
            startAnimation(element, timeout, delay, duration);
            window.removeEventListener('scroll', arguments.callee);
          }
        });
      } else {
        // Trigger immediately
        startAnimation(element, timeout, delay, duration);
      }
    });
  };

  /**
   * Processes the text of the element and wraps each character in a span.
   * @param {HTMLElement} element - The target element.
   */
  const processText = (element) => {
    const textContent = element.textContent;
    const newContent = textContent.split('').map(char => {
      return char === ' ' ? ' ' : `<span class="letter">${char}</span>`;
    }).join('');

    element.innerHTML = newContent;
  };

  /**
   * Starts the animation of the letter flip.
   * @param {HTMLElement} element - The target element.
   * @param {number} timeout - The timeout between animations.
   * @param {number} delay - The delay before starting the animation.
   * @param {number} duration - The duration of the animation.
   */
  const startAnimation = (element, timeout, delay, duration) => {
    const letters = element.querySelectorAll('.letter');
    setTimeout(() => {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.transition = `transform ${duration}ms`;
          letter.style.transform = `rotateX(360deg)`;
          letter.style.opacity = 0;
        }, index * timeout);
      });
    }, delay);
  };

  /**
   * Checks if the element is in the viewport.
   * @param {HTMLElement} element - The target element.
   * @returns {boolean} - True if element is in viewport, false otherwise.
   */
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return {
    init
  };
})();

// Initialize the library
document.addEventListener('DOMContentLoaded', () => {
  document.head.insertAdjacentHTML('beforeend', `<style>${LetterFlipStyle}</style>`);
  LetterFlip.init();
});
