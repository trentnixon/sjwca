import { H1, P ,P_WARNING} from "../type";
import FormElementGroup from "../FormElements/FormElementGroup"
const ChangeMyDetailsSubmitted = ({setProgress, Selected})=>{
    return(
        <>
        <H1>Changed Submitted</H1>
            <P>The following changes have been made for  {Selected.Name}</P>
            <FormElementGroup>
           <ul>
               <li><P>Region : {Selected.region.Name}</P>  </li>
               <li><P>Age Group:  {Selected.age_group.Name}</P></li>
               <li><P>Division:  {Selected.division.Name}</P></li>
               <li><P>Has a Team:  {Selected.hasDedicatedTeam ?' Yes, This player has a Team':'No, Player requires a Team'}</P></li>
           </ul>
           </FormElementGroup>
           <P>Thank you for updating.</P>
           <P>SJWCA HQ</P>
        </>
    )
}
export default ChangeMyDetailsSubmitted;