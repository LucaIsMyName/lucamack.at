/**
 * Object Info
 * @version 1.0.0
 * @description A JavaScript snippet that adds data attributes to HTML elements with information about their size and position relative to the viewport and document.
 */
(function () {

    /**
     * randomId
     * @description A random number used to identify the elements with the data-object-info-debug attribute.
     */
    randomId = Math.floor(Math.random() * 9999);

    /**
     * calculateObjectInfo
     * @description Calculates the object info and adds the data attributes to the elements.
     * @returns {void}
     */
    function calculateObjectInfo() {

        /**
         * elements
         * @description An array of all elements with the data-object-info attribute.
         */
        var elements = document.querySelectorAll('[data-object-info]');

        /**
         * style
         * @description A style tag that contains the CSS for the data-object-info-debug attribute.
         */
        style = document.createElement('style');

        /**
         * style
         * @description A style tag that contains the CSS for the data-object-info-id attribute.
         */
        style.textContent = `
        [data-object-info-debug] {
            position: relative;
            --oj-max-width: min(300px, 100%);
            outline-width: 3px;
            outline-style: solid;
            outline-offset: -1.5px;
            box-shadow: 0 0 1rem rgba(0,0,0,0.33);
        }
       
        [data-object-info-debug]::after {
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            right: 0.5rem;
            padding: 1em;
            border-radius: 0.5em;
            background-color: #ffffffb3;
            color: #000;
            backdrop-filter: blur(0.5em);
            text-shadow: 0.05em 0.05em 0.1em rgba(0,0,0,0.5);
            box-shadow: 0 0 0.1em rgba(0,0,0,0.5);
            max-width: var(--oj-max-width);
            word-break: break-word;
            font-size: 0.66rem;
            line-height: 1.25;
            font-family: monospace;
            z-index: 9999;
            text-shadow: 0 0 1px rgba(0,0,0, 0.33);
           
        }
        [color-theme="dark"] {
            [data-object-info-debug] {
                box-shadow: 0 0 1rem rgba(255,255,255,0.33);

            }
            [data-object-info-debug]::after {
                background-color: #000000b3;
                color: #fff;
                
            }
        }`;

        /**
         * @description Appends the style tag to the head of the document.
         */
        document.head.appendChild(style);

        /**
         * @description Loops through all elements with the data-object-info attribute and calculates the object info.
         */
        for (var i = 0; i < elements.length; i++) {
            /**
             * el
             * @description The current element in the loop.
             */
            var el = elements[i];
            /**
             * style
             * @description The computed style of the current element in the loop.
             */
            var style = window.getComputedStyle(el);
            /**
             * widthPx
             * @description The width of the current element in pixels.
             */
            var widthPx = parseFloat(style.width);
            /**
             * heightPx
             * @description The height of the current element in pixels.
             */
            var heightPx = parseFloat(style.height);
            /**
             * roundedWidth
             * @description The width of the current element in pixels rounded to the nearest integer.
             */
            var roundedWidth = Math.round(widthPx);
            /**
             * roundedHeight
             * @description The height of the current element in pixels rounded to the nearest integer.
             */
            var roundedHeight = Math.round(heightPx);
            /**
             * viewPortWidth
             * @description The width of the viewport in pixels.
             */
            var viewPortWidth = window.innerWidth;
            /**
             * viewPortHeight
             * @description The height of the viewport in pixels.
             */
            var viewPortHeight = window.innerHeight;
            /**
             * DocWidth
             * @description The width of the document in pixels.
             */
            var DocWidth = document.documentElement.scrollWidth;
            /**
             * DocHeight
             * @description The height of the document in pixels.
             */
            var DocHeight = document.documentElement.scrollHeight;
            /**
             * viewPortWidthRelative
             * @description The width of the current element in pixels relative to the viewport.
             */
            var viewPortWidthRelative = Math.round((100 / viewPortWidth * roundedWidth));
            /**
             * viewPortHeightRelative
             * @description The height of the current element in pixels relative to the viewport.
             */
            var viewPortHeightRelative = Math.round((100 / viewPortHeight * roundedHeight));
            /**
             * docWidthRelative
             * @description The width of the current element in pixels relative to the document.
             */
            var docWidthRelative = Math.round((100 / DocWidth * roundedWidth));
            /**
             * docHeightRelative
             * @description The height of the current element in pixels relative to the document.
             */
            var docHeightRelative = Math.round((100 / DocHeight * roundedWidth));
            /**
             * leftToViewport
             * @description The distance from the left edge of the viewport to the left edge of the current element in pixels.
             */
            var rect = el.getBoundingClientRect();
            /**
             * leftToViewport
             * @description The distance from the left edge of the viewport to the left edge of the current element in pixels.
             */
            var leftToViewport = rect.left;
            /**
             * rightToViewport
             * @description The distance from the right edge of the viewport to the right edge of the current element in pixels.
             */
            var topToViewport = rect.top;
            /**
             * rightToViewport
             * @description The distance from the right edge of the viewport to the right edge of the current element in pixels.
             */
            var rightToViewport = window.innerWidth - rect.right;
            /**
             * bottomToViewport
             * @description The distance from the bottom edge of the viewport to the bottom edge of the current element in pixels.
             */
            var bottomToViewport = window.innerHeight - rect.bottom;
            /**
             * spacingLeft
             * @description The distance from the left edge of the viewport to the left edge of the current element in pixels rounded to the nearest integer.
             */
            var spacingLeft = Math.round(leftToViewport);
            /**
             * spacingRight
             * @description The distance from the right edge of the viewport to the right edge of the current element in pixels rounded to the nearest integer.
             */
            var spacingRight = Math.round(rightToViewport);
            /**
             * spacingTop
             * @description The distance from the top edge of the viewport to the top edge of the current element in pixels rounded to the nearest integer.
             */
            var spacingTop = Math.round(topToViewport);
            /**
             * spacingBottom
             * @description The distance from the bottom edge of the viewport to the bottom edge of the current element in pixels rounded to the nearest integer.
             */
            var spacingBottom = Math.round(bottomToViewport);
            /**
             * spacingLeftViewportRelative
             * @description The distance from the left edge of the viewport to the left edge of the current element in pixels relative to the viewport.
             */
            var spacingLeftViewportRelative = Math.round((100 / viewPortWidth * spacingLeft));
            /**
             * spacingRightViewportRelative
             * @description The distance from the right edge of the viewport to the right edge of the current element in pixels relative to the viewport.
             */
            var spacingRightViewportRelative = Math.round((100 / viewPortWidth * spacingRight));
            /**
             * spacingTopViewportRelative
             * @description The distance from the top edge of the viewport to the top edge of the current element in pixels relative to the viewport.
             */
            var spacingTopViewportRelative = Math.round((100 / viewPortHeight * spacingTop));
            /**
             * spacingBottomViewportRelative
             * @description The distance from the bottom edge of the viewport to the bottom edge of the current element in pixels relative to the viewport.
             */
            var spacingBottomViewportRelative = Math.round((100 / viewPortHeight * spacingBottom));
            /**
             * spacingLeftDocRelative
             * @description The distance from the left edge of the viewport to the left edge of the current element in pixels relative to the document.
             */
            var spacingLeftDocRelative = Math.round((100 / DocWidth * spacingLeft));
            /**
             * spacingRightDocRelative
             * @description The distance from the right edge of the viewport to the right edge of the current element in pixels relative to the document.
             */
            var spacingRightDocRelative = Math.round((100 / DocWidth * spacingRight));
            /**
             * spacingTopDocRelative
             * @description The distance from the top edge of the viewport to the top edge of the current element in pixels relative to the document.
             */
            var spacingTopDocRelative = Math.round((100 / DocHeight * docHeightRelative));
            /**
             * spacingBottomDocRelative
             * @description The distance from the bottom edge of the viewport to the bottom edge of the current element in pixels relative to the document.
             */
            var spacingBottomDocRelative = Math.round((100 / DocHeight * docHeightRelative));

            /**
             * @description Adds the data attributes to the current element in the loop.
             */
            if (el.hasAttribute('data-object-info-attributes')) {
                el.setAttribute('data-object-info-width', roundedWidth + 'px');
                el.setAttribute('data-object-info-height', roundedHeight + 'px');
                el.setAttribute('data-object-info-aspect', '1/' + (roundedWidth / roundedHeight).toFixed(2));
                el.setAttribute('data-object-info-viewport-width-relative', viewPortWidthRelative + '%');
                el.setAttribute('data-object-info-viewport-height-relative', viewPortHeightRelative + '%');
                el.setAttribute('data-object-info-document-width-relative', docWidthRelative + '%');
                el.setAttribute('data-object-info-document-height-relative', docHeightRelative + '%');
                el.setAttribute('data-object-info-left-to-viewport', Math.round(leftToViewport) + 'px');
                el.setAttribute('data-object-info-top-to-viewport', Math.round(topToViewport) + 'px');
                el.setAttribute('data-object-info-right-to-viewport', Math.round(rightToViewport) + 'px');
                el.setAttribute('data-object-info-bottom-to-viewport', Math.round(bottomToViewport) + 'px');
                el.setAttribute('data-object-info-left-to-viewport-relative', spacingLeftViewportRelative + '%');
                el.setAttribute('data-object-info-top-to-viewport-relative', spacingTopViewportRelative + '%');
                el.setAttribute('data-object-info-right-to-viewport-relative', spacingRightViewportRelative + '%');
                el.setAttribute('data-object-info-bottom-to-viewport-relative', spacingBottomViewportRelative + '%');
                el.setAttribute('data-object-info-left-to-doc-relative', spacingLeftDocRelative + '%');
                el.setAttribute('data-object-info-top-to-doc-relative', spacingTopDocRelative + '%');
                el.setAttribute('data-object-info-right-to-doc-relative', spacingRightDocRelative + '%');
                el.setAttribute('data-object-info-bottom-to-doc-relative', spacingBottomDocRelative + '%');
            }
            /**
             * summaryContent
             * @description A string that contains the data attributes of the current element in the loop.
             */
            let summaryContent = '{ ' +
                'absolute: { ' +
                'width:' + roundedWidth + 'px, ' +
                'height:' + roundedHeight + 'px, ' +
                'aspect:' + '1/' + (roundedWidth / roundedHeight).toFixed(2) + ', ' +
                'spacing-top:' + spacingTop + 'px, ' +
                'spacing-right:' + spacingRight + 'px, ' +
                'spacing-bottom:' + spacingBottom + 'px, ' +
                'spacing-left:' + spacingLeft + 'px, ' +
                ' }, ' +
                'viewport: { ' +
                'width:' + viewPortWidthRelative + '%, ' +
                'height:' + viewPortHeightRelative + '%, ' +
                'spacing-top:' + spacingTopViewportRelative + '%, ' +
                'spacing-right:' + spacingRightViewportRelative + '%, ' +
                'spacing-bottom:' + spacingBottomViewportRelative + '%, ' +
                'spacing-left:' + spacingLeftViewportRelative + '% ' +
                '}, ' +
                'document: { ' +
                'width:' + docWidthRelative + '%, ' +
                'height:' + docHeightRelative + '%, ' +
                'spacing-top:' + spacingTopDocRelative + '%, ' +
                'spacing-right:' + spacingRightDocRelative + '%, ' +
                'spacing-bottom:' + spacingBottomDocRelative + '%, ' +
                'spacing-left:' + spacingLeftDocRelative + '% ' +
                '} ' +
                '}'
            /**
             * @description Adds the data-object-info attribute to the current element in the loop.
             */
            el.setAttribute('data-object-info', summaryContent);
            /**
             * @description Adds the data-object-info-id attribute to the current element in the loop.
             */
            if (el.hasAttribute('data-object-info-debug')) {
                /**
                 * randomNumberR
                 * @description A random number between 0 and 255.
                 */
                const randomNumberR = Math.floor(Math.random() * 256);
                /**
                 * randomNumberG
                 * @description A random number between 0 and 255.
                 */
                const randomNumberG = Math.floor(Math.random() * 256);
                /**
                 * randomNumberB
                 * @description A random number between 0 and 255.
                 */
                const randomNumberB = Math.floor(Math.random() * 256);
                /**
                 * @description Adds the data-object-info-debug attribute to the current element in the loop.
                 */
                el.style.outlineColor = `rgba(${randomNumberR}, ${randomNumberG}, ${randomNumberB}, 0.33)`;
                /**
                 * @description Adds the data-object-info-id attribute to the current element in the loop.
                 */
                el.setAttribute('data-object-info-id', `${randomId}-${i}`);
                /**
                 * @description Adds the CSS for the data-object-info-id attribute to the head of the document.
                 */
                styleTag = document.createElement('style');
                styleTag.textContent = `
                [data-object-info-id="${randomId}-${i}"]::after {
                    content: 'object-info-id="${randomId}-${i}" = ${summaryContent}';
                   
                }`;
                document.head.appendChild(styleTag);
            }
        }
    }
    /**
     * @description Calls the calculateObjectInfo function when the page loads, when the window is resized, and when the page is scrolled.
     */
    window.addEventListener('load', calculateObjectInfo);
    window.addEventListener('resize', calculateObjectInfo);
    window.addEventListener('scroll', calculateObjectInfo);

})();
