import ButtonStyles from "../../styles/Structure/Buttons.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { API } from "../../config/index";
import {filter} from 'lodash';

const DeletePlayerFromRoster = ({player,SelectedTeam,refreshData, ResetParentComponent})=>{

    const handleDelete = ()=>{
        let OBJ={
            _URI :`${API}teams/${SelectedTeam.id}`,
            _CALLBACK:refreshData
        }
     
        SelectedTeam.TeamSeason[0].TeamRoster[0].players = filter(SelectedTeam.TeamSeason[0].TeamRoster[0].players, function(o) { return o.id != player.id; })
      
        OBJ._DATA = {TeamSeason :SelectedTeam.TeamSeason}
        UpdateRegistrationFormHandler(OBJ)
        ResetParentComponent()
    }
    
    return(
        <IconButton aria-label="delete" onClick={handleDelete} className={ButtonStyles.Error}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeletePlayerFromRoster;