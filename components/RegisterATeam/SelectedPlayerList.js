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


const Roster = (props)=>{
  
    const {PlayerRoster} = props
    const [PlayerInt, setPlayerInt] = useState(0)
  
    console.log(PlayerRoster)
    return(
        <>
        <H4>Team Roster ({PlayerInt ? PlayerInt: 0}) Min 9 <GroupIcon /></H4>
        <FormElementGroup>
         
                <ul className={PlayerListCSS.PlayerListContainer}>
                <li>
                <span></span>
                    <span>Player Name</span>
                    <span>MyCricket ID</span>
                    <span>Remove</span>
                </li>
                        {
                            PlayerRoster.Roster[0].players?.map((player,i)=>{
                            
                                return(
                                    <li key={i}>
                                        
                                        <span><PersonIcon className={ButtonsStyles.Success}/></span>
                                        <span>{player.Name}</span>
                                        <span>{player.MyCricketID} </span>
                                        <span><DeletePlayerFromRoster player={player}  {...props}/></span>
                                        
                                    </li> 
                                )
                            })
                        }
                </ul>
        </FormElementGroup>
        </>
    )
}

export default Roster;