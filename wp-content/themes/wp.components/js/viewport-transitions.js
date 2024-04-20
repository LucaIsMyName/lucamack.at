async function switchView(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    await updateTheDOM(data);
    return;
  }

  const transition = document.startViewTransition(async () => {
    await updateTheDOM(data);
  });

  animateFromMiddle(transition);

  await transition.updateCallbackDone;
}

async function animateFromMiddle(transition) {
  try {
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [`inset(50%)`, `inset(0)`],
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  } catch (err) {
    // You might want to log this error, but it shouldn't break the app
  }
}