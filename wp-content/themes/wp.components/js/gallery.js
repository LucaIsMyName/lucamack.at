/**
 * Gallery
 */


const allGalleries = document.querySelectorAll('[data-gallery]');

allGalleries.forEach(container => {
  if (container.dataset.galleryHasLightbox === 'true') {
    // Find the links within this specific gallery container
    const links = container.querySelectorAll('a[data-gallery-item]');

    // Initialize SimpleLightbox for this gallery container
    const lightbox = new SimpleLightbox(links, {
      nav: true, // Enable navigation (arrows)
      navText: [`
      <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `, `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
      `], // Set custom navigation text (left arrow, right arrow)
      captions: true, // Enable captions
      captionsData: 'title', // Set the attribute to use for captions (e.g., 'title', 'alt')
      captionDelay: 0, // Set the delay (in milliseconds) before showing the caption
      close: true, // Show close button
      closeText: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      `, // Set custom close button text
      closeOnOverlayClick: true, // Close lightbox when clicking outside the content
      disableScroll: true, // Disable page scrolling when lightbox is open
      history: true, // Enable browser history management
      swipeClose: true, // Close lightbox when swiping up or down
      showCounter: true, // Show image counter
      animationSpeed: 0, // Set animation speed (in milliseconds)
      loop: true, // Loop through images
      enableKeyboard: true, // Enable keyboard navigation
      docClose: true, // Close lightbox when pressing Esc key
      alertError: true, // Show alert if image could not be loaded
      disableRightClick: false, // Disable right-click context menu on images
      disableWheelControls: false, // Disable mouse wheel controls
      lazyLoading: true, // Enable lazy loading
      widthRatio: 0.8, // Set maximum width as a ratio of viewport width
      heightRatio: 0.9, // Set maximum height as a ratio of viewport height
      scaleFactor: 1.0, // Set image scale factor
      disableHash: false, // Disable hash navigation
      urlAttribute: 'href', // Set the attribute to use for image URLs
      filter: null, // Set filter selector for images 
      elements: null, // Set custom elements for lightbox
      domStructure: null, // Set custom DOM structure
      spinner: true, // Show spinner while loading images
      spinnerHtml: null, // Set custom spinner HTML
      beforeOpen: null, // Callback function to execute before opening the lightbox
      afterClose: null // Callback function to execute after closing the lightbox
    });
  }
});

