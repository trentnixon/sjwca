import { useEffect } from "react";
import Section4Styles from "../../styles/LandingPage/Section4.module.css";


import { H1, H2} from "../type";

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const OpenAges = (props)=>{
    const {registrationPage} = props;

    useEffect(()=>{
  
        gsap.timeline({
          scrollTrigger:{
              trigger:"#Ages",
              toggleActions:"restart pause reverse pause",
              start: "top center",
              end:"bottom bottom",
              scrub:1,    
              //pin: true,         
              //markers:true
          }
          })
          .fromTo("#Ages h1", { xPercent:-100,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1+=0.8")
          .fromTo("#Ages h2", { xPercent:100,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1+=0.8")
          .fromTo("#Ages svg", { xPercent:-30,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1");
      },[])


    return(
        <div className={` ${Section4Styles.JoinOver}`} id="Ages">
            
            <div>
            <H2>{registrationPage.ReasonsToPlay[8].Reason}</H2>
            <H1>{registrationPage.ReasonsToPlay[9].Reason}</H1>
            <H2>{registrationPage.ReasonsToPlay[10].Reason}</H2>
            </div>
            
            <div>&nbsp;</div>

            <div className={Section4Styles.svgGroup}> 
                <Boy />
                <Girl />
            </div>
        </div>
    )
  }
  
  export default OpenAges;

  const Girl = ()=>{
    return(<svg  viewBox="0 0 811 1622" fill="#F4F4F4" >
    <path d="M405.5 354.812C503.834 354.812 582.906 275.74 582.906 177.406C582.906 79.0725 503.834 0 405.5 0C307.166 0 228.094 79.0725 228.094 177.406C228.094 275.74 307.166 354.812 405.5 354.812ZM608.25 1216.5V1622H202.75V1216.5H0L241.273 569.727C266.616 501.806 332.51 456.188 405.5 456.188C478.49 456.188 544.384 501.806 569.727 569.727L811 1216.5H608.25Z" fill="#F4F4F4"/>
    </svg>
    )
  }

  const Boy = ()=>{
      return(
            <svg viewBox="0 0 609 1623" fill="#F4F4F4">
            <path d="M304.5 355.031C402.955 355.031 482.125 275.91 482.125 177.516C482.125 79.1212 402.955 0 304.5 0C206.045 0 126.875 79.1212 126.875 177.516C126.875 275.91 206.045 355.031 304.5 355.031ZM507.5 1623V1115.81H609V659.344C609 547.763 517.65 456.469 406 456.469H203C91.35 456.469 0 547.763 0 659.344V1115.81H101.5V1623H507.5Z" fill="#F4F4F4"/>
            </svg>

      )
  }