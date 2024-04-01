/**
 * @name splash-screen.js
 * @version 1.0
 * @author luca mack
 * @description looks for [data-splash-screen] element on page and shows it while the DOM laods
*/
(function () {
    // Wait until the  DOM is loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Delay in Milliseconds
        const delayInMilliseconds = 5000;

        // Show the Splash Screen
        const splashScreen = document.querySelector("[data-splash-screen]");
        splashScreen.style.display = "block";

        // Set the Timeout
        const timeoutId = setTimeout(function () {
            splashScreen.style.display = "none";
        }, delayInMilliseconds);

        // Observe when DOM is loaded and delete the splash screen
        window.addEventListener("load", function () {
            // Page was found, clear the timeout
            clearTimeout(timeoutId);
            splashScreen.style.display = "none";
        });
    });
})();
