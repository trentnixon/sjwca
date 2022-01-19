import ListUtils from "../../styles/utils/lists.module.css";
import StructureStyles from "../../styles/Structure/Structure.module.css";


import { H2,H4,P, S } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";
import FormElementGroup from "../FormElements/FormElementGroup"
const RegistrationSubmitted  = ({SelectedTeam})=>{

    const hasConference = (ID)=>{
        return ID ==='61e39178e982364ef834ced7' ? 'Thunder':'Sixers'
    }

    const CopyColor = (ID)=>{
        return `Copy_${hasConference(ID)}`
    }

    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
        <div className={StructureStyles.Width70}>
                <H2>Team Submission Received</H2>
                <P>Thank you for your registration for the coming Sydney Junior Winter Cricket Season</P>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                <FormElementGroup>
                <H2>Team Information</H2>
                
                <ul className={`${ListUtils.TeamInfoList} ${ListUtils[hasConference(SelectedTeam.region.conference)]}`}>
                    <li className={`${ListUtils[CopyColor(SelectedTeam.region.conference)]}`} >Region :{hasConference(SelectedTeam.region.conference)} - {SelectedTeam.region.Name}</li>    
                    <li>Name : {SelectedTeam.Name}</li>
                    <li>Age Group : {SelectedTeam.age_group.Name}</li>
                    <li>Division : {SelectedTeam.division.Name}</li>
                </ul>
             
                </FormElementGroup>
                <FormElementGroup>
                <H2>Player Roster</H2>
                <div>
                <ol className={`${ListUtils.TeamRoster} ${ListUtils[hasConference(SelectedTeam.region.conference)]}`}>
                    {
                        SelectedTeam.team_season_rosters[0].Roster[0].players.map((p,i)=>{
                            return(
                                <li key={i}>
                                    {p.Name}
                                </li>
                            )
                        })
                    }
                </ol>
                </div>
                </FormElementGroup>

                Status {SelectedTeam.teamConfirmedByAdmin ? 'Team Accepted': 'Under Review'}
                
                <S>Should any of the Information above be incorrect, please contact us via FB to request your registration to be reopened</S>
                </div>
                <SupportersIcons /> 
        </div>
    )
}
export default RegistrationSubmitted; 