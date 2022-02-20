import { API } from "../config/index"

import StructureStyles from "../styles/Structure/Structure.module.css";
import RegistrationRequirements from "../styles/registrationPage/RegistrationRequirements.module.css";
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Compoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm"
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { useState } from "react";
import { H1, H2, P} from '../components/type'
import Link from "next/link";

const RegisterTeam = ({switchboard,registerteam, RegistrationInsructions})=>{
        //const RegisterTeamsOpen = switchboard.isRegisterTeamsOpen;
        const RegisterTeamsOpen = true;
        const [CurrentSeasonID, setCurrentSeasonID] = useState(switchboard.season.id)
        //console.log(RegisterTeamsOpen)
        return(
           <div>
                <PageHeaderSmall 
                        HeaderCopy={`REGISTER YOUR TEAM`}  
                        SubCopy={`SJWCA 2022`} 
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />
                <ContentContainer>
                        <div className={StructureStyles.Width70}>
                                {
                                        RegisterTeamsOpen ?
                                                <ManagerSignupForm CurrentSeasonID={CurrentSeasonID } registerteamCopy={registerteam}/> :
                                                <RegisterTeamsClosed RegistrationInsructions={RegistrationInsructions}/>
                                }
                                
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

const RegisterTeamsClosed = ({RegistrationInsructions})=>{
        //console.log(RegistrationInsructions)
        return(
        
                <div className={` ${StructureStyles.Column}`}>
            <H1>Team Registrations</H1>
            <H2>OPENING 21st FEBRUARY</H2>
            <P>Team Registrations will be open to all team managers and coaches on the 21st of February.
Until then, please ensure all players in your team have registered with BOTH Play-Cricket <Link target='_blank' href={`https://play.cricket.com.au/club/sydney-junior-winter-cricket-association/6fb6ee9f-87d8-eb11-a7ad-2818780da0cc`}><a>HERE</a></Link> and SJWCA via our <Link href={`/registerIndividual`}><a>Individual Registration</a></Link> form. 
 all information about <Link href={`/howToRegister`}><a>registration</a></Link> this season,can be found <Link href={`/howToRegister`}><a>here</a></Link>.</P>
<H2>Registration Preperation</H2>
                        <div className={RegistrationRequirements.MainList}>
                                <MarkdownContainer>{RegistrationInsructions.Insructions}</MarkdownContainer> 
                        </div>
        </div>
        )
}


export const getStaticProps = async (context) => {
        const registerteamRes = await fetch(`${API}register-team-landing`)
        const switchboardRes = await fetch(`${API}switchboard`)
        const resRego = await fetch(`${API}registration-insructions`);
        const RegistrationInsructions = await resRego.json()
        const registerteam = await registerteamRes.json()
        const switchboard = await switchboardRes.json()
      return {  props: {switchboard,registerteam,RegistrationInsructions} }
    }


