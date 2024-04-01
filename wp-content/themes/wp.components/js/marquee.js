/**
 * @name marquee.js
 * @version 1.0
 * @author luca mack 
 */
(function () {
    // JavaScript to implement the marquee effect with respect for prefers-reduced-motion
    const marqueeElements = document.querySelectorAll('[data-marquee]');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        marqueeElements.forEach((marquee) => {
            const speed = marquee.getAttribute('data-marquee-speed') || 3000; // Default speed is 3000ms
            const reverse = marquee.getAttribute('data-marquee-reverse') || false;

            marquee.style.animation = `marquee ${speed}ms linear infinite ${reverse ? 'reverse' : 'normal'}`;
        });
    } else {
        // Here you can add alternative styling or behavior for users who prefer reduced motion
        marqueeElements.forEach((marquee) => {
            // Example: Remove the marquee effect and just display the content statically
            marquee.style.overflow = 'auto';
        });
    }
})();

