import { useEffect } from "react";
import Registrationstyles from "../../styles/registrationPage/registrationPage.module.css";
import WantToPlaystyles from "../../styles/LandingPage/WantToPlay.module.css";
import Image from 'next/image'
import RegistrationHeader from "./Header"
import Components from "../Components"
import { H1, H2, H3, H4, P,P_ERROR, S} from "../type";

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const RegistrationLandingPage = (props)=>{
    //const {tagline,registrationPage, logoLarge} = props;
 
    return(
        <>
          <RegistrationHeader {...props}/>
          <WantToPlay {...props}/>
          <JoinOver {...props} />
          <DevelopFriendships {...props}  />
          <EnjoyableWay {...props}  />
          <OpenAges {...props}/>
          <RegisterNow {...props}/>
          <Components />
        </>
    )
}
export default RegistrationLandingPage;




const WantToPlay = (props)=>{
  const {registrationPage} = props;

  
  const GSAP = ()=>{
    gsap.timeline({
      scrollTrigger:{
          trigger:"#WantToPlay",
          toggleActions:"restart pause reverse pause",
          start: " top center",
          end:"+=100%",
          scrub:1,    
          pin: true,         
          markers:true
      }
      }).fromTo(".Copy h1", { yPercent:-30,opacity:0},{yPercent:10,opacity:1},"section1")
      .fromTo(".IMG img.IMG1", { xPercent:-100,opacity:0},{xPercent:10,opacity:1},"section1")
      .fromTo(".IMG img.IMG2", { xPercent:100,opacity:0},{xPercent:0,opacity:1},"section1")
      .fromTo(".IMG img.IMG3", { yPercent:50,opacity:0},{yPercent:-25,opacity:1},"section1-=0.2");
  }


  useEffect(()=>{ GSAP()},[registrationPage])
 

  return(
    <section  className={`${Registrationstyles.RegistrationSection} ${WantToPlaystyles.WantToPlay}`} id="WantToPlay">
     <div className={Registrationstyles.HalfSplit} >
            <div className="Copy">
              <H1>{registrationPage.ReasonsToPlay[0].Reason}</H1>
            </div>
            <div  className={`IMG ${WantToPlaystyles.IMG}`}>
              <img src="/images/intro/circle1.jpg" className={`${WantToPlaystyles.ImgCircle} IMG1`}/>
              <img src="/images/intro/circle1.jpg" className={`${WantToPlaystyles.ImgCircle} IMG2`}/>
              <img src="/images/intro/circle1.jpg" className={`${WantToPlaystyles.ImgCircle} IMG3`}/>
                
            </div>
        </div>
    </section>
  )
}



const JoinOver = (props)=>{

  const {registrationPage} = props;

  useEffect(()=>{

    gsap.timeline({
      scrollTrigger:{
          trigger:"#JoinOver",
          toggleActions:"restart pause reverse pause",
          start: " top center",
          end:"+=100%",
          scrub:1,    
          pin: true,         
          markers:true
      }
      }).fromTo(".H1_1", { yPercent:30,opacity:0},{yPercent:0,opacity:1},"section1")
      .fromTo(".H1_2", { yPercent:30,opacity:0},{yPercent:0,opacity:1},"section1+=0.4")
      .fromTo(".H1_3", { yPercent:30,opacity:0},{yPercent:0,opacity:1},"section1+=0.6")
      .fromTo(".H1_4", { yPercent:30,opacity:0},{yPercent:0,opacity:1},"section1+=0.8");
  },[])

  return(
    <section  className={Registrationstyles.RegistrationSection} id="JoinOver">
        <div className={`${Registrationstyles.column} ${Registrationstyles.JoinOver}`}>
            <div className="H1_1"><H1>{registrationPage.ReasonsToPlay[1].Reason}</H1></div>
            <div className="H1_2"><H1>{registrationPage.ReasonsToPlay[2].Reason}</H1></div>
            <div className="H1_3"><H1>{registrationPage.ReasonsToPlay[3].Reason}</H1></div>
            <div className="H1_4"><H1>{registrationPage.ReasonsToPlay[4].Reason}</H1></div>
        </div>
    </section>
  )
}


const DevelopFriendships = (props)=>{
  const {registrationPage} = props;
  return(
    <section  className={Registrationstyles.RegistrationSection}>
        <div className={Registrationstyles.HalfSplit}>
            <div>
              <H1>{registrationPage.ReasonsToPlay[5].Reason}</H1>
            </div>
            <div>
              IMG
            </div>
        </div>
      
    </section>
  )
}


const EnjoyableWay = (props)=>{
  const {registrationPage} = props;
  return(
    <section  className={Registrationstyles.RegistrationSection}>
    

      <div className={Registrationstyles.HalfSplit}>
            
            <div>
              IMG
            </div>
            <div>
              <H1>{registrationPage.ReasonsToPlay[6].Reason}</H1>
            </div>
        </div>
    </section>
  )
}


const OpenAges = (props)=>{
  const {registrationPage} = props;
  return(
    <section  className={Registrationstyles.RegistrationSection}>
      
      <div className={`${Registrationstyles.column} ${Registrationstyles.JoinOver}`}>
      <H1>{registrationPage.ReasonsToPlay[7].Reason}</H1>
        </div>
    </section>
  )
}


const RegisterNow = (props)=>{
  const {registrationPage} = props;
  return(
    <section  className={Registrationstyles.RegistrationSection}>
        <div className={`${Registrationstyles.column} ${Registrationstyles.JoinOver}`}>
          <H1>{registrationPage.ReasonsToPlay[8].Reason}</H1>
        </div>
    </section>
  )
}