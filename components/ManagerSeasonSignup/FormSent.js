import FormElementGroup from "../FormElements/FormElementGroup"
import FormElementsContainer from "../FormElements/FormElementContainer"
import LoadingAnimation from "../Structure/PageLoader"
import { H2,P,P_ERROR } from "../type";

const FormSent  = ({response})=>{
    
    console.log(response.status);
    
    if(!response.status)
        return(<AwaitingResponse />)
    if(response.status != 200)
        return(<ErrorinForm />)
            return(<FormSuccess />) 
}
export default FormSent;




const FormSuccess = ()=>{

    return(
        <FormElementsContainer>
            <FormElementGroup>
                <H2>Registration of Interest Recieved</H2>
                <P>Thank you for your interest in this Seasons Competition</P>
                <P>We have sent a confirmation email and further instructions on Team Registration and Team Rosters to  the Email address provided.</P>
                <P>It is reccomended to read over the "Things you need to register a team" Documentation before completing this step.</P>
                  <P>If you have any questions or queries, please feel free to contact us via our Facebook page [here]</P>
                    [button to documentation]
            </FormElementGroup>
        </FormElementsContainer>
    )
}


const AwaitingResponse = ()=>{
    return(
        <FormElementsContainer>
            <FormElementGroup>
                    <H2> AWAITING RESPONSE FROM SJWCA.  </H2>
                    <LoadingAnimation />
            </FormElementGroup>
        </FormElementsContainer>
    )
}


const ErrorinForm = (response)=>{
    return(
        <FormElementsContainer>
            <FormElementGroup>
                    <P_ERROR> ERROR : THERE WAS A PROBLEM PROCESSING THE FROM</P_ERROR>
                    <P>There was an Unexpeced Error when processing your team. Please try again in a few mins</P>
                    <P>If this error persists, please contact SJWCA via our Facebook Page.</P>
            </FormElementGroup>
        </FormElementsContainer>
    )
}