import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H2,P } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";

const SubmissionUnderReview  = ()=>{
    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
             
                <H2>Team Submission Currently Under Review</H2>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                <SupportersIcons />
        </div>
    )
}
export default SubmissionUnderReview;