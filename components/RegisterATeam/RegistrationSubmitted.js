import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H2,P } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";

const RegistrationSubmitted  = ()=>{

    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
           
                <H2>Team Submission Received</H2>
                <P>Thank you for your registration for the coming Sydney Junior Winter Cricket Season </P>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                <SupportersIcons />
        </div>
    )
}
export default RegistrationSubmitted; 