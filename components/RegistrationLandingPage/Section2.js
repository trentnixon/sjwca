import { useEffect } from "react";
import JoinOver from "../../styles/LandingPage/JoinOver.module.css";

import { H1 } from "../type";
import Spliter from "./SplitterBottom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#JoinOver",
          toggleActions: "restart pause reverse pause",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          //pin: true,
          //markers:true
        },
      })

      .fromTo(
        ".H1_1",
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1"
      )
      .fromTo(
        ".H1_2",
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1+=0.5"
      )
      .fromTo(
        ".H1_3",
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1+=1"
      )
      .fromTo(
        ".H1_4",
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1+=2"
      )
      .fromTo(
        "#JoinOver svg",
        { xPercent: -30, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2.5, ease: "power2.out" },
        "section1+=0.8"
      );
  }, []);

  return (
    <section className={`${JoinOver.JoinOver}`} id="JoinOver">
      <div className={`${JoinOver.CopyContainer}`}>
        <div className={`${JoinOver.H1} H1_1`}>
          <H1>Join over</H1>
        </div>
        <div className={`${JoinOver.H1} H1_2`}>
          <H1>200 Teams Registered</H1>
        </div>
        <div className={`${JoinOver.H1} H1_3`}>
          <H1>3000 registered Players </H1>
        </div>
        <div className={`${JoinOver.H1} H1_4`}>
          <H1>
            in Sydney's Longest running Junior Winter Cricket Competition!
          </H1>
        </div>
      </div>
      <TeamSVG />
      <Spliter color="#2E2D2D" />
    </section>
  );
};
//<div className={JoinOver.BGScroll} >&nbsp;</div>
export default Section2;

const TeamSVG = () => {
  return (
    <svg viewBox="0 0 2206 1103" fill="#403F3F">
      <path
        d="M1103 620.437C1252.82 620.437 1385.18 656.285 1492.73 703.162C1592 747.282 1654.5 846.552 1654.5 954.095V1103H551.5V955.014C551.5 846.552 614.003 747.282 713.273 704.082C820.816 656.285 953.176 620.437 1103 620.437ZM367.667 643.417C468.775 643.417 551.5 560.692 551.5 459.583C551.5 358.475 468.775 275.75 367.667 275.75C266.558 275.75 183.833 358.475 183.833 459.583C183.833 560.692 266.558 643.417 367.667 643.417ZM471.532 744.525C437.523 739.01 403.514 735.333 367.667 735.333C276.669 735.333 190.267 754.636 112.138 788.645C44.12 818.058 0 884.238 0 958.691V1103H413.625V955.014C413.625 878.723 434.766 807.028 471.532 744.525V744.525ZM1838.33 643.417C1939.44 643.417 2022.17 560.692 2022.17 459.583C2022.17 358.475 1939.44 275.75 1838.33 275.75C1737.22 275.75 1654.5 358.475 1654.5 459.583C1654.5 560.692 1737.22 643.417 1838.33 643.417ZM2206 958.691C2206 884.238 2161.88 818.058 2093.86 788.645C2015.73 754.636 1929.33 735.333 1838.33 735.333C1802.49 735.333 1768.48 739.01 1734.47 744.525C1771.23 807.028 1792.37 878.723 1792.37 955.014V1103H2206V958.691ZM1103 0C1255.58 0 1378.75 123.168 1378.75 275.75C1378.75 428.332 1255.58 551.5 1103 551.5C950.418 551.5 827.25 428.332 827.25 275.75C827.25 123.168 950.418 0 1103 0Z"
        fill="#403F3F"
      />
    </svg>
  );
};
