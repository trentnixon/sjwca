import { useState } from 'react';
import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"
import {NumberError} from "./Errors"
import {ValidateNumberOnly} from "../../actions/handleUX"



export default function TeamName({setTeamCoachNumber, SelectedTeam, setUX}) {
   
    const [isNumber, setisNumber] = useState('')
    const [Number, setNumber] = useState('')

    const handleChange=(e)=>{
        setisNumber(ValidateNumberOnly(e.target.value))
        setNumber(e.target.value)
        if(ValidateNumberOnly(e.target.value)){ 
            if(e.target.value.length != 0 ){
                
                const OBJ={
                    _CALLBACK:setUX,
                    _URI:`${API}teams/${SelectedTeam.id}`,
                    _DATA:{Coach_Phone:e.target.value}
                  }
                
                  setTeamCoachNumber(e.target.value)
                UpdateRegistrationFormHandler(OBJ)
            }
        }
    }

  return (
          <FormElementsContainer>
             <NumberError Valid={isNumber} Number={Number}/>
            <TextField label={SelectedTeam.Coach_Phone  ? SelectedTeam.Coach_Phone:'Contact Number'} type="number" variant="standard" placeholder={SelectedTeam.Coach_Phone} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
