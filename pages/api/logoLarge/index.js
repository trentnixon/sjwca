import { API } from "../../../config/index"
import fetch from 'node-fetch';

const handler  = async(req, res) => {
    try{
            const fetchReturn = await fetch(`${API}logo-large`)
            const fetchReturnJson = await fetchReturn.json()
            await res.status(200).json(fetchReturnJson)
           
      }catch(error){
        console.log(error)
      }
}

export default  handler;