import { useState } from "react";
import Link from 'next/link'
import MarkdownContainer from '../../components/Structure/MarkdownContainer'
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"

import StructureStyles from "../../styles/Structure/Structure.module.css";
import RegistrationRequirements from "../../styles/registrationPage/RegistrationRequirements.module.css";
import ButtonStyle from "../../styles/Structure/Buttons.module.css"
import FormElementGroup from "../FormElements/FormElementGroup"

import SupportersIcons from "../Structure/SupportersIcons";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { H1,H2,P } from "../type";

const SubmissionUnderReview  = ({SelectedTeam, setUX, refreshData, Insructions})=>{

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
        
       <H2>Team Registration Guidelines</H2>
                <P>Hello {DisplayName()}, thank you for your interest in this seasons SJWCA Season.</P>
              
                    <div className={RegistrationRequirements.MainList}>
                    <MarkdownContainer>{Insructions}</MarkdownContainer> 
                          
                    </div>
                   
                    <div className={ButtonStyle.BtnRight}>
                            <P style={{color:'#FF9813'}}>I Agree to the SJWCA <Link target="_blank" href="/terms" >Terms and Conditions</Link> <Switch {...label}   onChange={handleChange} label="Label"/></P>
                            <Button variant="contained" className={ButtonStyle.Next} onClick={()=>{BeginRegistraion()}}  disabled={!Agreed}>Begin Registration</Button>
                    </div> 
                   
                <SupportersIcons />
        </div>
    )
}

export default SubmissionUnderReview;