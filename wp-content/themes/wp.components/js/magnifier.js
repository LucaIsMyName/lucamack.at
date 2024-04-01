// const magnifier = document.querySelector('[magnifier]');
// const magnifierZoom = magnifier.getAttribute('magnifier-zoom');
// const magnifierSize = magnifier.getAttribute('magnifier-size');

// const magnifierElem = document.createElement('div');
// magnifierElem.id = 'magnifier';
// magnifierElem.style.backgroundSize = magnifierZoom;
// magnifierElem.style.width = magnifierSize;
// magnifierElem.style.height = magnifierSize;
// document.body.appendChild(magnifierElem);

// document.addEventListener('mousemove', (event) => {
//   magnifierElem.style.display = 'block';
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   const halfSize = parseInt(magnifierSize) / 2;
//   magnifierElem.style.left = mouseX - halfSize + 'px';
//   magnifierElem.style.top = mouseY - halfSize + 'px';

//   // Update the background position to match the mouse position for zoom effect
//   magnifierElem.style.backgroundPosition = -mouseX * (parseInt(magnifierZoom) / 100 - 1) + 'px '
//     + -mouseY * (parseInt(magnifierZoom) / 100 - 1) + 'px';
// });

// document.addEventListener('mouseleave', () => {
//   magnifierElem.style.display = 'none';
// });