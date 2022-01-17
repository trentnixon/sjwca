import { API } from "../config/index"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";
import SideNav from "../styles/registrationPage/SideNav.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
// Type
import { H2,H4 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"
import {RegisterATeamButton, RegisterIndividualButton} from "../components/RegistrationLandingPage/RegisterBtn"
const NewSeason = ({newseason})=>{
  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={`2022 Season`}  
          SubCopy={`Sydney Junior Winter Cricket Association`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>{newseason.Name}</H2>
                  { <ReactMarkdown>{newseason.Description}</ReactMarkdown> }
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

