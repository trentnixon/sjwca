
import { useEffect, useState } from "react"
import StructureStyles from "../../styles/Structure/Structure.module.css";

import FormElementsStyles from "../../styles/Structure/FormElements.module.css";
// Form Elements
import FormElementGroup from "../FormElements/FormElementGroup"
import SelectTeamName from "../FormElements/TeamName"
import SelectAgeGroup from "../FormElements/Select_AgeGroup"
import SelectDivision from "../FormElements/Select_Division"
import SelectRegion from "../FormElements/Select_Region"
// Team Managment
import Name_Team_Manager from "../FormElements/TeamManagerName"
import Email_Team_Manager from "../FormElements/TeamManagerEmail"
import Number_Team_Manager from "../FormElements/TeamManagerContactNumber"

import Name_Team_Coach from "../FormElements/TeamCoachName"
import Email_Team_Coach from "../FormElements/TeamCoachEmail"
import Number_Team_Coach from "../FormElements/TeamCoachContactNumber"

import FindPlayerID from "./FindPlayerID";
import Btn_ConfirmTeam from "./Btn_ConfirmTeam"
// Components
import PageLoader from '../Structure/PageLoader'
import RegistrationInsructions from "./RegistrationInsructions";
import RegistrationSubmitted from "./RegistrationSubmitted";
import SubmissionUnderReview from "./SubmissionUnderReview";

// Icons
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import GradeIcon from '@mui/icons-material/Grade';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import {H1,H2,H3,H4, P} from "../type"

const TeamRegistrationForm = (props)=>{
     
    const {SelectedTeam, CurrentSeasonID} = props
  
    const [UX, setUX] = useState(false) 
    const [hasUserSumbitted, sethasUserSumbitted] = useState(false) 

    const [AgeGroup, setAgeGroup] = useState(false)
    const [Division, setDivision] = useState(false)
    const [Region, setRegion] = useState(false)
    const [Conference, setConference] = useState(false)
    const [TeamName, setTeamName] = useState(false)

    const [TeamManagerName, setTeamManagerName] = useState(false)
    const [TeamManagerEmail, setTeamManagerEmail] = useState(false)
    const [TeamManagerNumber, setTeamManagerNumber] = useState(false)
    
    const [TeamCoachName, setTeamCoachName] = useState(false)
    const [TeamCoachEmail, setTeamCoachEmail] = useState(false)
    const [TeamCoachNumber, setTeamCoachNumber] = useState(false)
     

    useEffect(()=>{ 
        //console.log(SelectedTeam, Region)
    },[UX, SelectedTeam])

    
    
    if(!SelectedTeam.hasReadInstructions || !SelectedTeam.hasAgreedToTerms)
        return(<RegistrationInsructions SelectedTeam={SelectedTeam} setUX={setUX} {...props}/>)
    if(hasUserSumbitted) 
        return(<RegistrationSubmitted SelectedTeam={SelectedTeam} Region={Region}/>) 
    if(!SelectedTeam.RegistrationOpen || hasUserSumbitted)
        return(<SubmissionUnderReview />)
    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${FormElementsStyles.FormTitles}`}>
            { UX ? <PageLoader />: false}
            <div className={StructureStyles.Width70}>
                <H2>Register your team</H2>
                <H4>HOW TO REGISTER:</H4>
                
                <P>Enter a player's MyCricket ID into the form below to add them to your Player Roster.</P>
                <P>Once your team roster is completed, Include your Team Name, Region of choice, Age group and Prefered division to assign your team to a League.</P>
                <P>Teams requires a Min of 9 Players within its roster before submitting to SJWCA</P>
                <P>&nbsp;</P>
                <FindPlayerID {...props} CurrentSeasonID={CurrentSeasonID} setUX={setUX} sethasUserSumbitted={sethasUserSumbitted}/>
            </div> 



            <div className={`${StructureStyles.Width30} ${FormElementsStyles.FormTitles}`} >
            <H4><strong>Note: This form will save your progress automatically</strong></H4>
            <P>&nbsp;</P>
            <P>&nbsp;</P>
                <H4>Team Name <DriveFileRenameOutlineIcon /></H4>
                    <FormElementGroup>
                        <SelectTeamName setTeamName={setTeamName} CurrentName={SelectedTeam.Name} SelectedTeam={SelectedTeam} setUX={setUX} />
                    </FormElementGroup>

                <H4>Grading <GradeIcon /></H4>
                <FormElementGroup>
                    <SelectRegion setRegion={setRegion} setConference={setConference} setUX={setUX} SelectedTeam={SelectedTeam}/>
                    <SelectAgeGroup setAgeGroup={setAgeGroup} SelectedTeam={SelectedTeam} setUX={setUX} Region={Region}/>
                    <SelectDivision setDivision={setDivision} SelectedTeam={SelectedTeam}  setUX={setUX} Region={Region} AgeGroup={AgeGroup}/>
                    <ConfrenceSelected Conference={Conference}/>  
                </FormElementGroup>

                <H4>Manager Details <ManageAccountsIcon /></H4>
                <FormElementGroup>
                    <Name_Team_Manager setTeamManagerName={setTeamManagerName} SelectedTeam={SelectedTeam} setUX={setUX}/>
                    <Email_Team_Manager setTeamManagerEmail={setTeamManagerEmail} SelectedTeam={SelectedTeam} setUX={setUX} />
                    <Number_Team_Manager setTeamManagerNumber={setTeamManagerNumber} SelectedTeam={SelectedTeam} setUX={setUX} />
                    
                </FormElementGroup>

                <H4>Coach Details <AccessibilityNewIcon /></H4>
                <FormElementGroup>
                   
                    <Name_Team_Coach setTeamCoachName={setTeamCoachName} SelectedTeam={SelectedTeam} setUX={setUX}/>
                    <Email_Team_Coach  setTeamCoachEmail={setTeamCoachEmail} SelectedTeam={SelectedTeam} setUX={setUX} />
                    <Number_Team_Coach  setTeamCoachNumber={setTeamCoachNumber} SelectedTeam={SelectedTeam} setUX={setUX} />
                    
                </FormElementGroup>

            
            </div>  
        </div>
    )
}
export default TeamRegistrationForm;

const ConfrenceSelected = ({Conference})=>{
    //console.log(Conference)
    if(Conference)
    return(
        <div className = {FormElementsStyles[Conference.Conference]}>
            <P> Confrence : {Conference.Conference}</P>
        </div>
    )
        return null
}