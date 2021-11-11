import { API } from "../../../config/index"
import fetch from 'node-fetch';

const handler  = async(req, res) => {
    try{
            const seasons = await fetch(`${API}seasons`)
            const seasonsAPI = await seasons.json()
            await res.status(200).json(seasonsAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler; 