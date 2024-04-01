/**
 * @name tooltip.js
 * @version 1.0
 * @author luca mack
 * @todo 
 * change to colocation like <span data-tooltip="My Explainer">Word</span>, 
 * show in center/top default
 * @description 
 * any element with [data-tooltip="Content"] attribute get's displayed as 
 * tooltip on mouseover or focus 
 
*/

(function () {
    /**
     * Get the Tooltip Elements and the body
     */
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    const body = document.querySelector('body');
    /**
     * Loop through all [data-tooltip] element on te page
     * and create the tooltipDiv Element, set the correct styling 
     * and set functionaly to hide/show them
     */
    tooltipElements.forEach((element, index) => {
        /**
         * Get and Style the Tooltip Toggle Element itself
         */
        const tooltipContent = element.getAttribute('data-tooltip');
        const tooltipId = 'tooltip-' + `${Math.floor(Math.random() * 9999)}` + '-' + index;
        element.style.border = tooltip.element.border || '';
        element.style.borderBottom = tooltip.element.textDecoration || '2px dotted blue';
        element.style.backgroundColor = tooltip.element.backgroundColor || 'transparent';
        element.style.color = tooltip.element.color || 'inherit';
        element.setAttribute('tabindex', '1');
        element.setAttribute('aria-describedby', tooltipId);
        /**
        * Create, Append and Style the Tooltip Content Element
        */
        const tooltipDiv = document.createElement('div');
        tooltipDiv.setAttribute('data-tooltip-id', tooltipId);
        tooltipDiv.setAttribute('data-tooltip-content', '');
        tooltipDiv.setAttribute('id', tooltipId);
        tooltipDiv.setAttribute('role', 'tooltip');
        tooltipDiv.setAttribute('data-tooltip-active', 'false');
        tooltipDiv.setAttribute('aria-hidden', 'true');
        tooltipDiv.style.display = 'none';
        tooltipDiv.style.zIndex = '-1';
        /**
         * Get the Attributes -> Object Values -> Default values 
         * for the styling of the tooltip 
         */
        tooltipDiv.style.position = element.getAttribute('data-tooltip-position') || tooltip.content.position || 'absolute'; // Switch between 'aboslute' and 'fixed'
        tooltipDiv.style.border = element.getAttribute('data-tooltip-border') || tooltip.content.border || '1px solid black';
        tooltipDiv.style.fontSize = element.getAttribute('data-tooltip-font-size') || tooltip.content.fontSize || '0.8em';
        tooltipDiv.style.fontFamily = element.getAttribute('data-tooltip-font-family') || tooltip.content.fontFamily || 'inherit';
        tooltipDiv.style.lineHeight = element.getAttribute('data-tooltip-line-height') || tooltip.content.lineHeight || '1.2';
        tooltipDiv.style.background = element.getAttribute('data-tooltip-background') || tooltip.content.background || 'white';
        tooltipDiv.style.padding = element.getAttribute('data-tooltip-padding') || tooltip.content.padding || '5px';
        tooltipDiv.style.borderRadius = element.getAttribute('data-tooltip-border-radius') || tooltip.content.borderRadius || '5px';
        tooltipDiv.style.boxShadow = element.getAttribute('data-tooltip-box-shadow') || tooltip.content.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.1)';
        tooltipDiv.style.maxWidth = element.getAttribute('data-tooltip-max-width') || tooltip.content.maxWidth || 'auto';
        tooltipDiv.style.minWidth = element.getAttribute('data-tooltip-min-width') || tooltip.content.minWidth || 'auto';
        tooltipDiv.style.maxHeight = element.getAttribute('data-tooltip-max-height') || tooltip.content.maxHeight || 'auto';
        tooltipDiv.style.opacity = parseInt(element.getAttribute('data-tooltip-opacity')) || parseInt(tooltip.content.opacity) || 1;
        // console.log(tooltipDiv.style.position, tooltipDiv.style.padding, tooltipDiv.style.fontFamily, tooltipDiv.style.opacity);
        /**
         * set the [data-tooltip] vaue to the 
         * textContent of the created tooltipDiv
         */
        tooltipDiv.textContent = tooltipContent;
        body.appendChild(tooltipDiv);
        /**
         * Insert the ID in the 
         * Tooltip Toggle Element 
         */
        element.setAttribute('data-tooltip-id', tooltipId);
        element.setAttribute('data-tooltip', '');
        /**
         * @name calculateTooltipPosition
         * calculate the position of the tooltipDiv in 
         * relation to the word it should explain
         */
        
        function calculateTooltipPosition() {
            const rect = element.getBoundingClientRect();
            const tooltipOffsetX = parseInt(element.getAttribute('data-tooltip-offset-x')) || parseInt(tooltip.offsetX) || 0;
            const tooltipOffsetY = parseInt(element.getAttribute('data-tooltip-offset-y')) || parseInt(tooltip.offsetY) || 0;
            const tooltipAnchor = element.getAttribute('data-tooltip-anchor') || tooltip.anchor || 'top';

            let leftPosition = rect.left + window.scrollX + element.offsetWidth / 2 - tooltipDiv.offsetWidth / 2 - tooltipOffsetX;
            let topPosition;

            if (tooltipAnchor === 'bottom') {
                topPosition = rect.bottom + window.scrollY + tooltipOffsetY;
            } else {
                topPosition = rect.top + window.scrollY - tooltipDiv.offsetHeight - tooltipOffsetY;
            }

            /* 
             * Check if the tooltip is going out of the viewport and adjust its position
             */
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            /* 
             * Adjust horizontal position 
             */
            if (leftPosition < 0) {
                leftPosition = 0; // Align left edge with viewport
            } else if (leftPosition + tooltipDiv.offsetWidth > viewportWidth) {
                leftPosition = viewportWidth - tooltipDiv.offsetWidth; // Align right edge with viewport
            }

            // Adjust vertical position
            if (topPosition < 0) {
                topPosition = rect.bottom + window.scrollY + tooltipOffsetY; // Move to below the element
            } else if (topPosition + tooltipDiv.offsetHeight > viewportHeight) {
                topPosition = rect.top + window.scrollY - tooltipDiv.offsetHeight - tooltipOffsetY; // Move to above the element
            }

            // Apply the calculated positions
            tooltipDiv.style.left = leftPosition + 'px';
            tooltipDiv.style.top = topPosition + 'px';
        }

        /**
         * Hide the Tooltip
         * and set the correct attributes
         */
        function hideTooltip() {
            tooltipDiv.style.display = 'none';
            tooltipDiv.style.zIndex = '-1';
            tooltipDiv.setAttribute('data-tooltip-active', 'false');
            tooltipDiv.setAttribute('aria-hidden', 'true');
        }
        /**
         * Show the Tooltip
         * and set the correct attributes
         */
        function showTooltip() {
            tooltipDiv.style.display = 'block';
            tooltipDiv.style.zIndex = tooltip.content.zIndex || '9999';
            tooltipDiv.setAttribute('data-tooltip-active', 'true');
            tooltipDiv.setAttribute('aria-hidden', 'false');
            calculateTooltipPosition();
        }

        /** 
         * Add EventListeners for show/hide
         */
        element.addEventListener('mouseout', () => {
            hideTooltip();
        });
        element.addEventListener('blur', () => {
            hideTooltip();
        });
        element.addEventListener('focus', () => {
            showTooltip();
        });
        element.addEventListener('mouseover', () => {
            showTooltip();
        });
    });
})();
