import StructureStyles from "../styles/Structure/Structure.module.css";

import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import SupportersIcons from "../components/Structure/SupportersIcons"
// COmpoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm"
import { H2,P } from "../components/type"
const RegisterTeam = ()=>{

        return(
           <>
                 <PageHeaderSmall 
                  HeaderCopy={`REGISTER YOUR TEAM`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/>

                    <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
                    <H2>Register your team for the 2022 SJWCA Season</H2>
                    <P>The SJWCA Season begins in blah blah blah ......</P>
                        <div className={StructureStyles.Width70}>
                                <ManagerSignupForm />
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                                </div>

                    <SupportersIcons /> 
                    </div>
            </> 
        ) 
}

export default RegisterTeam 