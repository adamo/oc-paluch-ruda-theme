import { gsap, Expo, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Expo, Power2);

export function initAnmiations() {
  gsap.fromTo(".hero .large", { opacity: 0 }, { opacity: 1 });
  gsap.fromTo(
    ".black-circle.box",
    { x: "200%" },
    {
      x: 0,
      scrollTrigger: {
        trigger: this,
      },
    }
  );
  gsap.fromTo(".black-circle.box > *", { opacity: 0 }, { opacity: 1 });

  ScrollTrigger.create({
    animation: gsap.fromTo(
      ".large-numbers > li",
      { opacity: 0 },
      { duration: 1.5, opacity: 1, stagger: 0.5 }
    ),
    trigger: ".large-numbers",
    start: "top 30vh",
    end: "bottom 200px",
    scrub: 1,
    pin: true,
  });
}
