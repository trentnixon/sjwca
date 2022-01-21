import { useEffect } from "react";
import Section3Styles from "../../styles/LandingPage/Section3.module.css";

import { H1 } from "../type";
import Spliter from "./SplitterBottom";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

const Section3 = (props)=>{
        return(
            <section className={Section3Styles.Section3}>
              <SmallGallery />
                <DevelopFriendships  {...props} />
                
                <EnjoyableWay {...props}  />
                <Spliter color="#FBFDFF"/>
            </section>
        )
}

export default Section3;


const DevelopFriendships = (props)=>{
    const {registrationPage} = props;

    useEffect(()=>{
  
      gsap.timeline({
        scrollTrigger:{
            trigger:"#Develop",
            toggleActions:"restart pause reverse pause",
            start: "top center",
            end:"bottom bottom",
            scrub:1,    
            //pin: true,         
            //markers:true
        }
        })
        .fromTo("#Develop h1", { xPercent:-100,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1+=0.8")
        .fromTo("#Develop svg", { xPercent:-30,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1");
    },[])

    return(
      
        <div className={`${Section3Styles.Top} ${Section3Styles.Layout}`} id="Develop">
                <H1>{registrationPage.ReasonsToPlay[6].Reason}</H1>
                <Runnersvg />
              </div>
             
   
    )
  }

const SmallGallery = ()=>{

    return(
        <div className={Section3Styles.Gallery}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


  const EnjoyableWay = (props)=>{
    const {registrationPage} = props;

    useEffect(()=>{
  
      gsap.timeline({
        scrollTrigger:{
            trigger:"#Regions",
            toggleActions:"restart pause reverse pause",
            start: "top center",
            end:"bottom bottom",
            scrub:1,    
            //pin: true,         
            //markers:true
        }
        })
        .fromTo("#Regions h1", { xPercent:100,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1+=0.8")
        .fromTo("#Regions svg", { xPercent:30,opacity:0},{xPercent:0,opacity:1,duration: 2.5,ease: "power2.out"},"section1");
    },[])


    return(
        <div className={`${Section3Styles.Bottom} ${Section3Styles.Layout}`} id="Regions">
        <H1>{registrationPage.ReasonsToPlay[7].Reason}</H1>
        <Mapsvg />
      </div>
    )
  }


  const Runnersvg = ()=>{
      return(
<svg viewBox="0 0 1242 1659" fill="#C9E0FF" >
<path d="M817.714 308.651C902.571 308.651 972 239.205 972 154.326C972 69.4465 902.571 0 817.714 0C732.857 0 663.428 69.4465 663.428 154.326C663.428 239.205 732.857 308.651 817.714 308.651ZM540 1381.21L617.143 1041.7L779.143 1196.02V1659H933.428V1080.28L771.429 925.953L817.714 694.465C918 810.209 1072.29 887.372 1242 887.372V733.046C1095.43 733.046 972 655.884 910.286 547.856L833.143 424.395C802.286 378.098 756 347.233 702 347.233C678.857 347.233 663.428 354.949 640.286 354.949L239.143 524.707V887.372H393.429V625.019L532.286 571.005L408.857 1196.02L30.8571 1118.86L0 1273.19L540 1381.21Z" fill="#C9E0FF"/>
</svg>
      )
  }

  const Mapsvg = ()=>{
      return(
        <svg  viewBox="0 0 1287 1287" fill="#C9E0FF" >
        <path d="M1099.31 160.875L1090.73 162.484L804.375 273.487L482.625 160.875L180.18 262.763C168.919 266.516 160.875 276.169 160.875 288.503V1099.31C160.875 1114.33 172.672 1126.12 187.688 1126.12L196.268 1124.52L482.625 1013.51L804.375 1126.12L1106.82 1024.24C1118.08 1020.48 1126.12 1010.83 1126.12 998.498V187.688C1126.12 172.672 1114.33 160.875 1099.31 160.875ZM804.375 1018.88L482.625 905.726V268.125L804.375 381.274V1018.88Z" fill="#C9E0FF"/>
        </svg>
      )
  }