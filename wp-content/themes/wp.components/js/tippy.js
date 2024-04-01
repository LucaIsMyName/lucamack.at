
function setUpTooltips() {
  const allTooltips = document.querySelectorAll('[tooltip]');
  allTooltips.forEach(tooltip => {
    tippy(tooltip, {
      allowHTML: true,
      popperOptions: {
        strategy: tooltip.getAttribute('tooltip-strategy') || 'absolute',
      },
      content: tooltip.getAttribute('tooltip'),
      placement: tooltip.getAttribute('tooltip-placement') || 'top',
      arrow: eval(tooltip.getAttribute('tooltip-arrow')) || false,
      trigger: tooltip.getAttribute('tooltip-trigger') || 'mouseenter focus',
      maxWidth: tooltip.getAttribute('tooltip-max-width') || 320,
      appendTo: document.querySelector(tooltip.getAttribute('tooltip-append-to')) || document.body,
      zIndex: parseInt(tooltip.getAttribute('tooltip-z-index')) || 999,
      offset: [
        parseFloat(tooltip.getAttribute('tooltip-offset-x') || 0),
        parseFloat(tooltip.getAttribute('tooltip-offset-y') || 0)
      ],
    });
  });
}

document.addEventListener('DOMContentLoaded', setUpTooltips());
