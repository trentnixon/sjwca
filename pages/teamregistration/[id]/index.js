import { useRouter } from 'next/router';
import { API } from "../../../config/index"
import fetch from 'node-fetch';


import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
import ContentContainer from "../../../components/Structure/ContentContainer"
// Form
import TeamRegistrationForm from "../../../components/RegisterATeam/TeamRegistrationForm"
import { useState } from 'react';


const TeamRegistration = ({Team, Completed})=>{
    // In your component body
  const router = useRouter()

  const [isNextFetching, setisNextFetching] = useState(Completed)

  // call this method whenever you want to refresh server-side props
  const refreshData = () => {
        console.log("router.replace has been called")
        router.replace(router.asPath);
        setisNextFetching(true)
  }

    const SelectedTeam = Team;
    Completed != isNextFetching ? setisNextFetching(Completed)  : false;
    console.log('isNextFetching', isNextFetching)

    return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                  HeaderCopy={`Team Registration`}  
                  SubCopy={`SJWCA 2022`} 
                    BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                    <ContentContainer>
                      <TeamRegistrationForm SelectedTeam={SelectedTeam} refreshData={refreshData} isNextFetching={isNextFetching}/>
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