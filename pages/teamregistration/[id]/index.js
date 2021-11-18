import { useRouter } from 'next/router';
import { API } from "../../../config/index"
import fetch from 'node-fetch';


import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
import ContentContainer from "../../../components/Structure/ContentContainer"
// Form
import TeamRegistrationForm from "../../../components/RegisterATeam/TeamRegistrationForm"
import { useEffect, useState } from 'react';
import { H2 } from '../../../components/type';


const TeamRegistration = ({Team, Completed})=>{
    // In your component body
  const router = useRouter()

 
  const [SelectedTeam, setSelectedTeam] = useState(Team)
  // call this method whenever you want to refresh server-side props
  const refreshData = () => {
        console.log("router.replace has been called")
        router.replace(router.asPath);
        setSelectedTeam([])
  }


  useEffect(()=>{ setSelectedTeam(Team) },[Team])
 
    
    if(SelectedTeam.length === 0){
      return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                  HeaderCopy={`Team Registration`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/> 
                    <ContentContainer>
                     <H2>Gathering Details</H2>
                    </ContentContainer> 
        </div>
      )
    }
    return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                  HeaderCopy={`Team Registration`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/> 
                    <ContentContainer>
                      <TeamRegistrationForm SelectedTeam={SelectedTeam} refreshData={refreshData} />
                    </ContentContainer> 
        </div>
    )  
}
export default TeamRegistration;


 

export const getServerSideProps = async(ctx)=>{
        const res = await fetch(`${API}teams/${ctx.params.id}`);
        const Team = await res.json()
        return{ props:{ Team:Team, Completed: false }} 
}