import { useEffect, useState } from "react";
import {fetchLatestTeamRoster} from "../../actions/Registration/handleTeamRegistration"

import PlayerID from "../FormElements/PlayerID"
import UpdateExictingPlayer from "./UpdateExictingPlayer"
import CreateNewPlayer from "./CreateNewPlayer"
import {H2, H3} from "../type";
import { findIndex } from "lodash";

// Components
import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import SelectedPlayerList from "./SelectedPlayerList";
import Btn_ConfirmTeam from "./Btn_ConfirmTeam"

const AddPlayer = (props)=>{
    
    const [isMyCricketIDEntered, setisMyCricketIDEntered] = useState(false);
    const [PlayerRoster, setPlayerRoster] = useState(false);

    const ResetParentComponent = ()=>{  
        setisMyCricketIDEntered(false) 
     
    }
    
    useEffect(()=>{ console.log(PlayerRoster) },[PlayerRoster]) 
    
  

    if(!PlayerRoster)
    return( <PlayerLookupCheck setPlayerRoster={setPlayerRoster} {...props}/>)
    return(
      !isMyCricketIDEntered ? <NewPlayerPath  ResetParentComponent={ResetParentComponent} PlayerRoster={PlayerRoster} setPlayerRoster={setPlayerRoster} {...props} />:<Interim />

    ) 
}
export default AddPlayer;

 



const NewPlayerPath = (props)=>{
   const {ResetParentComponent, setPlayerRoster,PlayerRoster} = props
    
    const [PlayerReturn, setPlayerReturn] = useState([]);
    const [MyCricketID, setMyCricketID] = useState(null)
    const [isStallUI, setisStallUI] = useState(false)
    //const [FetchPlayerValue, setFetchPlayerValue] = useState([])

    // UI Functions
    // default view on Back btn click

    const RequestnewDatafromStrapi = ()=>{
            setPlayerRoster(false)
            setisStallUI(false)
            ResetParentComponent()
    }

    const BacktoIDInput = ()=>{
        ResetParentComponent()
        setPlayerReturn([])
    }

    const RefreshUIonDelete = ()=>{
        console.log("RefreshUIonDelete CLICKED")
        setisStallUI(true)
        setPlayerReturn([])
        ResetParentComponent()
      
    }

    const RefreshUIonAddUpdate = ()=>{
        console.log("RefreshUIonDelete CLICKED")
        setisStallUI(true)
        setPlayerReturn([])
        ResetParentComponent()
      
    }

//setUX={setUX} sethasUserSumbitted={sethasUserSumbitted}
    console.log(PlayerReturn)
        if(isStallUI)
        return(
            <H2>Processing Request</H2>
        )
        return(
            <div>
                {
                    !PlayerReturn.length ?
                            <div>
                                <Btn_ConfirmTeam PlayerRoster={PlayerRoster} {...props} />
                                <PlayerID  {...props} setMyCricketID={setMyCricketID} setPlayerReturn={setPlayerReturn}/>
                                <SelectedPlayerList {...props} RefreshUIonDelete={RefreshUIonDelete}  RequestnewDatafromStrapi={RequestnewDatafromStrapi}/>
                            </div> 
                            :  <CreateorUpdatePlayer {...props} MyCricketID={MyCricketID} PlayerReturn={PlayerReturn} BacktoIDInput={BacktoIDInput}  RefreshUIonAddUpdate={RefreshUIonAddUpdate} RequestnewDatafromStrapi={RequestnewDatafromStrapi}/>
                }
            </div>
        )
}



const CreateorUpdatePlayer = (props)=>{
    const {PlayerReturn,BacktoIDInput, PlayerRoster} = props;

    const hasPlayeralreadyBeenAssignedToTeam = ()=>{
        
        let INDEX = findIndex(PlayerRoster.Roster[0].players, function(o) { return o.id == PlayerReturn[0].id; });
        
        console.log(PlayerRoster.Roster[0].players)
        if(INDEX != -1)
            return true
                return false
    }
    
    if(hasPlayeralreadyBeenAssignedToTeam())
        return(
            <div>
                <H2>PLAYER ALREADY IN TEAM</H2>
                <Btn_ResetParentComponent ResetParentComponent={BacktoIDInput}/>
            </div>
        )
        return(
            <div>
                {
                    PlayerReturn[0].id ? <UpdateExictingPlayer  {... props} />:<CreateNewPlayer {... props} />
                } 
            </div>
        )
} 


const PlayerLookupCheck = (props)=>{
    const {SelectedTeam,CurrentSeasonID, setPlayerRoster} = props
    fetchLatestTeamRoster(SelectedTeam.id,CurrentSeasonID,  setPlayerRoster)
    return(
        <H2>Player Lookup...</H2> 
    )
}

const Interim = (props)=>{

    return(
        <H2>Gathering Information...</H2> 
    )
}
