import { useState } from 'react';
import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"
import {EmailError} from "./Errors"
import {validateEmail} from "../../actions/handleUX"



export default function TeamName({setTeamManagerEmail, SelectedTeam, setUX}) {
   
    const [isEmail, setisEmail] = useState('')
    const [Email, setEmail] = useState('')

    const handleChange=(e)=>{
        setisEmail(validateEmail(e.target.value))
        setEmail(e.target.value)
        if(validateEmail(e.target.value)){ 
            if(e.target.value.length != 0 ){
                
                const OBJ={
                    _CALLBACK:setUX,
                    _URI:`${API}teams/${SelectedTeam.id}`,
                    _DATA:{Manager_Email:e.target.value}
                  }
                setTeamManagerEmail(e.target.value)
                UpdateRegistrationFormHandler(OBJ)
            }
        }
    }

  return (
          <FormElementsContainer>
            <EmailError Valid={isEmail} Email={Email}/>
            <TextField label={SelectedTeam.Manager_Email  ? SelectedTeam.Manager_Email:'Email Address'} variant="standard" placeholder={SelectedTeam.Manager_Email} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
