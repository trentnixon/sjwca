const axios = require('axios');
import { API } from "../../config/index";

export const UpdateRegistrationFormHandler = (OBJ)=>{
  
        /* const OBJ={
            _CALLBACK:setUX,
            _URI:`${API}teams/${SelectedTeam.id}`,
            _DATA:{Name:event.target.value.id}
        } */

        console.log(OBJ._DATA)
        OBJ._CALLBACK(true)
    
        const header = { headers: {'Content-Type': 'application/json',}}
       
        axios({ url: OBJ._URI, method: 'put', data:OBJ._DATA})
        .then(function (response) {
            console.log(response)
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
        console.log(response)
        OBJ._CALLBACK(response)
        // always executed
    })
    .catch(function (error) {
        // handle error
        console.log('UpdateRegistrationFormHandler ERROR ', error);
        OBJ._CALLBACK(error)
    })
}