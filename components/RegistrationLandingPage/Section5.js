import { useEffect } from "react";
import Registrationstyles from "../../styles/registrationPage/registrationPage.module.css";
import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import Section5Styles from "../../styles/LandingPage/Section5.module.css";
import {RegisterATeamButton, RegisterIndividualButton}  from "./RegisterBtn"

import { H1, H2, H3, H4, P,P_ERROR, S} from "../type";

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RegisterNow = (props)=>{
  const {registrationPage} = props;
  return(
  
        <div className={` ${Section5Styles.RegisterNow}`}>
          <BatBall />
            <div className={Section5Styles.LogoBracket}>
                <img src="/images/logos/MyCricket.png" />
                <img src="/images/logos/PlayCricket.png" />
            </div>
          <H1>{registrationPage.ReasonsToPlay[11].Reason}</H1>
         
          <div className={`${Buttonsstyles.BtnGroupRow} ${Section5Styles.LogoBracket}`}>
                {/* <RegisterIndividualButton /> 
                <RegisterATeamButton /> */}
          </div>

         
          <H2>{registrationPage.ReasonsToPlay[12].Reason}</H2>
        </div>
  
  )
}

export default RegisterNow;

const BatBall = ()=>{
  return(
    <svg  viewBox="0 0 2089 2087" fill="#575656" >
      <path d="M1309.98 1113.92L570.993 375.645C562.941 367.583 553.376 361.186 542.846 356.822C532.317 352.457 521.029 350.211 509.629 350.211C498.229 350.211 486.94 352.457 476.411 356.822C465.881 361.186 456.316 367.583 448.264 375.645L201.936 621.737C167.99 655.651 167.99 710.435 201.936 744.348L940.92 1482.62C974.866 1516.54 1029.7 1516.54 1063.65 1482.62L1309.98 1236.53C1343.92 1202.62 1343.92 1147.84 1309.98 1113.92ZM1248.28 1544.03L1371.38 1421.06L1740.66 1789.99L1617.56 1912.96L1248.28 1544.03Z" fill="#575656"/>
      <path d="M1610.27 782.624C1778.52 782.624 1914.92 646.36 1914.92 478.27C1914.92 310.18 1778.52 173.916 1610.27 173.916C1442.02 173.916 1305.62 310.18 1305.62 478.27C1305.62 646.36 1442.02 782.624 1610.27 782.624Z" fill="#575656"/>
    </svg>

  )
}