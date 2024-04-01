/**
 * @name accordion.js
 * @version 1.0
 * @author luca mack
 * @description make every element with the [data-accordion-group] attribute and the correct markup into an animated accordion
*/
(function () {

  document.addEventListener('DOMContentLoaded', function () {
    var accordionGroups = document.querySelectorAll('[data-accordion-group]');

    accordionGroups.forEach(function (group) {
      var accordions = group.querySelectorAll('[data-accordion]');
      var activeAccordion = null;

      accordions.forEach(function (accordion) {
        var title = accordion.querySelector('[data-accordion-title]');
        var content = accordion.querySelector('[data-accordion-content]');
        accordion.setAttribute('style', 'cursor: pointer;');
        // Add click event listener to toggle accordion
        title.addEventListener('click', function () {
          toggleAccordion(accordion);
        });

        // Keyboard accessibility
        title.addEventListener('keydown', function (event) {
          if (event.code === 'Enter' || event.code === 'Space') {
            event.preventDefault();
            toggleAccordion(accordion);
          }
        });

        // ARIA attributes
        accordion.setAttribute('role', 'presentation');
        title.setAttribute('role', 'button');
        title.setAttribute('aria-expanded', 'false');
        content.setAttribute('role', 'region');
        content.setAttribute('aria-hidden', 'true');
        content.setAttribute('tabindex', '-1');

        // Hide content by default
        content.style.height = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'height 0.3s ease-in-out';

        // Set max-height to allow content to animate
        var maxHeight = content.scrollHeight + 'px';
        content.style.maxHeight = maxHeight;

        // Collapse content by default
        content.style.height = '0';
        title.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      });

      function toggleAccordion(accordion) {
        const title = accordion.querySelector('[data-accordion-title]');
        const content = accordion.querySelector('[data-accordion-content]');

        const isExpanded = title.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          // Collapse the accordion
          content.style.height = '0';
          title.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');
          content.setAttribute('tabindex', '-1');
        } else {
          // Collapse the active accordion within the same accordion group (if any)
          const activeAccordions = group.querySelectorAll('[data-accordion]');
          activeAccordions.forEach(function (activeAccordion) {
            const activeTitle = activeAccordion.querySelector('[data-accordion-title]');
            const activeContent = activeAccordion.querySelector('[data-accordion-content]');
            activeContent.style.height = '0';
            activeTitle.setAttribute('aria-expanded', 'false');
            activeContent.setAttribute('aria-hidden', 'true');
            content.setAttribute('tabindex', '-1');

          });

          // Expand the clicked accordion
          content.style.height = content.scrollHeight + 'px';
          content.style.maxHeight = content.scrollHeight + 'px';
          title.setAttribute('aria-expanded', 'true');
          content.setAttribute('aria-hidden', 'false');
        }
      }
    });
  });
})();
