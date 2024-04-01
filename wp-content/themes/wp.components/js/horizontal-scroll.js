// Function to load GSAP and ScrollTrigger in sequence
(function () {
    function loadGSAP() {
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
        gsapScript.onload = () => loadScrollTrigger(); // Load ScrollTrigger after GSAP is loaded
        document.head.appendChild(gsapScript);
    }

    // Function to load ScrollTrigger
    function loadScrollTrigger() {
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js';
        scrollTriggerScript.onload = setupScroll; // Setup scroll when ScrollTrigger is loaded
        document.head.appendChild(scrollTriggerScript);
    }

    // Function to setup horizontal scroll
    function setupScroll() {
        const horizontalScrollContainers = document.querySelectorAll("[data-horizontal-scroll]");

        horizontalScrollContainers.forEach(container => {
            const horizontalScrollItems = container.querySelectorAll("[data-horizontal-scroll-item]");
            const horizontalScrollAnchor = container.getAttribute("data-horizontal-scroll-anchor") || "top";
            const horizontalScrollOffset = parseInt(container.getAttribute("data-horizontal-scroll-offset")) || 0;
            // const totalWidth = horizontalScrollItems.length * window.innerWidth;

            const totalWidth = horizontalScrollItems.length * window.innerWidth;

            console.log('Number of Items:', horizontalScrollItems.length);
            console.log('Total Width:', totalWidth);
            console.log('Window.innerWidth:', window.innerWidth);

            const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;

            console.log('Header Height:', headerHeight);
            const scrollEnd = totalWidth - window.innerWidth;
            console.log('scrollEnd:', scrollEnd);

            gsap.to(horizontalScrollItems, {
                // x: () => `-${totalWidth - window.innerWidth}px`,
                x: () => `-${scrollEnd}px`,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: true,
                    start: `${horizontalScrollAnchor}+=${headerHeight + horizontalScrollOffset}`,
                    // end: () => `+=${totalWidth}`,
                    end: () => `+=${scrollEnd}`,
                    invalidateOnRefresh: true,
                    pinSpacing: false,
                }
            });
        });
    }

    // Inject CSS into <head>
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
        [data-horizontal-scroll] {
            display: flex;
            overflow-x: hidden;
        }
        [data-horizontal-scroll-item] {
            flex: 0 0 100%;      
            max-height: 100vh;     
        }
    `;
        document.head.appendChild(style);
    }

    // Call functions to inject CSS and load GSAP
    injectCSS();
    loadGSAP();
    loadScrollTrigger();
})();
