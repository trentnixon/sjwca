import { API } from "../../../config/index"
import fetch from 'node-fetch';


const handler  = async(req, res) => {
    try{
          
            const AgeGroup = await fetch(`${API}age-groups`)
            const AgeGroupAPI = await AgeGroup.json()
            await res.status(200).json(AgeGroupAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler;