import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H1,P } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";

const RegistrationSubmitted  = ()=>{

    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
                <H1>Team Submition Recieved</H1>
                <P>Thank you for your registration for the coming Sydney Junior Winter Cricket Season </P>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                <SupportersIcons />
        </div>
    )
}
export default RegistrationSubmitted;