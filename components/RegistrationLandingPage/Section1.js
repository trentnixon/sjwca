import { useEffect } from "react";

import WantToPlaystyles from "../../styles/LandingPage/WantToPlay.module.css";
import Spliter from "./SplitterBottom";
import { H2, SPAN } from "../type";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const GSAP = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#WantToPlay",
          toggleActions: "restart pause reverse pause",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo(
        ".IMG img",
        { xPercent: 100, opacity: 0 },
        { xPercent: -0.5, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1"
      )
      .fromTo(
        "#Copy h2",
        { yPercent: -30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1"
      )
      .fromTo(
        "#Copy h1",
        { yPercent: -30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" }
      )
      .fromTo(
        "#WantToPlay svg",
        { scale: 0 },
        { scale: 1, duration: 2.5, ease: "power2.out" },
        "section1"
      );
  };

  useEffect(() => {
    GSAP();
  }, []);

  return (
    <section className={` ${WantToPlaystyles.WantToPlay}`} id="WantToPlay">
      <Questionmark />
      <div className={` ${WantToPlaystyles.Copy}`} id="Copy">
        <H2>
          does your son or daughter want to
          <SPAN style={{ color: "#1b81cb", fontWeight: "bold" }}>
            play cricket during the winter months?
          </SPAN>
        </H2>
      </div>
      <div className={`IMG ${WantToPlaystyles.IMG}`}>
        <img
          src="/images/Registration/Section1Img.png"
          className={`${WantToPlaystyles.ImgCircle}`}
        />
      </div>
      <Spliter color="#4D4D4D" />
    </section>
  );
}; 

export default Section1;

const Questionmark = () => {
  return (
    <svg viewBox="0 0 1574 2739" fill="#F4F4F4">
      <path
        d="M652.805 1419.96C763.768 1219.58 977.046 1101.37 1100.98 924.052C1232.12 738.088 1158.62 390.668 786.825 390.668C543.284 390.668 423.675 575.19 373.238 727.997L0 570.865C102.316 263.809 380.443 0 785.384 0C1124.04 0 1356.05 154.249 1474.22 347.421C1575.09 513.202 1634.17 823.142 1478.54 1053.79C1305.61 1308.95 1139.89 1386.8 1050.54 1551.14C1014.51 1617.45 1000.1 1660.7 1000.1 1874.05H583.634C582.193 1761.61 564.9 1578.53 652.805 1419.96ZM1075.04 2450.68C1075.04 2609.26 945.343 2739 786.825 2739C628.307 2739 498.611 2609.26 498.611 2450.68C498.611 2292.11 628.307 2162.37 786.825 2162.37C945.343 2162.37 1075.04 2292.11 1075.04 2450.68Z"
        fill="#F4F4F4"
      />
    </svg>
  );
};
