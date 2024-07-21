async function switchView(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    await updateTheDOM(data);
    return;
  }

  // Start the view transition
  const transition = document.startViewTransition(async () => {
    await updateTheDOM(data);
  });

  // Animate after the view transition starts
  await animateFromMiddle(transition);

  // Wait for the view transition to complete
  await transition.ready;
}

async function animateFromMiddle(transition) {
  try {
    // Wait for the view transition to be ready
    await transition.ready;

    // Apply an animation to the document element
    document.documentElement.animate(
      {
        transform: ['scale(1)', 'scale(1.2)'], // Example animation
      },
      {
        duration: 500,
        easing: 'ease-in-out',
      }
    );
  } catch (err) {
    console.error('Animation error:', err);
  }
}

async function updateTheDOM(data) {
  // Example: Update the content of an element with ID 'content'
  const contentElement = document.getElementById('content');

  // Check if the element exists
  if (!contentElement) {
    console.warn('Content element not found');
    return;
  }

  // Simulate a delay to show the async nature of the operation
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulated delay for demo purposes

  // Update the content of the element
  contentElement.innerHTML = data;

  // Optionally, you can handle additional updates or animations here
}