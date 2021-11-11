import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H1,P } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";
const SubmissionUnderReview  = ()=>{
    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
                <H1>Team Submition Currently Under Review</H1>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                <SupportersIcons />
        </div>
    )
}
export default SubmissionUnderReview;