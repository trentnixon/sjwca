import Registrationstyles from "../../styles/LandingPage/registrationHeader.module.css";
import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import {  H2, H3, S} from "../type";
import Spliter from "./SplitterBottom";

import {RegisterATeamButton, RegisterIndividualButton} from "./RegisterBtn"

const RegistrationHeader = (props)=>{

    const {tagline,registrationPage, logoLarge} = props;
    
        return (
            <section className={Registrationstyles.RegistrationHeader}>

                <div className={Registrationstyles.Frosted}>
                       
                        <div>
                                
                               
                                <H2 style={{ textTransform: 'uppercase',letterSpacing:'2px'}}>Sydney</H2>
                                
                                <img src={logoLarge.image.url} className={Registrationstyles.Logo}  />
                                <H2 style={{fontWeight:800,textTransform: 'uppercase'}}>19th Season</H2>
                                <S style={{fontWeight:200, textTransform:'uppercase'}} >established 2005</S>
                        </div>

                        <div>
                                
                                <H2>Sydney's Longest Running Junior Winter Cricket Competition!</H2>
                                <H3>REGISTRATIONS OPENING SOON FOR 2023</H3>
                               
                        </div>
                        
                        <div>
                                
                                <div className={Buttonsstyles.BtnGroupRow}>
                                {/* <RegisterIndividualButton /> 
                                <RegisterATeamButton /> */}
                        </div>
                        </div>
                </div>
                <Spliter color="#FBFDFF"/> 
            </section>
        )
}
export default RegistrationHeader;