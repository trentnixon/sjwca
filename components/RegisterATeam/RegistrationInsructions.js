import { useState } from "react";
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import StructureStyles from "../../styles/Structure/Structure.module.css";
import RegistrationRequirements from "../../styles/registrationPage/RegistrationRequirements.module.css";

import SupportersIcons from "../Structure/SupportersIcons";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

import { H1,P } from "../type";

const SubmissionUnderReview  = ({SelectedTeam, setUX, refreshData})=>{

    const [Agreed,setAgreed] = useState(false)
    const DisplayName = ()=>{
        return SelectedTeam.Manager.length !=0  ? SelectedTeam.Manager : SelectedTeam.Coach 
    }
    const label = { inputProps: { 'aria-label': 'Agree to the terms and conditions' } };

    const handleChange = (e)=>{
        setAgreed(e.target.checked)
    }

    const BeginRegistraion=(e)=>{
        const OBJ={
            _CALLBACK:refreshData,
            _URI:`${API}teams/${SelectedTeam.id}`,
            _DATA:{hasReadInstructions:true, hasAgreedToTerms:true}
          }
        
        UpdateRegistrationFormHandler(OBJ);
    }
    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
                <H1>Team Regisration Guidelines</H1>
                <P>Hello {DisplayName()}, thank you for your interest in this seasons SJWCA Season.</P>
                <P>The following are a list of minimum requirements needed to Register a Team for this Season. </P>
                <P>Please ensure you have the following details before procceding. </P>
                <ul className={RegistrationRequirements.MainList}>
                    <li>Your Team Name</li>
                    <li>A Complete list of ALL players in your team including : 
                        <ul>
                            <li>Full Name</li>
                            <li>Contact Email</li>
                            <li>Contact Number</li>
                            <li>Date of Birth</li>
                            <li>My Cricket ID</li>
                            <li>Recipet number for curtrent season</li>
                        </ul>

                    </li>
                    <li>All Players have been registered with <a href="https://mycricket.cricket.com.au/" target="_blank">MyCricket</a></li>
                    <li>Managers/Coaches Name, Contact Email and Contact Number </li>
                    <li>Age group of Team registering</li>
                    <li>SJWCA Region Local you are registering the team</li>
                    <li>Which division you would like the team to play</li>
                   
                </ul>
                <P>Agree to the SJWCA Terms and Conditions <Switch {...label}   onChange={handleChange} label="Label"/></P>
                <Button variant="contained" onClick={()=>{BeginRegistraion()}}  disabled={!Agreed}>Begin Registration</Button>
                <SupportersIcons />
        </div>
    )
}
export default SubmissionUnderReview;






