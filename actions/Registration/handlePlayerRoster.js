const axios = require('axios');
import { API } from "../../config/index";
import {UpdateRegistrationFormHandler} from "./handleTeamRegistration"


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


const PrepTeamRosterforUpdate = (OBJ, ID)=>{
    OBJ._URI =`${API}teams/${OBJ._TEAMID}` 
    // Add new player ID to the Team Registration and Save
    if(OBJ._TEAMROSTER.length === 0){
        let TempSeason=[{
            season:[OBJ._SEASON],
            TeamRoster:[{players : [ID]}]
        }]
        OBJ._DATA = {TeamSeason :TempSeason}
    }
    else{
        OBJ._TEAMROSTER.map((Season,i)=>{
            let isSeason = Season.season.indexOf(OBJ._CURRENTSEASONID)
            if(isSeason != -1){ OBJ._TEAMROSTER[i].TeamRoster[0].players.push(ID)}
        })
        OBJ._DATA = {TeamSeason :OBJ._TEAMROSTER}
    }
   
    console.log("PrepTeamRosterforUpdate", OBJ)
    UpdateRegistrationFormHandler(OBJ)
}



export const UpdatePlayer = (OBJ)=>{
    const URI =`${API}players/${OBJ._PLAYERID}`
    //_TEAMID
    const header = { headers: {'Content-Type': 'application/json',}}
    console.log(" OBJ._PLAYER_SEASON_RECEIPTS",  OBJ._PLAYER_SEASON_RECEIPTS)

    axios({ url: URI, method: 'put', data:{id:OBJ._PLAYERID, Season_receipts : OBJ._PLAYER_SEASON_RECEIPTS}})
        .then(function (response) { 
            // Prep Roster and send to Team Update
            console.log(OBJ)
            PrepTeamRosterforUpdate(OBJ, OBJ._PLAYERID)
            // always executed
        })
        .catch(function (error) {
            // handle error
            console.log('UpdatePlayer ERROR ',error);
            OBJ._CALLBACK(error)
        })

}

export const AddNewPlayer = (OBJ)=>{
    console.log(OBJ)

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
                DOB:OBJ._DOB
            }
        })
    .then(function (response) {
        // Prep Roster and send to Team Update
        PrepTeamRosterforUpdate(OBJ, response.data.id)
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

    console.log(_SELECTEDTEAM)
    
    _SELECTEDTEAM.TeamSeason.map((_Season,i)=>{
        //console.log(Season.TeamRoster[0].players)
        TempSeason.push({
            season:[_Season.season.id],
            TeamRoster :[FindCurrentRoster(_Season.TeamRoster[0].players)]
        })
    })        

    console.log(TempSeason)
    return TempSeason
}