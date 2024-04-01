/**
 * Opens all external links in a new tab.
 */
function openExternalLinksInNewTab() {
    // Get all anchor elements on the page
    const anchors = document.getElementsByTagName('a');

    // Loop through all anchor elements
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        // Check if the link is external
        if (anchor.hostname && anchor.hostname !== window.location.hostname) {
            // Set the target attribute to "_blank" to open the link in a new tab
            anchor.setAttribute('target', '_blank');
        }
    }
}

// Call the function to open external links in a new tab when the page loads
window.onload = function () {
    openExternalLinksInNewTab();
};
