import ButtonStyles from "../../styles/Structure/Buttons.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import {RemovePlayerFromTeamSeasonRoster} from "../../actions/Registration/handlePlayerRoster"

import {filter} from 'lodash';

const DeletePlayerFromRoster = ({player,RefreshUIonDelete,PlayerRoster,RequestnewDatafromStrapi,SelectedTeam})=>{

    const handleDelete = ()=>{

        PlayerRoster.Roster[0].players = filter(PlayerRoster.Roster[0].players, function(o) { return o.id != player.id; })
    
        let OBJ={
            _TEAMROSTER : PlayerRoster.Roster[0].players,
            _CALLBACK:RequestnewDatafromStrapi,
            _ROSTERID:PlayerRoster.id,
            _TEAMID:SelectedTeam.id,
            _PLAYERID:player.id
        }
    
        RemovePlayerFromTeamSeasonRoster(OBJ)  
       RefreshUIonDelete()  
    }
    
    console.log(player,SelectedTeam.id)
    return(
        <IconButton aria-label="delete" onClick={handleDelete} className={ButtonStyles.Error}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeletePlayerFromRoster; 