//import { server, API } from "../../config/index"
import {  useState } from "react";
import PlayerListCSS from "../../styles/registrationPage/PlayerList.module.css";
import ButtonsStyles from "../../styles/Structure/Buttons.module.css";

import FormElementGroup from "../FormElements/FormElementGroup"
import DeletePlayerFromRoster from "../FormElements/DeletePlayerFromRoster"
import {H1,H2, H3, H4} from "../type"
import {find} from "lodash"
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';


const DisplayPlayerlist = (props)=>{
    const {SelectedTeam, CurrentSeasonID} = props;
    
    const [NewSeason, setNewSeason] = useState([])
    const [TeamRoster, setTeamRoster] = useState([])

    const FindSeason = ()=>{
        //console.log('run FindSeason')
        let NewSeason  = find(SelectedTeam.TeamSeason, function(o) { return o.season.id === CurrentSeasonID; });
        setNewSeason(NewSeason)
        setTeamRoster(NewSeason?.TeamRoster[0].players)
    } 
    
    NewSeason?.length === 0 ? FindSeason() : false
  
    if(!NewSeason)
        return(<></>)
        return( <Roster TeamRoster={TeamRoster} {...props}/>)
}

export default DisplayPlayerlist;


const Roster = (props)=>{
    const {TeamRoster, CurrentSeasonID,SelectedTeam} = props
 
    return(
        <>
        <H4>Team Roster ({TeamRoster?.length ? TeamRoster?.length : 0}) Min 9 <GroupIcon /></H4>
        <FormElementGroup>
         
                <ul className={PlayerListCSS.PlayerListContainer}>
                <li>
                <span></span>
                    <span>Player Name</span>
                    <span>MyCricket ID</span>
                    <span>Remove</span>
                </li>
                        {
                            TeamRoster?.map((player,i)=>{
                            
                                return(
                                    <li key={i}>
                                        
                                        <span><PersonIcon className={ButtonsStyles.Success}/></span>
                                        <span>{player.Name}</span>
                                        <span>{player.MyCricketID} </span>
                                        <span><DeletePlayerFromRoster player={player} SelectedTeam={SelectedTeam} {...props}/></span>
                                        
                                    </li>
                                )
                            })
                        }
                </ul>
        </FormElementGroup>
        </>
    )
}