import { API } from "../config/index"

import StructureStyles from "../styles/Structure/Structure.module.css";

import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Compoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm"
import ContentContainer from "../components/Structure/ContentContainer";
import RegistrationSideNav from "../components/RegisterATeam/RegistrationSideNav";
import { useState } from "react";
const RegisterTeam = ({switchboard})=>{
        console.log(switchboard.season.id)
        const [CurrentSeasonID, setCurrentSeasonID] = useState(switchboard.season.id)
        return(
           <>
                <PageHeaderSmall 
                        HeaderCopy={`REGISTER YOUR TEAM`}  
                        SubCopy={`SJWCA 2022`} 
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />
                <ContentContainer>
                        <div className={StructureStyles.Width70}>
                                <ManagerSignupForm CurrentSeasonID={CurrentSeasonID }/>
                        </div>

                        <div className={`${StructureStyles.Width30}`} >
                                <RegistrationSideNav />
                        </div>
                </ContentContainer> 
                <SupportersIcons />
            </> 
        ) 
}

export default RegisterTeam

export const getStaticProps = async (context) => {
        const switchboardRes = await fetch(`${API}switchboard`)
        const switchboard = await switchboardRes.json()
      return {  props: {switchboard} }
    }