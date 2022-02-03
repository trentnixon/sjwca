import { API } from "../config/index"

import StructureStyles from "../styles/Structure/Structure.module.css";

import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Compoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm"
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { useState } from "react";
const RegisterTeam = ({switchboard,registerteam})=>{
        //console.log(registerteam)
        const [CurrentSeasonID, setCurrentSeasonID] = useState(switchboard.season.id)
        return(
           <div>
                <PageHeaderSmall 
                        HeaderCopy={`REGISTER YOUR TEAM`}  
                        SubCopy={`SJWCA 2022`} 
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />
                <ContentContainer>
                        <div className={StructureStyles.Width70}>
                                <ManagerSignupForm CurrentSeasonID={CurrentSeasonID } registerteamCopy={registerteam}/>
                        </div>

                        <div className={`${StructureStyles.Width30}`} >
                                <SupportingSideNav />
                        </div> 
                </ContentContainer> 
                <SupportersIcons />
            </div> 
        ) 
}

export default RegisterTeam

export const getStaticProps = async (context) => {
        const registerteamRes = await fetch(`${API}register-team-landing`)
        const switchboardRes = await fetch(`${API}switchboard`)
        const registerteam = await registerteamRes.json()
        const switchboard = await switchboardRes.json()
      return {  props: {switchboard,registerteam} }
    }