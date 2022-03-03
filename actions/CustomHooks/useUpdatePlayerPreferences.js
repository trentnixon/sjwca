const axios = require('axios');
import { useEffect, useState } from "react"
import { API } from "../../config/index";

export const useUpdatePlayersPreferences = ()=>{

    const [Data,setData] = useState([])

    const AuthUpdatePlayer = async(OBJ)=>{
        
        console.log(OBJ)
        ///players/:id
        const URI =`${API}players/${OBJ.ID}`

        await    axios({ url: URI, method: 'put', data:OBJ.DATA})
            .then(function (response) {
                console.log(response.data)
                if(response.data.length === 0){
                    setData({error:true, msg:'No Players avaliable for this email address'})
                }else{
                    setData(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                console.log('FindPlayerDetails ERROR ', error);
                setData({error:true, msg:'error finding email address'})
            
            }) 
    }
    useEffect(()=>{},[Data]);
    return [Data, AuthUpdatePlayer]
}