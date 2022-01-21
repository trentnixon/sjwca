import { useEffect } from "react";
import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H1, H2 } from "../../components/type";

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 


const  getRandomIntInclusive = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

const PageHeaderSmall = (props)=>{
    const {HeaderCopy,SubCopy, BGIMG} = props;
 console.log(getRandomIntInclusive(1,10));

 
 useEffect(()=>{
  
    gsap.timeline({
      scrollTrigger:{
          trigger:"#HeaderContainer",
          toggleActions:"restart pause reverse pause",
          start: "5% 0%",
          end:"bottom 20%",
          scrub:1,    
          pin: false,         
          markers:false
      }
      })
      .to("#HeaderIMG", {yPercent:15, xPercent:1, ease:'none'})
      
  },[])

    return(
        <div id='HeaderContainer' className={StructureStyles.PageHeaderSmall} >
            <div className={StructureStyles.HeaderCopy}>
                <H1>{HeaderCopy}</H1>
                <H2>{SubCopy}</H2>
            </div>
            <div id='HeaderIMG' className={StructureStyles.FixedHeaderIMG} style={{backgroundImage: "url(/images/BGIMG/BG_" + getRandomIntInclusive(1,10) + ".jpg)"}}></div>
        </div>
    )
}
export default PageHeaderSmall;   