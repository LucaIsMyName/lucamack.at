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
  "es": [
    "Spanisch",
    "Español"
  ],
  "de": [
    "Deutsch",
    "German",
  ]
};
replaceTextByLanguage(languageObject);


// if the document language is "es-AR" (Spanish - Argentina)
// --> Change the content of a tooltip that has the the dtring "Dunkler Modus" to "Modo Oscuro"
// --> Change the content of a tooltip that has the the dtring "Heller Modus" to "Modo Claro"

document.addEventListener('DOMContentLoaded', function () {
  const lang = document.documentElement.lang;
  if (lang === 'es-AR') {
    const tooltips = document.querySelectorAll('[tooltip]');
    tooltips.forEach((tooltip) => {
      if (tooltip.textContent === 'Dunkler Modus') {
        tooltip.hasAttribute('tooltip', 'Heller Modus') === true ? tooltip.setAttribute('tooltip', 'Modo Oscuro') : null;
      } else if (tooltip.hasAttribute('tooltip', 'Heller Modus') === true) {
        tooltip.hasAttribute('tooltip', 'Heller Modus') === true ? tooltip.setAttribute : null;
      }
    });
  }
});

/**
 * Searches for all elements with a "tooltip" attribute and changes the tooltip text 
 * from "Heller Modus" to "Modo Oscuro" if the document's language is "es-AR".
 */
function changeTooltipToSpanish() {
  if (document.documentElement.lang === 'es-AR') {
    // Find all elements with the "tooltip" attribute
    const tooltipElements = document.querySelectorAll('[tooltip]');
    tooltipElements.forEach(element => {
      if (element.getAttribute('tooltip') === 'Sprache wechseln') {
        // Change the tooltip attribute value to "Modo Oscuro"
        element.setAttribute('tooltip', 'Cambiar Idioma');
      }
    });
  }
  // Check if the document language is "es-AR"
  if (document.documentElement.lang === 'es-AR') {
    // Find all elements with the "tooltip" attribute
    const tooltipElements = document.querySelectorAll('[tooltip]');

    // Loop through each element
    tooltipElements.forEach(element => {
      // Check if the tooltip attribute value is "Heller Modus"
      if (element.getAttribute('tooltip') === 'Nacht Modus') {
        // Change the tooltip attribute value to "Modo Oscuro"
        element.setAttribute('tooltip', 'Turno de noche');
      }
      if (element.getAttribute('tooltip') === 'Nacht Modus') {
        // Change the tooltip attribute value to "Modo Oscuro"
        element.setAttribute('tooltip', 'Modo Oscuro');
      }
      if (element.getAttribute('tooltip') === 'Switch Languge') {
        // Change the tooltip attribute value to "Modo Oscuro"
        element.setAttribute('tooltip', 'Cambiar Idioma');
      }
    });
  }
}

// Call the function to make the change
changeTooltipToSpanish();
// Tippy
