gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    duration: 0.15,
    x: e.clientX - cursor.offsetWidth / 2,
    y: e.clientY - cursor.offsetHeight / 2,
    ease: "power2.out"
  });
});

gsap.to("#cursor", {
  duration: 1.5,
  rotation: 5,
  scaleX: 1.1,
  scaleY: 0.9,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});


gsap.fromTo(".hero-item",
  {
    opacity: 0,
    y: -50
  },
  {
    scrollTrigger: "#hero-heading",
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "back.out(1.7)",
    stagger:0.5,
    scrollTrigger:{
        trigger:"#hero",
        start:"top 80%",
        // toggleActions:"play reverse play reverse",
    }
  }
);

document.getElementById("hero-btn").addEventListener("click", () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: "#features", // ID of the next section
      offsetY: 0
    },
    ease: "power2.inOut"
  });
});

// test
// const container = document.querySelector(".cards-container");
// const scrollAmount = container.scrollWidth - window.innerWidth;

// gsap.to(container,{
//   x: -scrollAmount,
//   ease:"none",
//   scrollTrigger:{
//     trigger:"container",
//     start:"bottom center",
//     end:() => "+=" + scrollAmount,
//     scrub:2,
//     pin:true,
//     markers:true,
//   }
// })

const container = document.querySelector('.cards-container')
const cardCount = document.querySelectorAll('.card').length

const cardWidth = container.querySelector('.card').offsetWidth;
const gap = 16; // Tailwind's default gap-4 = 1rem = 16px
const totalScroll = (cardWidth) * (cardCount - 1);

  gsap.to(container, {
    x: () => `-${totalScroll}px`,
    ease: "none",
    scrollTrigger: {
      trigger: "#features",
      start: "top top",
      end: () => `+=${totalScroll}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    }
  });

// moving box
const thirdSection = document.querySelector('.testimonials')

const box = document.querySelector('.moving-box')

gsap.to(box,{
  x:200,
  y:200,
  rotation:360,
  backgroundColor:"#EC7FA9",
  ease:"power1.in",
  duration:2,
  scrollTrigger:{
    trigger:thirdSection,
    start:"top top",
    end:"bottom bottom",
    scrub:2,
  }
})
