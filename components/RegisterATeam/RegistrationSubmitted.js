import ListUtils from "../../styles/utils/lists.module.css";
import StructureStyles from "../../styles/Structure/Structure.module.css";


import { H2,H4,P, S } from "../type";
import SupportersIcons from "../Structure/SupportersIcons";
import FormElementGroup from "../FormElements/FormElementGroup"
const RegistrationSubmitted  = ({SelectedTeam, Region})=>{

    const hasConference = (ID)=>{
        return ID ==='61e39178e982364ef834ced7' ? 'Thunder':'Sixers'
    }

    const CopyColor = (ID)=>{
        return `Copy_${hasConference(ID)}` 
    }

    console.log(SelectedTeam,Region)
    return(
        <div className={`${StructureStyles.COl2} ${StructureStyles.ContentWidth}  ${StructureStyles.Column}`}>
        <div className={StructureStyles.Width70}>
                <H2>Team Submission Received</H2>
                <P>Thank you for your registration for the coming Sydney Junior Winter Cricket Season</P>
                <P>The SJWCA Team will be reviewing your Submission and be in contact shortly.</P>
                </div>
                <SupportersIcons /> 
        </div>
    )
}
export default RegistrationSubmitted; 

/*
 <FormElementGroup>
                <H2>Team Information</H2>
                
                <ul className={`${ListUtils.TeamInfoList} ${ListUtils[hasConference(Region.conference)]}`}>
                    <li className={`${ListUtils[CopyColor(Region.conference)]}`} >Region :{hasConference(Region.conference)} - {Region.Name}</li>    
                    <li>Name : {SelectedTeam.Name}</li>
                    <li>Age Group : {SelectedTeam.age_group.Name}</li>
                    <li>Division : {SelectedTeam.division.Name}</li>
                </ul>
             
                </FormElementGroup>
                <FormElementGroup>
                <H2>Player Roster</H2>
                <div>
                <ol className={`${ListUtils.TeamRoster} ${ListUtils[hasConference(Region.conference)]}`}>
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
               
*/