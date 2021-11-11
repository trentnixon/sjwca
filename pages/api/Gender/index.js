import { API } from "../../../config/index"
import fetch from 'node-fetch';


const handler  = async(req, res) => {
    try{
          
            const genders = await fetch(`${API}genders`)
            const gendersAPI = await genders.json()
            await res.status(200).json(gendersAPI)
    
      }catch(error){
        console.log(error)
      }
}

export default  handler;