const axios = require('axios');
import { API } from "../../config/index";
import { findIndex } from "lodash";
export const UpdateRegistrationFormHandler = (OBJ)=>{
  
        /* const OBJ={
            _CALLBACK:setUX,
            _URI:`${API}teams/${SelectedTeam.id}`,
            _DATA:{Name:event.target.value.id}
        } */

        //console.log(OBJ._DATA)
        OBJ._CALLBACK(true)
    
        const header = { headers: {'Content-Type': 'application/json',}}
       
        axios({ url: OBJ._URI, method: 'put', data:OBJ._DATA})
        .then(function (response) {
            //console.log(response)
            OBJ._CALLBACK(false)
            // always executed
        })
        .catch(function (error) {
            // handle error
            console.log('UpdateRegistrationFormHandler ERROR ', error);
            OBJ._CALLBACK(false)
        })
}



export const handleTeamName = (OBJ)=>{  
  
    const URI =`${API}teams/${OBJ._ID}`    
    const DATA = {Name:OBJ._VALUE}
    UpdateHandler(URI, DATA, OBJ)
}



export const handleSelectAgeGroup = (OBJ)=>{  

    const URI =`${API}teams/${OBJ._ID}`    
    const DATA = {age_group:[OBJ._VALUE]}
    UpdateHandler(URI, DATA, OBJ)

}


export const handleSelectDivision = (OBJ)=>{  
    const URI =`${API}teams/${OBJ._ID}`    
    const DATA = {division:[OBJ._VALUE]}
    UpdateHandler(URI, DATA, OBJ)
}



/* CREATE NEW TEAM */


const EmailNewTeamRegistrationPage = (TEAM)=>{

    console.log(TEAM)
    const URI =`${API}NewTeamConfirm/${TEAM.id}`
  
    axios({ url: URI, method: 'get'}).then((res)=>{
            console.log(res)
    })
}






export const handleCreateNewTeam = (OBJ)=>{
  
    /* const OBJ={
        _CALLBACK:setUX,
        _URI:`${API}teams/${SelectedTeam.id}`,
        _DATA:{Name:event.target.value.id}
    } */

    if(!OBJ._PROCESS)
        return false

    console.log(OBJ)
    OBJ._CALLBACK(true)

    const header = { headers: {'Content-Type': 'application/json',}}
   
    axios({ url: OBJ._URI, method: 'post', data:OBJ._DATA})
    .then(function (response) {
        console.log(response.data)
        OBJ._CALLBACK(response)
        EmailNewTeamRegistrationPage(response.data) 
        CreateNewTeamSeasonRoster(response.data.id, OBJ._DATA.Current_Season_ID)
        // always executed 
    })
    .catch(function (error) {
        // handle error
        console.log('UpdateRegistrationFormHandler ERROR ', error);
        OBJ._CALLBACK(error)
    })
}


/*  FETCH LATEST ROSTER*/


const CreateNewTeamSeasonRoster = (TEAMID, Current_Season_ID)=>{
    ///team-season-rosters
    const URI =`${API}team-season-rosters`;
    axios({ url: URI, method: 'post', data:{
            Roster :[{players : []}],
            team :[TEAMID],
            season:[Current_Season_ID]
            }
        })
    .then(function (response) {
        console.log(response.data)
        // always executed 
    })
    .catch(function (error) {
        // handle error
        console.log('CreateNewTeamSeasonRoster ERROR ', error);
     
    })
}




export const fetchLatestTeamRoster = async(TEAMID,SEASONID, CALLBACK)=>{ 
    console.log(TEAMID)
 ///teams/:id
    
    const URI =`${API}teams/${TEAMID}`  
     await axios({ url: URI, method: 'get'})
            .then(function (response) {
                console.log(response.data.team_season_rosters, SEASONID)
                let INDEX = findIndex(response.data.team_season_rosters, function(o) { return o.season == SEASONID; })
                console.log(response.data.team_season_rosters[INDEX]);

                CALLBACK(response.data.team_season_rosters[INDEX]) 
                // always executed 
            })
            .catch(function (error) {
                // handle error
                console.log('UpdateRegistrationFormHandler ERROR ', error);
                OBJ._CALLBACK(error)
            })
}