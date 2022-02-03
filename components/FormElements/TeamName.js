import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"

export default function TeamName({setTeamName, CurrentName, SelectedTeam, setUX}) {

  const [focusClass, setFocusClass] = useState('false')
    const handleChange=(e)=>{
      //console.log("FOCVUISED OUT")
      setFocusClass(false)
        if(e.target.value.length != 0 ){
            
            setTeamName(e.target.value)
            
            const OBJ={
                _CALLBACK:setUX,
                _URI:`${API}teams/${SelectedTeam.id}`,
                _DATA:{Name:e.target.value}
              }
      
            UpdateRegistrationFormHandler(OBJ)
        }
    }

    const handleonFocus = ()=>{
        //console.log("FOCVUISED")
        setFocusClass(true)
    }
 
  return (
          <FormElementsContainer focusClass={focusClass}>
            <TextField 
              label={SelectedTeam.Name} 
              variant="standard" 
              placeholder={CurrentName} 
              onFocus={handleonFocus} 
              fullWidth 
              onBlur={handleChange}
            
              />
          </FormElementsContainer>
      );
} 
