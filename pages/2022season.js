import {useState} from 'react'
import { API } from "../config/index"
import {track_ga_event} from "../actions/GA"
import Link from 'next/link'
import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";

// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
// Type
import { H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"
import {RegisterATeamButton, RegisterIndividualButton} from "../components/RegistrationLandingPage/RegisterBtn";
import Button from '@mui/material/Button';
const NewSeason = ({newseason})=>{
  const [Conference, setConference] = useState(true)

  const GA = (i) => {
    track_ga_event({
      action: "Btn_View_Conference",
      params : {  Conference_Selected: Conference ? 'Sixers':'Thunder'}
    })
  }


  return(
    <div className={StructureStyles.Outer}> 
        <PageHeaderSmall 
          HeaderCopy={`2024 Season`}  
          SubCopy={`Sydney Junior Winter Cricket Association`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70}`} >
                  <H1>{newseason.Name}</H1>
                    <MarkdownContainer>{newseason.Description}</MarkdownContainer>
                 
                  <div className={Buttonsstyles.BtnGroupRow}>
                  <Button variant="contained" onClick={()=>{setConference(!Conference); GA(!Conference)}} 
                        className={Conference ? Buttonsstyles['Sixers']:Buttonsstyles['Thunder']}>
                    { Conference ?'View Sixers CONFERENCE':'View Thunder CONFERENCE'}
                  </Button>
                  </div>
                    {
                      Conference  ? <DisplayConference COPY={newseason.Thunder} CLASS='Thunder'/> : 
                                    <DisplayConference COPY={newseason.Sixers} CLASS='Sixers'/>
                    }
                  

                 
                  </div>

                <div className={`${StructureStyles.Width30}`} >
                
                  <SupportingSideNav />
                  <div className={Buttonsstyles.BtnGroupRow}>
                        <RegisterIndividualButton /> 
                        <RegisterATeamButton />
                </div>
                </div>
              </ContentContainer> 
              <SupportersIcons />
      </div>        
  ) 
}

export default NewSeason



export const getStaticProps = async (context) => {

  ///newseason
  const newseasonRes = await fetch(`${API}newseason`)
  const newseason = await newseasonRes.json()

  return {
    props: {newseason},
  }
}



const DisplayConference = ({COPY, CLASS})=>{
  return(
    <MarkdownContainer class={CLASS}>{COPY}</MarkdownContainer>
  )
} 