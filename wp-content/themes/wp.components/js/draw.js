// Create a new Two.js instance
const two = new Two({
  width: window.innerWidth,
  height: window.innerHeight - document.querySelector('header').offsetHeight,
  autostart: true
}).appendTo(document.querySelector('#draw'));

// Create a drawing path
let path = null;
let isDrawing = false;
let lastPoint = null;

// Function to handle mouse down event
function onMouseOver(event) {
  // Create a new path
  path = new Two.Path();
  path.vertices.push(new Two.Vector(event.clientX, event.clientY));
  path.linewidth = 4; // Increase line width for 3D effect
  path.fill = 'none';
  two.add(path);
}


// Function to handle mouse down event
function onMouseDown(event) {
  isDrawing = true;
  lastPoint = new Two.Vector(event.clientX, event.clientY);
  path = new Two.Path(lastPoint.x, lastPoint.y);
  path.linewidth = 4; // Increase line width for 3D effect
  path.noFill();
  two.add(path);
}
// Function to handle mouse move event
function onMouseMove(event) {
  if (!isDrawing) return;

  // Calculate mid-point
  const currentPoint = new Two.Vector(event.clientX, event.clientY);
  const midPoint = new Two.Vector((lastPoint.x + currentPoint.x) / 2, (lastPoint.y + currentPoint.y) / 2);

  // Add quadratic Bézier curve
  path.vertices.push(new Two.Vector(midPoint.x, midPoint.y));
  path.vertices.push(new Two.Vector(currentPoint.x, currentPoint.y));

  lastPoint = currentPoint;
}

// Function to handle mouse up event
function onMouseUp(event) {
  isDrawing = false;
  lastPoint = null;
}

// Function to handle mouse up event
function onMouseOut(event) {
  // Reset the path
  path = null;
}

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listeners for mouse events
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mouseover', onMouseOver);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseout', onMouseOut);
