import { animate } from './animatejs/animate.js';

//

let allBioHeroHeadings = document.querySelectorAll('#bio .block.heading');

allBioHeroHeadings.forEach((heading) => {
  animate.create(
    heading,
    {
      scrollTrigger: {
        active: true,
        timeline: 'scroll',
        timelineParams: ''
      },
      keyframes: {
        0: {
          transform: 'translateY(0px)',
          opacity: 1,
        },
        100: {
          opacity: 0,
          transform: 'translateY(-100px)'
        }
      }
    }
  )
});

let allBioHeroImages = document.querySelectorAll('#bio .image');

allBioHeroImages.forEach((image) => {
  animate.create(
    image,
    {
      scrollTrigger: {
        active: true,
        timeline: 'scroll',
        timelineParams: ''
      },
      keyframes: {
        0: {
          scale: 1,
          transform: 'translateY(0)',
          clipPath: 'inset(0 0 0 0)'
        },
        100: {
          scale: 0.8,
          transform: 'translateY(100px)',
          clipPath: 'inset(0 0 100% 0)'
        }
      }
    }
  )
});

// let allSidebarHeadings = document.querySelectorAll('.page-id-5424 .sidebar-container :is(h1, h2, h3, h4, h5, h6)');

// allSidebarHeadings.forEach((heading, index) => {
//   let content = heading.textContent;
//   heading.innerHTML = '&nbsp;';
//   setTimeout(() => {
//     animate.typewriter(
//       heading,
//       content,
//       150 + index * 50,
//       true,
//       false
//     )
//   }, 1000 + index * 100);
// });
