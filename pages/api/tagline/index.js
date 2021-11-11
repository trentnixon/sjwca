import { API } from "../../../config/index"
import fetch from 'node-fetch';


const handler  = async(req, res) => {
    try{
          
            const tagline = await fetch(`${API}tagline`)
            const TaglineAPI = await tagline.json()
            await res.status(200).json(TaglineAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler;