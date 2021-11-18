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
   
    const [PlayerLookup, setPlayerLookup] = useState(false);
    const [PlayerReturn, setPlayerReturn] = useState([]);
    //const [PlayerRoster, setPlayerRoster] = useState([]);
    const [MyCricketID, setMyCricketID] = useState(null)
    
    //const [isAddingNewPlayer, setisAddingNewPlayer] = useState(true)
   

    const ResetParentComponent = ()=>{
        console.log("RESET FORM COMPONENTS")
        refreshData()
        setPlayerLookup(false)
        setPlayerReturn([])
        //setisAddingNewPlayer(true)
       
        
    }
    const FindPlayerID = ()=>{
        setPlayerLookup(true) 
    }

    const FetchPlayerValue = (Value, ID)=>{
        console.log(Value, ID)
        setPlayerLookup(false)
        setPlayerReturn(Value)
       
    }
    
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
                                            /* isAddingNewPlayer={isAddingNewPlayer}
                                            setisAddingNewPlayer={setisAddingNewPlayer} */
                                            {...props}
                                            /></> : 
                                        < PlayerLookupCheck /> 
                    }
        </>
    )
}
export default AddPlayer;



const NewPlayerPath = (props)=>{
    const {PlayerReturn} = props
        return(
            <>
                {
                    !PlayerReturn.length ?
                            <>
                                <PlayerID  {...props}/>
                                <SelectedPlayerList {...props} />
                                
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