// var slider_loop = true;
var slider_direction = "horizontal";
var slider_keyboard = true;
var slider_spaceBetween = 32;
var slider_paginationName = "slider-pagination";
var slider_nextButtonName = "slider-next-button";
var slider_prevButtonName = "slider-prev-button";

var swiper_one = new Swiper(".slider--image-one", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 1,
    loop: false,
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_two = new Swiper(".slider--image-two", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: slider_spaceBetween,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: slider_spaceBetween,
        },
    },
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_three = new Swiper(".slider--image-three", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 1,
    breakpoints: {
        // 0: {
        //     slidesPerView: 1,
        //     spaceBetween: slider_spaceBetween,
        // },
        769: {
            slidesPerView: 2,
            spaceBetween: slider_spaceBetween,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: slider_spaceBetween,
        },
    },
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_four = new Swiper(".slider--image-four", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 2,
    spaceBetween: slider_spaceBetween / 2,

    breakpoints: {
        // 0: {
        //     slidesPerView: 1,
        //     spaceBetween: slider_spaceBetween,
        // },
        768: {
            slidesPerView: 3,
            spaceBetween: slider_spaceBetween,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: slider_spaceBetween,
        },
    },
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_five = new Swiper(".slider--image-five", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    slidesPerView: 2,
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    spaceBetween: slider_spaceBetween / 2,
    breakpoints: {
        // 0: {
        //     slidesPerView: 1,
        //     spaceBetween: slider_spaceBetween,
        // },
        768: {
            slidesPerView: 3,
            spaceBetween: slider_spaceBetween,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: slider_spaceBetween,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: slider_spaceBetween,
        },
    },
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_six = new Swiper(".slider--image-six", {
    loop: true,
    direction: slider_direction,
    keyboard: {
        enabled: slider_keyboard,
    },
    autoplay: {
        delay: 0,
    },
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: slider_spaceBetween / 2,
    breakpoints: {
        769: {
            slidesPerView: 5,
            spaceBetween: slider_spaceBetween,
        },
        1240: {
            speed: 2500,
            slidesPerView: 6,
            spaceBetween: slider_spaceBetween,
        },
    },
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

var swiper_auto = new Swiper(".slider--image-auto", {
    direction: slider_direction,
    spaceBetween: slider_spaceBetween,
    keyboard: {
        enabled: slider_keyboard,
    },
    slidesPerView: 'auto',
    pagination: {
        el: slider_paginationName,
        clickable: true,
    },
    navigation: {
        nextEl: slider_nextButtonName,
        prevEl: slider_prevButtonName,
    },
});

