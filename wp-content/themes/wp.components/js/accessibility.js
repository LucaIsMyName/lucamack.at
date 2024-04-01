/**
 * @name accessibility.js
 * @description an accesibility checker for web-development
 */

(function () {
    // Function to check if an element has an empty attribute
    function hasEmptyAttribute(element, attributeName) {
        return !element.getAttribute(attributeName);
    }

    document.addEventListener('DOMContentLoaded', function () {

        // Configuration object check
        const config = /*window.*/accessibilityJs || {};
        // console.log("Config:", config); // Add this line to check the config object

        function findNearestParent(element) {
            console.log(config.nearestParent);
            const customSelector = config.nearestParent || '[class]' || 'main' || 'header' || 'footer' || 'aside' || 'body';
            // console.log(`Initial Element: `, element);
            // console.log(`Searching for nearest parent with selector: ${customSelector}`); // Debug log

            while (element && element.tagName !== 'BODY' && !element.matches(customSelector)) {
                // console.log(`Current Element: `, element, `Does it match? `, element.matches(customSelector));
                element = element.parentElement;
            }

            // console.log(`Found Parent: `, element);
            return element || document.body;
        }

        // Function to log element details
        function logElementDetails(elements, message, isWarning = true) {
            const logFunc = isWarning ? console.warn : console.error;
            console.groupCollapsed(message);
            elements.forEach(({ element, parentClasses }) => {
                logFunc(`%cElement: %o\nParent classes: %c${parentClasses.join(' ')}`, 'color: yellow;', element, 'color: lime;');
            });
            console.groupEnd();
        }

        // Function to scan images and SVGs for alt attributes and dimensions
        function scanImagesAndSVGs() {
            const imagesAndSVGs = document.querySelectorAll('img, svg');
            let imagesWithoutAlt = [];
            let imagesWithEmptyAlt = [];
            let imagesWithoutDimensions = [];

            imagesAndSVGs.forEach((element) => {
                const parent = findNearestParent(element, config.nearestParent);
                const parentClasses = parent ? Array.from(parent.classList) : ['No matching parent found'];

                const hasAltAttribute = element.hasAttribute('alt');
                const hasWidthAttribute = element.hasAttribute('width');
                const hasHeightAttribute = element.hasAttribute('height');

                if (!hasAltAttribute) {
                    imagesWithoutAlt.push({ element, parentClasses });
                } else if (hasEmptyAttribute(element, 'alt')) {
                    imagesWithEmptyAlt.push({ element, parentClasses });
                }

                if (!hasWidthAttribute || !hasHeightAttribute) {
                    imagesWithoutDimensions.push({ element, parentClasses });
                }
            });

            if (imagesWithoutAlt.length > 0) {
                logElementDetails(imagesWithoutAlt, 'Images without alt attribute:', false);
            }
            if (imagesWithEmptyAlt.length > 0) {
                logElementDetails(imagesWithEmptyAlt, 'Images with empty alt attribute:');
            }
            if (imagesWithoutDimensions.length > 0) {
                logElementDetails(imagesWithoutDimensions, 'Images without width or height attributes:');
            }
        }

        // Function to scan links and buttons for title attributes
        function scanLinksAndButtons() {
            const linksAndButtons = document.querySelectorAll('button');
            let elementsWithoutTitle = [];
            let elementsWithEmptyTitle = [];

            linksAndButtons.forEach((element) => {
                const parent = findNearestParent(element, config.nearestParent);
                const parentClasses = parent ? Array.from(parent.classList) : ['No matching parent found'];

                const hasTitleAttribute = element.hasAttribute('title');

                if (!hasTitleAttribute) {
                    elementsWithoutTitle.push({ element, parentClasses });
                } else if (hasEmptyAttribute(element, 'title')) {
                    elementsWithEmptyTitle.push({ element, parentClasses });
                }
            });

            if (elementsWithoutTitle.length > 0) {
                logElementDetails(elementsWithoutTitle, 'Buttons without Title Tag:');
            }
            if (elementsWithEmptyTitle.length > 0) {
                logElementDetails(elementsWithEmptyTitle, 'Buttons/Links with an empty Title attribute:');
            }
        }

        // Function to check font size on viewport resize
        function checkFontSize() {
            window.addEventListener('resize', () => {
                const fontSize = window.getComputedStyle(document.body).fontSize;
                const fontSizeNum = parseFloat(fontSize);

                if (fontSizeNum < 12) {
                    console.warn('Font under 12px size found');
                }
            });
        }

        // Call the functions to perform scans
        scanImagesAndSVGs();
        scanLinksAndButtons();
        checkFontSize();
    });
})();
