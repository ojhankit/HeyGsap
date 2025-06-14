gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
 feather.replace();
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

const button = document.getElementById("hero-btn");
button.addEventListener("mousemove",(e)=>{
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const moveX = (x-rect.width/2) / 10;
  const moveY = (y-rect.height/2) /10;

  gsap.to(button,{
    x:moveX,
    y:moveY,
    duration:0.3,
    ease:"power3.out"
  })
})

button.addEventListener("mouseleave",() =>{
  gsap.to(button,{
    x:0,
    y:0,
    duration:4,
    ease:"elastic.out(1,0.5)",
  })
})

const container = document.querySelector('.cards-container')
const cards = document.querySelectorAll('.card');
const cardCount = document.querySelectorAll('.card').length

const cardWidth = container.querySelector('.card').offsetWidth;
//const gap = 16; // Tailwind's default gap-4 = 1rem = 16px
//const totalScroll = (cardWidth) * (cardCount - 1);
const totalScroll = container.scrollWidth - window.innerWidth;

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
  duration:1,
  scrollTrigger:{
    trigger:thirdSection,
    start:"top top",
    end:"bottom bottom",
    scrub:2,
  }
})

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
    start: "top 70%",
    end: "top 30%",
    scrub: 1,
  }
});

tl.from(".content h3", {
  y: -50,
  opacity: 0,
  duration: 1.3,
  ease: "power2.out"
})
.from(".content p", {
  y: -50,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out"
});

gsap.utils.toArray(".box").forEach((box, index) => {
    gsap.from(box, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {
      y: -15,
      ease: "power1.inOut",
      duration: 0.5,
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      y: 0,
      ease: "power1.out",
      duration: 0.5,
    });
  });
});
