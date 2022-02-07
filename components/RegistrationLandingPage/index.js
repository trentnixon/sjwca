import RegistrationHeader from "./Header"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"

const RegistrationLandingPage = (props)=>{
  
    return(
        <>
          <RegistrationHeader {...props}/>
          <Section1 {...props}/>
          <Section2 {...props} />
          <Section3 {...props}  />
          <Section4 {...props}/>
          <Section5 {...props}/>
        </>
    ) 
}
export default RegistrationLandingPage;