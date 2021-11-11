
import Button from '@mui/material/Button';
import { server, API } from "../../config/index"
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
const Btn_ConfirmTeam = ({SelectedTeam, setUX, sethasUserSumbitted})=>{
    
    const ConfirmTeamDetails = ()=>{

            const OBJ={
              _CALLBACK:setUX,
              _URI:`${API}teams/${SelectedTeam.id}`,
              _DATA:{RegistrationOpen:false}
            }
    
          UpdateRegistrationFormHandler(OBJ)
         
          sethasUserSumbitted(true)

    }
    return(
        <Button variant="contained" onClick={()=>{ConfirmTeamDetails()}} >Submit Team for Review</Button>
    )
}
export default Btn_ConfirmTeam;