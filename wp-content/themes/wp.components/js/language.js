/**
 * Replace text in DOM elements based on language object.
 * @param {Object} langObj - Language object containing language mappings.
 */
function replaceTextByLanguage(langObj) {
  // Loop through each language key in the language object
  Object.keys(langObj).forEach(langKey => {
    // Get the array of text values for the current language key
    const textValues = langObj[langKey];

    // Loop through each text value for the current language key
    textValues.forEach(textValue => {
      // Find elements with class .lang-item containing the text value
      const elements = document.querySelectorAll('.lang-item :is(span, div)');
      elements.forEach(element => {
        // Check if the element's text content matches the text value
        if (element.textContent.includes(textValue)) {
          // Replace the text content with the language key
          element.textContent = langKey;
        }
      });
    });
  });
}

// Example usage:
const languageObject = {
  "en": [
    "Englisch",
    "English",
  ],
  "de": [
    "Deutsch",
    "German"
  ]
};
replaceTextByLanguage(languageObject);


// Tippy

document.addEventListener('DOMContentLoaded', function () {
  const langNav = document.querySelectorAll('.language-nav');
  langNav.forEach((nav) => {
    const langNavItems = nav.querySelectorAll('.lang-item a');
    langNavItems.forEach((item) => {
      item.setAttribute('tooltip', 'Switch Language');
      tippy(item, {
        content: item.getAttribute('tooltip'),
        placement: 'bottom',
        arrow: false,
        offset: [0, 5],
      });
    });
  });
});