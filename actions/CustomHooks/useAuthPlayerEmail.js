const axios = require('axios');
import { useEffect, useState } from "react"
import { API } from "../../config/index";

export const useAuthParentEmail = ()=>{

    const [Data,setData] = useState([])

    const AuthEmail = async(Email)=>{
        const URI =`${API}players?player_email=${Email}`
        await axios({ url: URI, method: 'get'})
            .then(function (response) {
                console.log(response.data)
                if(response.data.length === 0){
                    setData({error:true, msg:'No Players avaliable for this email address'})
                }else{
                    setData(response.data)
                }
                
                // always executed
            })
            .catch(function (error) {
                // handle error
                console.log('FindPlayerDetails ERROR ', error);
                setData({error:true, msg:'error finding email address'})
            
            })
    }
    useEffect(()=>{},[Data]);
    return [Data, AuthEmail]
}