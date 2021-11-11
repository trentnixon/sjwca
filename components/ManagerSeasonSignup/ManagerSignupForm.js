import { useState } from "react";

// Components
import SignupForm from "./SignupForm"
import FormSent from "./FormSent"
const ManagerSignupForm = ()=>{

    const [ isFormSent, setisFormSent] = useState(false)
    const [response, setResponse] = useState(false)
   
    if(!isFormSent)
        return(<SignupForm setisFormSent={setisFormSent} setResponse={setResponse} />)
    return( <FormSent setisFormSent={setisFormSent} response={response}/>)
}
export default ManagerSignupForm;