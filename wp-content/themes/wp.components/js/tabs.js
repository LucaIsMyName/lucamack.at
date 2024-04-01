/**
 * @name tabs.js
 * @version 1.0
 * @author luca mack
 * @description checks for [data-tabs] element and with the correct markup provides a tab logic/functionality by adding html attributes
*/
(function () {

    // Get all tab containers
    const tabContainers = document.querySelectorAll('[data-tabs]');
    function insertStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            [data-tabs-content-active] {
                display: none
            }

            [data-tabs-content-active="true"] {
                display: block;
            }`;
        // Setup scroll when ScrollTrigger is loaded
        document.head.appendChild(style);
    }

    insertStyles();

    // Loop through each tab container
    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('[data-tabs-toggle]');
        const tabContents = container.querySelectorAll('[data-tabs-content]');

        // Add click event listeners to the tab buttons for this container
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tabs-toggle');

                // Toggle the active state of tab buttons and tab content for this container
                tabButtons.forEach(btn => {
                    btn.setAttribute('data-tabs-toggle-active', btn === button ? 'true' : '');
                });
                tabContents.forEach(content => {
                    content.setAttribute('data-tabs-content-active', content.getAttribute('data-tabs-content') === tabId);
                    content.setAttribute('aria-hidden', content.getAttribute('data-tabs-content') !== tabId);
                    content.setAttribute('tabindex', content.getAttribute('data-tabs-content') === tabId ? '0' : '-1');
                });
            });
        });

        // Trigger click event on the first tab button to open it by default
        const firstTabButton = tabButtons[0];
        if (firstTabButton) {
            firstTabButton.click();
        }
    });
})();