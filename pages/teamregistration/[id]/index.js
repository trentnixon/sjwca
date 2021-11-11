import { useRouter } from 'next/router';
import { API } from "../../../config/index"
import fetch from 'node-fetch';


import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
  
// Form
import TeamRegistrationForm from "../../../components/RegisterATeam/TeamRegistrationForm"


const TeamRegistration = (Team)=>{
    // In your component body
  const router = useRouter()

  // call this method whenever you want to refresh server-side props
  const refreshData = () => {
        console.log("router.replace has been called")
        router.replace(router.asPath);
  }

    const SelectedTeam = Team.Team;
    console.log(SelectedTeam)
    return(
        <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`Team Registration`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                <TeamRegistrationForm SelectedTeam={SelectedTeam} refreshData={refreshData}/>
        </div>
    )  
}
export default TeamRegistration;


 

export const getServerSideProps = async(ctx)=>{
        const res = await fetch(`${API}teams/${ctx.params.id}`);
        const Team = await res.json()
        return{ props:{ Team }}
}