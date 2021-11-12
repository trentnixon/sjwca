import StructureStyles from "../styles/Structure/Structure.module.css";

import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import SupportersIcons from "../components/Structure/SupportersIcons"
// COmpoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm"
import ContentContainer from "../components/Structure/ContentContainer"
import { H2,P } from "../components/type"
const RegisterTeam = ()=>{

        return(
           <>
                 <PageHeaderSmall 
                  HeaderCopy={`REGISTER YOUR TEAM`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                
                        <ContentContainer>
                                <div className={StructureStyles.Width70}>
                                        <ManagerSignupForm />
                                                Map of selected Region, Grounds and Comp Name
                                        </div>
                                        <div className={`${StructureStyles.Width30}`} >
                                                Side Nav
                                                Things needed to register a Team.
                                                Where we play.
                                                Rules.
                                                Facebook?
                                                
                                        </div>
                        </ContentContainer>

                    <SupportersIcons />
                    
            </> 
        ) 
}

export default RegisterTeam 