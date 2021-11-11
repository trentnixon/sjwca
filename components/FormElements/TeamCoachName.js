import TextField from '@mui/material/TextField';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"

export default function TeamName({setTeamCoachName, SelectedTeam, setUX}) {
   
    const handleChange=(e)=>{
        if(e.target.value.length != 0 ){
            setTeamCoachName(e.target.value)
            const OBJ={
                _CALLBACK:setUX,
                _URI:`${API}teams/${SelectedTeam.id}`,
                _DATA:{Coach:e.target.value}
              }
      
            UpdateRegistrationFormHandler(OBJ)
        }
    }

  return (
          <FormElementsContainer>
            <TextField label={SelectedTeam.Coach  ? SelectedTeam.Coach:'Name'} variant="standard" placeholder={SelectedTeam.Coach} fullWidth onBlur={handleChange}/>
          </FormElementsContainer>
      );
}
