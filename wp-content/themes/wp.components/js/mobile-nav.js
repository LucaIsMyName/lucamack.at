
document.addEventListener('DOMContentLoaded', function () {
    // Get the mobile nav elements
    const mobileNavContainer = document.querySelector('[data-mobile-nav="container"]');
    const mobileNavOpenButton = document.querySelector('[data-mobile-nav="open"]');
    const mobileNavCloseButton = document.querySelector('[data-mobile-nav="close"]');
    // const mainContainer = document.querySelector('.main-container');

    console.log(mobileNavContainer, mobileNavOpenButton, mobileNavCloseButton);

    // Function to open the mobile nav
    function openMobileNav() {
        console.log('Opening mobile nav');
        mobileNavContainer.setAttribute('data-mobile-nav-active', 'true');
        // mainContainer.style.overflowY = 'hidden';
    }

    // Function to close the mobile nav
    function closeMobileNav() {
        console.log('Closing mobile nav');
        mobileNavContainer.setAttribute('data-mobile-nav-active', 'false');
        // mainContainer.style.overflowY = 'initial';
    }

    // Event listener for opening the mobile nav
    mobileNavOpenButton.addEventListener('click', openMobileNav);

    // Event listener for closing the mobile nav
    mobileNavCloseButton.addEventListener('click', function () {
        closeMobileNav();
        // mainContainer.style.overflowY = 'auto'; // Re-enable scrolling when nav is closed
    });

    // Close the mobile nav when clicking outside of it (optional)
    document.addEventListener('click', function (event) {
        if (!mobileNavContainer.contains(event.target) && event.target !== mobileNavOpenButton) {
            closeMobileNav();
            // mainContainer.style.overflowY = 'auto'; // Re-enable scrolling when nav is closed
        }
    });

    // Event listener for clicks on anchor links in the mobile nav
    document.querySelectorAll(`[data-mobile-nav="container"] a[href*="#"]`).forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            closeMobileNav();
            // mainContainer.style.overflowY = 'auto'; // Re-enable scrolling when nav is closed
        });
    });
});

