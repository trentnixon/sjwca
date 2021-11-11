import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"

export default function TeamName({setTeamName, CurrentName, SelectedTeam, setUX}) {
    const handleChange=(e)=>{

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

  return (
          <FormElementsContainer>
            <TextField label={SelectedTeam.Name} variant="standard" placeholder={CurrentName} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
