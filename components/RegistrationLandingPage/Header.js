import Registrationstyles from "../../styles/registrationPage/registrationPage.module.css";

import { H1, H2, H3, H4, P,P_ERROR, S} from "../type";




const RegistrationHeader = (props)=>{

    const {tagline,registrationPage, logoLarge} = props;
    





        return (
            <section className={Registrationstyles.RegistrationHeader}>

                    <div className={Registrationstyles.RegistrationMeta}>
                       
                         
                            <img src={logoLarge.image.url} className={Registrationstyles.Logo}  />
                            
                            <S style={{fontWeight:200, textTransform:'uppercase'}} >established 2005</S>
                            <H2>17th Season</H2>
                            <P>Sydney's Only Junior Winter Cricket Competition!</P>

                    </div>    
                    <div className={Registrationstyles.RegistrationDetails}>

                            <H3>REGISTRATIONS ARE NOW OPEN FOR 2022</H3>

                            <H3>Register a TEAM</H3>
                            <H3>Register as a Single Player</H3>
                    </div>


              
            </section>
        )
}
export default RegistrationHeader;