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


const sjwcarules = ({conferences, teams,regions,ageGroup,division})=>{
        
        const [SelectedConference, SetSelectedConference]= useState(conferences[0])
        //const [Conferenceteams, setConferenceteams] = useState(null)
        const [ConfrenceRegions, setConfrenceRegions] = useState([])
 
  


        const TeamsByDivision = (TEAMS)=>{
       
          let  FilterTeams = filter(TEAMS, function(o) { return o.includeTeamInSeason === true; })        
            FilterTeams = orderBy(FilterTeams, (o)=>{ return o.division})
          FilterTeams =  groupBy(FilterTeams,(o)=>{return o.division})
        
          console.log(FilterTeams)
          return FilterTeams
        }

        useEffect(()=>{
          let  Filterregions = filter(regions, function(o) { return o.conference.id === SelectedConference.id})
          console.log(Filterregions)
          setConfrenceRegions(Filterregions)
        },[])


        const DivisionLabel = (ID)=>{
          console.log(filter(division,(o)=>{ return o.id ===ID }))
          return filter(division,(o)=>{ return o.id ===ID })
        }
      
        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={SelectedConference.Conference}  
                  SubCopy={`The 2023 Roster`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H1>{SelectedConference.Conference}</H1>
                          { <MarkdownContainer>{SelectedConference.About}</MarkdownContainer> }

                        <H2>The 2023 Roster</H2>

                        {
                          ConfrenceRegions.map((region,i)=>{
                            //console.log(region.teams)
                            const BYDIVISION = TeamsByDivision(region.teams)
                            return(
                              <div key={i}>
                                   <H3 style={{color:'#FF9813'}}>{region.Name}</H3>
                                  
                          {Object.keys(BYDIVISION).map((Division, i) => {
                            return (
                                <div key={i}>
                                  <H3 style={{color:'#FF9813'}}>{DivisionLabel(Division)[0].Name}</H3>
                                  <AgeGroupBracket Division={BYDIVISION[Division]} ageGroup={ageGroup}/>
                                </div>
                              );
                          })}
                              </div>
                            )
                          })
                        }
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


  const AgeGroupBracket = ({Division,ageGroup})=>{
     
      const [OrderRegion, setOrderRegion] = useState(null)
      console.log(ageGroup)
      useEffect(()=>{
       let RegionTeams = orderBy(Division, (o)=>{ return o.age_group})
       setOrderRegion(groupBy(RegionTeams,(o)=>{return o.age_group}))
    },[])

    const AgeGroupLabel = (ID)=>{
      console.log(filter(ageGroup,(o)=>{ return o.id ===ID }))
      return filter(ageGroup,(o)=>{ return o.id ===ID })
    }

    if(!OrderRegion)
    return(<div>Loading</div>)
    return(
        <div>
        {
            Object.keys(OrderRegion).map((Team, i) => {
              console.log(OrderRegion[Team][0].age_group)
            return(
                    <div key={i}>
                        <H2 style={{justifyContent:'center', display:'flex'}}>{AgeGroupLabel(OrderRegion[Team][0].age_group)[0].Name}</H2>
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
                            <P style={{margin:0}}>{Team.Name}</P> 
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

    const regionRes = await fetch(`${API}regions`)
    const regions = await regionRes.json()

    const ageGroups = await fetch(`${API}age-groups`)
    const ageGroup = await ageGroups.json()

    const divisions = await fetch(`${API}divisions`)
    const division = await divisions.json()

  return {  props: {conferences, teams,regions,ageGroup,division} }
  }