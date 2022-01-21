const axios = require('axios');
import { API } from "../../config/index";
import {EMAIL_NewPlayerRegister} from "../Emails/index"
//import {UpdateRegistrationFormHandler} from "./handleTeamRegistration"


export const FindPlayerDetails = (OBJ)=>{
  
    const URI =`${API}players/Find/${OBJ._MYCRICKETID}`
    const header = { headers: {'Content-Type': 'application/json',}}
   
    axios({ url: URI, method: 'get'})
    .then(function (response) {
        //console.log(response.data)
        OBJ._CALLBACK([response.data], OBJ._MYCRICKETID)
    
        // always executed
    })
    .catch(function (error) {
        // handle error
        console.log('FindPlayerDetails ERROR ', error);  
        OBJ._CALLBACK([{id:false}])
    })
}




export const RemovePlayerFromTeamSeasonRoster = (OBJ)=>{
   
    const URI =`${API}team-season-rosters/${OBJ._ROSTERID}`

    axios({ url: URI, method: 'put', data:{Roster :[{players : OBJ._TEAMROSTER}]}})
    .then(function (response) { 
        //console.log(response)
        OBJ._CALLBACK(true)
        UpdatePlayerSeason(OBJ)
    })
    .catch(function (error) {
        // handle error
        console.log('UpdatePlayer ERROR ',error);
        OBJ._CALLBACK(true)
    })
}


export const UpdateTeamSeasonRosterVersion2 = (OBJ, PLAYERID)=>{
    console.log({ROSTERID :OBJ._ROSTERID, PLAYERID:PLAYERID})
   
    const URI =`${API}team-season-rosters/update`
    axios({ url: URI, method: 'post', data:{ROSTERID :OBJ._ROSTERID, PLAYERID:PLAYERID}})
    .then(function (response) { 
        console.log(response)
        OBJ._CALLBACK(true)
    })
    .catch(function (error) {
        // handle error
        console.log('UpdatePlayer ERROR ',error);
        OBJ._CALLBACK(true)
    })

}

const UpdatePlayerSeason=(OBJ)=>{
    // update the players Team list after removal from roster
   
    console.log(OBJ)
    const URI =`${API}players/updateSeasonReceipts`
    axios({ url: URI, method: 'post', data:{OBJ :OBJ}})
    .then(function (response) { 
        console.log(response)
        OBJ._CALLBACK(true)
    })
    .catch(function (error) {
        // handle error
        console.log('UpdatePlayer ERROR ',error);
        OBJ._CALLBACK(true)
    })
}

export const UpdatePlayer = (OBJ)=>{
    const URI =`${API}players/${OBJ._PLAYERID}`
    //_TEAMID
    //const header = { headers: {'Content-Type': 'application/json',}}

    console.log(" OBJ._PLAYER_SEASON_RECEIPTS",  OBJ._PLAYER_SEASON_RECEIPTS)


    const _PLAYER_UPDATE_DATA = {
        id:OBJ._PLAYERID, 
        Season_receipts : OBJ._PLAYER_SEASON_RECEIPTS 
    }


    axios({ url: URI, method: 'put', data:_PLAYER_UPDATE_DATA})
        .then(function (response) { 

            OBJ._TEAMROSTER.push(OBJ._PLAYERID)
            UpdateTeamSeasonRosterVersion2(OBJ,OBJ._PLAYERID)
            EMAIL_NewPlayerRegister(OBJ,response.data.id)
           
           
        })
        .catch(function (error) {
            // handle error
            console.log('UpdatePlayer ERROR ',error);
            OBJ._CALLBACK(error) 
        })

}

// Add new Player HERE
export const AddNewPlayer = (OBJ)=>{ 
    //console.log(OBJ)

    const URI =`${API}players/`
    //_TEAMID
    const header = { headers: {'Content-Type': 'application/json',}}
    axios({ 
            url: URI, 
            method: 'post', 
            data:{
                Name:OBJ._PLAYERNAME,
                MyCricketID:OBJ._MyCricketID,
                Season_receipts :OBJ._PLAYER_SEASON_RECEIPTS,
                gender:[OBJ._GENDER],
                player_email:OBJ._EMAIL,
                mobile_phone:OBJ._CONTACTNUMBER,
                ethnicity:[OBJ._Ethnicity],
                DOB:OBJ._DOB,
                age_group: OBJ._AGE ? [OBJ._AGE]: null,
                division: OBJ._DIVISION ? [OBJ._DIVISION]:null,
                region:OBJ._REGION ? [OBJ._REGION]:null
            }
        })
    .then(function (response) {
            // Prep Roster and send to Team Update 
            // OBJ._TEAMROSTER.push(response.data.id)
          
           UpdateTeamSeasonRosterVersion2(OBJ,response.data.id);
           EMAIL_NewPlayerRegister(OBJ,response.data.id) 
           
    })
    .catch(function (error) {
        // handle error
        console.log('AddNewPlayer ERROR', error);
        OBJ._CALLBACK()
    })
}




/*  AUX Functions ******************************* */


const FindCurrentRoster = (ROSTER)=>{
    let ARR=[]
    ROSTER.map((Player,i)=>{ ARR.push(Player.id) })
    return {players : ARR};
}


export const CreateTeamRosterforStrapi = (_SELECTEDTEAM)=>{
    // CurrentSeasonID
    let TempSeason=[]
    //console.log(_SELECTEDTEAM.Roster[0].players) 
    _SELECTEDTEAM.Roster[0].players.map((_Player,i)=>{ TempSeason.push(_Player.id)})
    return TempSeason
}