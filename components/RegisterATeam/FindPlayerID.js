import { useEffect, useState } from "react";
import PlayerID from "../FormElements/PlayerID"
import UpdateExictingPlayer from "./UpdateExictingPlayer"
import CreateNewPlayer from "./CreateNewPlayer"
import {H3} from "../type";
import { findIndex } from "lodash";

// Components
import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import SelectedPlayerList from "./SelectedPlayerList";


const AddPlayer = (props)=>{
    const {SelectedTeam, refreshData, CurrentSeasonID} = props
    const LimitedPlayerNumber = 15;
    const [PlayerLookup, setPlayerLookup] = useState(false);
    const [PlayerReturn, setPlayerReturn] = useState([]);
    //const [PlayerRoster, setPlayerRoster] = useState([]);
    const [MyCricketID, setMyCricketID] = useState(null)

    const ResetParentComponent = ()=>{
        console.log("RESET FORM COMPONENTS")
        setPlayerLookup(false)
        setPlayerReturn([])
        //setPlayerRoster([])
        refreshData()
    }
    const FindPlayerID = ()=>{
        setPlayerLookup(true) 
    }

    const FetchPlayerValue = (Value, ID)=>{
        console.log(Value, ID)
        setPlayerLookup(false)
        setPlayerReturn(Value)
       
    }
    
/*     useEffect(()=>{
        let StoreRoster=[]
        SelectedTeam.players.map((player,i)=>{
            console.log(player)
            StoreRoster.push({
                Name:player.Name,
                MyCricketID: player.MyCricketID
            })
        })
       setPlayerRoster(StoreRoster)
    },[]) */
    
    useEffect(()=>{ },[PlayerReturn])
    
    return(
        <>
                    {
                        !PlayerLookup ? <><NewPlayerPath 
                                            PlayerReturn={PlayerReturn}
                                            FindPlayerID={FindPlayerID} 
                                            FetchPlayerValue={FetchPlayerValue} 
                                            setMyCricketID={setMyCricketID}
                                            SelectedTeam={SelectedTeam}
                                            ResetParentComponent={ResetParentComponent}
                                            CurrentSeasonID={CurrentSeasonID}
                                            MyCricketID={MyCricketID}
                                            {...props}
                                            /></> : 
                                        < PlayerLookupCheck /> 
                    }
        </>
    )
}
export default AddPlayer;



const NewPlayerPath = (props)=>{
    const {PlayerReturn, CurrentSeasonID , isNextFetching} = props

    console.log("isNextFetching = ", isNextFetching)
    useEffect(()=>{},[isNextFetching])
        return(
            <>
                {
                    !PlayerReturn.length ?
                            <>
                                <PlayerID  {...props}/>
                                {
                                    isNextFetching ?'Loading':<SelectedPlayerList {...props} CurrentSeasonID={CurrentSeasonID}/>
                                }
                                
                            </> : 
                                <CreateorUpdatePlayer {...props}/>
                }
            </>
        )
}



const PlayerLookupCheck = ()=>{
    return(
        <H3>Player Lookup...</H3> 
    )
}


const CreateorUpdatePlayer = (props)=>{
    const {PlayerReturn,SelectedTeam, ResetParentComponent} = props;

    const hasPlayeralreadyBeenAssignedToTeam = (ID)=>{
        //console.log(ID, PlayerReturn, SelectedTeam?.TeamSeason[0]?.TeamRoster[0]?.players)
        let INDEX = findIndex(SelectedTeam?.TeamSeason[0]?.TeamRoster[0]?.players, function(o) { return o.id == ID; });
        
        //console.log(INDEX)
        if(INDEX != -1)
            return true
                return false
    }
    
    if(hasPlayeralreadyBeenAssignedToTeam(PlayerReturn[0].id))
        return(
            <>
                <H3>PLAYER ALREADY IN TEAM</H3>
                <Btn_ResetParentComponent ResetParentComponent={ResetParentComponent}/>
            </>
        )
    return(
        <>
        {
            PlayerReturn[0].id ? <UpdateExictingPlayer  {... props}/>:<CreateNewPlayer {... props}/>
        }
        </>
    )
}