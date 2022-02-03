import { API } from "../config/index"
import { useEffect, useState } from "react";
import MarkdownContainer from '../components/Structure/MarkdownContainer'

import StructureStyles from "../styles/Structure/Structure.module.css";
import ListsStyles from "../styles/utils/lists.module.css";

// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"
import FormElementGroup from "../components/FormElements/FormElementGroup"

import { H1,H2,H3, H4, P } from "../components/type";
import {ViewSelectedTeamBtn} from "../components/buttons"
import {filter, groupBy, orderBy} from 'lodash'


const sjwcarules = ({conferences, teams})=>{
        
        const [SelectedConference, SetSelectedConference]= useState(conferences[0])
        const [Conferenceteams, setConferenceteams] = useState(null)
        

        useEffect(()=>{
          //console.log(teams)
            let  FilterTeams = filter(teams, function(o) { return o.region?.conference === SelectedConference.id && o.includeTeamInSeason; })
            FilterTeams = orderBy(FilterTeams, (o)=>{ return o.region.id})
            setConferenceteams(groupBy(FilterTeams,(o)=>{return o.region.id}))
        },[])

        if(!Conferenceteams)
         return(<div>Loading</div>)
        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={SelectedConference.Conference}  
                  SubCopy={`The 2022 Roster`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H1>{SelectedConference.Conference}</H1>
                          { <MarkdownContainer>{SelectedConference.About}</MarkdownContainer> }

                        <H2>The 2022 Roster</H2>
                          {Object.keys(Conferenceteams).map((Division, i) => {
                            return (
                                <div key={i}>
                                  <H3 style={{color:'#FF9813'}}>{Conferenceteams[Division][0].region.Name}</H3>
                                  <AgeGroupBracket Division={Conferenceteams[Division]}/>
                                </div>
                              );
                          })}
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
                      <SupportersIcons />
              </div>
                  
        ) 
}

export default sjwcarules


  const AgeGroupBracket = ({Division})=>{
     
      const [OrderRegion, setOrderRegion] = useState(null)
      
      useEffect(()=>{
       let RegionTeams = orderBy(Division, (o)=>{ return o.division.id})
       setOrderRegion(groupBy(RegionTeams,(o)=>{return o.age_group.id}))
    },[])

    if(!OrderRegion)
    return(<div>Loading</div>)
    return(
        <div>
        {
            Object.keys(OrderRegion).map((Team, i) => {
            return(
                    <div key={i}>
                        <H2 style={{justifyContent:'center', display:'flex'}}>{OrderRegion[Team][0].age_group.Name}</H2>
                        <ListTeams TeamList={OrderRegion[Team]}/>
                    </div>
                )
            })
        }
        </div>
    )
  }


  const ListTeams = ({TeamList})=>{
    return(
      <FormElementGroup>
        <ul className={ListsStyles.ListOfTeams}>
            {
                TeamList.map((Team,i)=>{
                    return(
                        <li key={i}>
                            <P>{Team.Name}</P>
                            <ViewSelectedTeamBtn href={`/team/${Team.id}`} Conference={`Sixers`} />
                        </li>
                    )
                })
            }
        </ul>
        </FormElementGroup>
    )
  }

  export const getStaticProps = async (context) => {
    const conferencesRes = await fetch(`${API}conferences`)
    const conferences = await conferencesRes.json()
    const teamsRes = await fetch(`${API}teams`)
    const teams = await teamsRes.json()
  return {  props: {conferences, teams} }
  }