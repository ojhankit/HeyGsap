gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
feather.replace();

const cursor = document.getElementById('cursor');

// Mouse-following cursor
window.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    duration: 0.15,
    x: e.clientX - cursor.offsetWidth / 2,
    y: e.clientY - cursor.offsetHeight / 2,
    ease: "power2.out"
  });
});

// Loading animation
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
      startAnimations();
    }
  });
});

// GSAP animations (run after loader)
function startAnimations() {
  gsap.to("#main-content", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
  });
  // Floating hero heading
  gsap.to("#hero-heading", {
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 2
  });

  // Pulsing cursor
  gsap.to("#cursor", {
    duration: 1.5,
    rotation: 5,
    scaleX: 1.1,
    scaleY: 0.9,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  // Hero text fade-in
  gsap.fromTo(".hero-item",
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.8,
      scrollTrigger: {
        trigger: "#hero",
        start: "top 80%"
      }
    });

  // Scroll to features on button click
  const button = document.getElementById("hero-btn");
  button.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#features", offsetY: 0 },
      ease: "power2.inOut"
    });
  });

  // Button hover effect
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) / 10;
    const moveY = (y - rect.height / 2) / 10;

    gsap.to(button, { x: moveX, y: moveY, duration: 0.3, ease: "power3.out" });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, { x: 0, y: 0, duration: 4, ease: "elastic.out(1,0.5)" });
  });

  // Horizontal scroll for features cards
  const container = document.querySelector('.cards-container');
  const totalScroll = container.scrollWidth - window.innerWidth;

  gsap.to(container, {
    x: () => -totalScroll,
    ease: "none",
    scrollTrigger: {
      trigger: "#features",
      start: "top top",
      end: () => `+=${totalScroll}`,
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });
  // Animate step cards on scroll
  gsap.utils.toArray(".step-card").forEach((card, i) => {
  gsap.to(card, {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});


  // Animated box in testimonials
  gsap.to(".moving-box", {
    x: 200,
    y: 200,
    rotation: 360,
    backgroundColor: "#EC7FA9",
    ease: "power1.in",
    duration: 1,
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    }
  });

  // Animate testimonial section
  gsap.timeline({
    scrollTrigger: {
      trigger: ".content",
      start: "top 70%",
      end: "top 30%",
      scrub: 1
    }
  })
  .from(".content h3", {
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

  // Animate .box elements (grid-gallery section)
  gsap.utils.toArray(".box").forEach((box, index) => {
    box.style.backgroundColor = index % 2 === 0 ? "#e2ebec" : "#f0e6f6";

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

    // Hover interaction
    box.addEventListener("mouseenter", () => {
      gsap.to(box, { y: -15, ease: "power1.inOut", duration: 0.5 });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, { y: 0, ease: "power1.out", duration: 0.5 });
    });
  });
  gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: i * 0.05
    });
     // Hover interaction
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -15, ease: "power1.inOut", duration: 0.5 });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, ease: "power1.out", duration: 0.5 });
    });
  });
  const text = document.getElementById("parallax-text");

  gsap.to(text, {
    x: () => -text.offsetWidth / 2,
    ease: "none",
    scrollTrigger: {
      trigger: "#horizontal-parallax",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
  });
}
