import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"

export default function TeamName({setTeamManagerName, SelectedTeam, setUX}) {
    const handleChange=(e)=>{

        if(e.target.value.length != 0 ){
            
            setTeamManagerName(e.target.value)
            
            const OBJ={
                _CALLBACK:setUX,
                _URI:`${API}teams/${SelectedTeam.id}`,
                _DATA:{Manager:e.target.value}
              }
      
            UpdateRegistrationFormHandler(OBJ)
        }
    }

  return (
          <FormElementsContainer>
            <TextField label={SelectedTeam.Manager  ? SelectedTeam.Manager:'Name'} variant="standard" placeholder={SelectedTeam.Manager} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
