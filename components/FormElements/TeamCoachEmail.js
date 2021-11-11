import { useState } from 'react';
import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"
import {EmailError} from "./Errors"
import {validateEmail} from "../../actions/handleUX"



export default function TeamName({setTeamCoachEmail, SelectedTeam, setUX}) {
   
    const [isEmail, setisEmail] = useState('')
    const [Email, setEmail] = useState('')

    const handleChange=(e)=>{
        setisEmail(validateEmail(e.target.value))
        setEmail(e.target.value)
        if(validateEmail(e.target.value)){ 
            if(e.target.value.length != 0 ){
                setTeamCoachEmail(e.target.value)
                const OBJ={
                    _CALLBACK:setUX,
                    _URI:`${API}teams/${SelectedTeam.id}`,
                    _DATA:{Coach_Email:e.target.value}
                  }
          
                UpdateRegistrationFormHandler(OBJ)
            }
        }
    }

  return (
          <FormElementsContainer>
            <EmailError Valid={isEmail} Email={Email}/>
            <TextField label={SelectedTeam.Coach_Email  ? SelectedTeam.Coach_Email:'Email Address'} variant="standard" placeholder={SelectedTeam.Coach_Email} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
