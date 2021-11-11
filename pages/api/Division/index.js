import { API } from "../../../config/index"
import fetch from 'node-fetch';


const handler  = async(req, res) => {
    try{
          
            const divisions = await fetch(`${API}divisions`)
            const divisionsAPI = await divisions.json()
            await res.status(200).json(divisionsAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler;