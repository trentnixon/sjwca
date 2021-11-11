import FormElementGroup from "../FormElements/FormElementGroup"
import FormElementsContainer from "../FormElements/FormElementContainer"

import { H2,P,S } from "../type";

const FormSent  = ({response})=>{
    
    console.log(response.status);
    
    if(!response)
    return(
        <>
            AWAITING RESPONSE
        </>
    )
     if(response.status != 200)
     return(
         <>
            THERE WAS A PROBLEM WITH THE FROM
         </>
     )
    return(
        <FormElementsContainer>
            <FormElementGroup>
                    <H2>Registration Recieved</H2>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</P>
            </FormElementGroup>
        </FormElementsContainer>
    ) 
}
export default FormSent;