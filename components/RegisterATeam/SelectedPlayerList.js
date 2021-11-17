
import { useEffect, useState } from "react";
import PlayerListCSS from "../../styles/registrationPage/PlayerList.module.css";
import FormElementGroup from "../FormElements/FormElementGroup"
import DeletePlayerFromRoster from "../FormElements/DeletePlayerFromRoster"
import {H1,H2, H4} from "../type"
import {find} from "lodash"
const SelectedPlayerList = (props)=>{
    const {SelectedTeam, CurrentSeasonID} = props;
    
    const [NewSeason, setNewSeason] = useState([])
    const [TeamRoster, setTeamRoster] = useState([])
    
    let CurrentSeason  = '2022';
   let LimitedPlayerNumber  = 15
    const findSeasonsReciept = (OBJ)=>{
        let ReceiptNumber  = find(OBJ, function(o) { return o.season.Season === CurrentSeason; });
        return ReceiptNumber
    }



    useEffect(()=>{  
            // reset the selected season and rerun for updates
            setNewSeason([]) 
    },[SelectedTeam])

    useEffect(()=>{  },[NewSeason])

    
    if(NewSeason?.length === 0)
    return( <FindNewSeason {... props} setNewSeason={setNewSeason} setTeamRoster={setTeamRoster} /> )
    return (
        <>
        <H4>Team Roster ({TeamRoster?.length})</H4>
        <FormElementGroup>
         
                <ul className={PlayerListCSS.PlayerListContainer}>
                <li>
                    <span>Player Name</span>
                    <span>MyCricket ID</span>
                    <span>Remove</span>
                </li>
                        {
                            TeamRoster?.map((player,i)=>{
                            
                                return(
                                    <li key={i}>
                                        
                                        <span>{player.Name}</span>
                                        <span>{player.MyCricketID} </span>
                                        <span><DeletePlayerFromRoster player={player} SelectedTeam={SelectedTeam} {...props}/></span>
                                        {/* 
                                        <span>{findSeasonsReciept(player.Season_receipts).ReceiptNumber}</span>
                                        <span>{findSeasonsReciept(player.Season_receipts).Confirmed ? 'Check':'Awaiting' }</span> */}
                                    </li>
                                )
                            })
                        }
                </ul>
        </FormElementGroup>
        </>
    )
}

export default SelectedPlayerList;



const FindNewSeason = (props)=>{
    const {SelectedTeam, setNewSeason, setTeamRoster, CurrentSeasonID} = props;

   
     const FindSeason = ()=>{
        let NewSeason  = find(SelectedTeam.TeamSeason, function(o) { return o.season.id === CurrentSeasonID; });
        setNewSeason(NewSeason)
        setTeamRoster(NewSeason?.TeamRoster[0].players)
    } 

    FindSeason()
    return(
        <>FIND NEW SEASON DATA </>
    )
}