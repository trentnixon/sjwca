import Registrationstyles from "../../styles/registrationPage/registrationPage.module.css";
import RegistrationHeader from "./Header"

import Components from "../Components"

import { H1, H2, H3, H4, P,P_ERROR, S} from "../type";
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
  return(
    <section  className={Registrationstyles.RegistrationSection}>
     <div className={Registrationstyles.HalfSplit}>
            <div>
              <H1>{registrationPage.ReasonsToPlay[0].Reason}</H1>
            </div>
            <div>
              IMG
            </div>
        
        
        </div>
    </section>
  )
}



const JoinOver = (props)=>{

  const {registrationPage} = props;
  return(
    <section  className={Registrationstyles.RegistrationSection}>
        <div className={`${Registrationstyles.column} ${Registrationstyles.JoinOver}`}>
          <H1>{registrationPage.ReasonsToPlay[1].Reason}</H1>
          <H1>{registrationPage.ReasonsToPlay[2].Reason}</H1>
          <H1>{registrationPage.ReasonsToPlay[3].Reason}</H1>
          <H1>{registrationPage.ReasonsToPlay[4].Reason}</H1>
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
