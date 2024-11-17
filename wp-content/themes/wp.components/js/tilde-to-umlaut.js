// tilde-to-umlaut.js

const _ANIMATION_TIME = 300;
const _ANIMATION_DURATION = 2000;

const umlaut = "M32.24,5.778H53.682V-14.56H32.24ZM2.6,5.778H24.042V-14.56H2.6Z";
const tilde = "M13.106,9.357c.946-4.1,2.68-5.676,5.36-5.676,5.36,0,11.509,4.414,21.127,4.414,8.356,0,14.189-7.725,16.554-21.6L45.9-15.08C44.8-10.193,42.588-9.4,40.223-9.4c-5.991,0-11.509-4.1-20.811-4.1C9.637-13.5,5.065-4.517,2.7,7.465Z";

// export async function tildeToUmlaut(selector) {
//     await initAnimation(selector, {
//         viewBox: "-10 -30 85 60",
//         left: '0',
//         width: '100%',
//         height: '100%'
//     });
// }

export async function tildeToUmlautTop(selector) {
    await initAnimation(selector, {
        viewBox: "-5 -30 65 60",
        left: '5%',
        width: '90%',
        height: 'auto'
    });
}

async function initAnimation(selector, config) {
    if (typeof Snap === 'undefined') {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js');
    }

    const elements = document.querySelectorAll(selector);
    const paths = [];

    elements.forEach(element => {
        const container = createContainer(element);
        const svgOverlay = createSvgOverlay(container, config);
        const s = Snap(svgOverlay);
        s.attr({ viewBox: config.viewBox });

        const path = s.path(umlaut);
        path.attr({
            fill: getColor(),
            stroke: 'none'
        });
        paths.push(path);

        animatePath(path);
    });

    observeColorTheme(paths);
}

function createContainer(element) {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.display = 'block';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.color = 'var(--color-text)';

    container.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(container);

    return container;
}

function createSvgOverlay(container, config) {
    const svgOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgOverlay.style.position = 'absolute';
    svgOverlay.style.top = '0';
    svgOverlay.style.left = config.left;
    svgOverlay.style.width = config.width;
    svgOverlay.style.height = config.height;
    svgOverlay.style.overflow = 'visible';
    // container.querySelector('div').innerHTML = '';
    // clear the container
    container.querySelector('svg')?.remove();

    container.appendChild(svgOverlay);

    return svgOverlay;
}

function animatePath(path) {
    let isUmlaut = true;

    function animate() {
        const from = isUmlaut ? umlaut : tilde;
        const to = isUmlaut ? tilde : umlaut;

        path.animate({ d: to }, _ANIMATION_TIME, mina.easeinout, () => {
            isUmlaut = !isUmlaut;
            setTimeout(animate, _ANIMATION_DURATION);
        });
    }

    animate();
}

function getColor() {
    return 'var(--color-text)';
}

function updatePathColor(path) {
    path.attr({
        fill: getColor()
    });
}

function observeColorTheme(paths) {
    const observer = new MutationObserver(() => {
        paths.forEach(updatePathColor);
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['color-theme']
    });
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}