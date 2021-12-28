const axios = require('axios');
import { API } from "../../config/index";





const EmailTemplate_NewPlayer = (URI)=>{
    
    axios({  url: URI, method: 'get',})
    .then(function (response) {console.log(response)})
    .catch(function (error) {console.log('EmailTemplate_NewPlayer ERROR', error); })
}


export const EMAIL_NewPlayerRegister =(OBJ,ID)=>{
       console.log(OBJ, OBJ._EmailTemplate,ID)
        if(OBJ._EmailTemplate === 'new')
            {
                EmailTemplate_NewPlayer(`${API}players/New/${ID}`)
            }
            else if(OBJ._EmailTemplate === 'assigned'){
                EmailTemplate_NewPlayer(`${API}players/Assign/${ID}`)
            }
   
}   