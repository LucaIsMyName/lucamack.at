/**
 * @name modal.js
 * @version 1.0
 * @author luca mack
 * @description looks for [data-modal="someId"] element on page and shows it when the corresponfing [data-modal-toggle-open="someId"], [data-modal-toggle-close="someId"] or [data-modal-toggle="someId"]
 * @todo: if id in header changes, also undisplay or change the modal
*/
(function () {

    document.addEventListener('DOMContentLoaded', function () {
        // Get all modal elements with the 'data-modal' attribute
        const modalElements = document.querySelectorAll('[data-modal]');
        let openModalId = null; // Track the currently open modal ID
        let scrollPositionBeforeModalOpen = 0; // Store the scroll position

        function openModal(modalId) {
            const modal = document.querySelector(`[data-modal][id="${modalId}"]`);
            if (modal) {
                // Store the current scroll position
                scrollPositionBeforeModalOpen = window.scrollY;

                modal.setAttribute('data-modal-active', 'true');
                modal.setAttribute('aria-hidden', 'false');
                modal.setAttribute('tab-index', '0');

                // Update the URL fragment identifier to match the modal ID
                window.location.hash = modalId;
                // Disable scrolling on the main content
                document.body.style.overflow = 'hidden';
                console.log('modal opened');
                openModalId = modalId; // Set the currently open modal ID
            }
        }

        function closeModal(modalId) {
            const modal = document.querySelector(`[data-modal][id="${modalId}"]`);
            if (modal) {
                modal.setAttribute('data-modal-active', 'false');
                modal.setAttribute('aria-hidden', 'true');
                modal.setAttribute('tab-index', '-1');
                // Remove the modal ID from the URL fragment
                window.location.hash = '';
                // Enable scrolling on the main content
                document.body.style.overflow = 'auto';
                console.log('modal closed');
                openModalId = null; // Reset the currently open modal ID

                // Restore the scroll position
                window.scrollTo(0, scrollPositionBeforeModalOpen);
            }
        }

        function toggleModal(modalId) {
            if (modalId === openModalId) {
                closeModal(modalId); // Close the modal if it's already open
                // Check if the anchor link is within the same page
                const anchorLink = document.querySelector(`a[href="#${modalId}"]`);
                if (anchorLink) {
                    // Scroll to the anchor link's position
                    anchorLink.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                openModal(modalId);
                // Check if the anchor link is within the same page
                const anchorLink = document.querySelector(`a[href="#${modalId}"]`);
                if (anchorLink) {
                    // Scroll to the anchor link's position
                    anchorLink.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }


        // Add an event listener to the document to handle clicks on anchor links
        document.addEventListener('click', function (event) {
            const target = event.target;
            const toggleCloseId = target.getAttribute('data-modal-toggle-close');
            const toggleOpenId = target.getAttribute('data-modal-toggle-open');
            const toggleId = target.getAttribute('data-modal-toggle');

            // Check if the clicked element is an anchor link
            if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href').startsWith('#')) {
                const hash = target.getAttribute('href').substring(1); // Get the hash value

                // Check if the anchor link points to a modal
                const modal = document.querySelector(`[data-modal][id="${hash}"]`);
                if (modal) {
                    // Close the modal when an anchor link inside it is clicked
                    closeModal(hash);
                } else {
                    // Update the URL hash to match the anchor link's ID
                    window.location.hash = hash;
                }
            }

            // Handle modal toggles
            if (toggleCloseId) {
                closeModal(toggleCloseId);
            } else if (toggleOpenId) {
                openModal(toggleOpenId);
            } else if (toggleId) {
                toggleModal(toggleId);
            }
        });

        function checkUrlFragment() {
            const currentModalId = window.location.hash.substring(1);
            if (currentModalId !== openModalId) {
                // Close the currently open modal if the hash doesn't match
                closeModal(openModalId);

                // Open the modal if the hash matches a modal ID
                if (currentModalId) {
                    openModal(currentModalId);
                }
            } else {
                // If the modal is open and the hash matches, check if it's an anchor link within the modal
                const modal = document.querySelector(`[data-modal][id="${currentModalId}"]`);
                if (modal) {
                    const anchorLink = modal.querySelector(`a[href="#${currentModalId}"]`);
                    if (anchorLink) {
                        // Scroll to the anchor link's position within the modal
                        anchorLink.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }

        // Add an event listener to the window for URL fragment changes
        window.addEventListener('hashchange', function () {
            checkUrlFragment();
        });

        // Call the function to check the URL fragment initially
        checkUrlFragment();
    });
})();
