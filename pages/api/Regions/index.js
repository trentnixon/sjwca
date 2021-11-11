import { API } from "../../../config/index"
import fetch from 'node-fetch';


const handler  = async(req, res) => {
    try{
          
            const regions = await fetch(`${API}regions`)
            const regionsAPI = await regions.json()
            await res.status(200).json(regionsAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler; 