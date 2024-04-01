/**
 * @name images.js
 * @description This JS scans the page for images and updates their dimensions to match the rendered dimensions when the page is loaded and resized
 */

(function () {

    /** 
     * @name debounce
     * @param {function} func - The function to be debounced
     * @param {number} wait - The time in milliseconds to wait before firing the function 
     * Debounce function to limit the rate at which a function can fire.  
     * */
    function debounce(func, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        };
    }

    /**
     * @name updateImageDimensions
     * @description This function updates the dimensions of all images on the page
     */
    function updateImageDimensions() {
        var elements = document.querySelectorAll('img, svg');
        elements.forEach(function (el) {
            /**
             * @name setDimensions
             * @description This function sets the dimensions of the image
             */
            function setDimensions() {
                var style = window.getComputedStyle(el);

                /**
                 * Get the rendered width and height of the image
                 */
                var width = parseFloat(style.width);
                var height = parseFloat(style.height);

                /**
                * Round the values
                */
                var roundedWidth = Math.round(width);
                var roundedHeight = Math.round(height);

                /**
                 * Get the original width and height of the image as in the file
                 */
                var originalWidth = el.tagName.toLowerCase() === 'svg' ? el.getBBox().width : el.naturalWidth || el.width;
                var originalHeight = el.tagName.toLowerCase() === 'svg' ? el.getBBox().height : el.naturalHeight || el.height;

                /**
                 * if the data-image-original-width attribute is not set, set it to the value
                 */
                if (el.tagName.toLowerCase() !== 'svg' && el.hasAttribute('data-image-original-width')) {
                    el.setAttribute('data-image-original-width', originalWidth + 'px');
                }
                /**
                * if the data-image-original-height attribute is not set, set it to the value
                */
                if (el.tagName.toLowerCase() !== 'svg' && el.hasAttribute('data-image-original-height')) {
                    el.setAttribute('data-image-original-height', originalHeight + 'px');
                }
                /**
                * set the width and height attribute of the image
                */
                el.setAttribute('width', roundedWidth + 'px');
                el.setAttribute('height', roundedHeight + 'px');
            }

            /**
             * if the image is already loaded, set the dimensions, otherwise wait for it to load
             */
            if (el.complete || el.tagName.toLowerCase() === 'svg') {
                setDimensions();
            } else {
                el.onload = setDimensions;
            }
        });
    }

    /**
     * check all 100ms for changes in the viewport size
     */
    var debouncedUpdateDimensions = debounce(updateImageDimensions, 100);

    /**
     * add event listeners to update the image dimensions when the page is loaded and resized
     */
    window.addEventListener('DOMContentLoaded', updateImageDimensions);
    window.addEventListener('resize', debouncedUpdateDimensions);

})();
