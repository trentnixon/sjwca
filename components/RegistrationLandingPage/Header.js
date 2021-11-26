import Registrationstyles from "../../styles/LandingPage/registrationHeader.module.css";
import {  H2, H3, S} from "../type";


import RegisterButton from "./RegisterBtn"

const RegistrationHeader = (props)=>{

    const {tagline,registrationPage, logoLarge} = props;
    
        return (
            <section className={Registrationstyles.RegistrationHeader}>

                <div className={Registrationstyles.Frosted}>
                       
                        <div>
                                <H2 style={{ textTransform: 'uppercase',letterSpacing:'2px'}}>Sydney</H2>
                                <img src={logoLarge.image.url} className={Registrationstyles.Logo}  />
                                <S style={{fontWeight:200, textTransform:'uppercase'}} >established 2005</S>
                                <H2 style={{fontWeight:800,textTransform: 'uppercase'}}>17th Season</H2>
                        </div>

                        <div>
                                <H3>REGISTRATIONS ARE NOW OPEN FOR 2022</H3>
                                <RegisterButton />
                        </div>
                        
                        <div>
                                <H2>Sydney's Only Junior Winter Cricket Competition!</H2>
                        </div>
                </div>
            </section>
        )
}
export default RegistrationHeader;