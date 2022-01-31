import RegionStyles from "../../../styles/Regions.module.css";

import { API } from "../../../config/index"
import fetch from 'node-fetch';

import { GoogleMap, Marker } from '@react-google-maps/api';
import StructureStyles from "../../../styles/Structure/Structure.module.css";
import ListsStyles from "../../../styles/utils/lists.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
import ContentContainer from "../../../components/Structure/ContentContainer"
import FormElementGroup from "../../../components/FormElements/FormElementGroup"
import { H1, H2,P , H3} from "../../../components/type";
import { useState } from "react";

const Singleteams = (teams)=>{

    const [ThisTeam, setThisTeam] = useState(teams.teams)
 
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
      const center = {
        lat: parseFloat(ThisTeam.region.Lat),
        lng: parseFloat(ThisTeam.region.Long)
      };

      const GroundMarker = {
        path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
        fillColor: "#1B81CB",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 5,
        anchor: new google.maps.Point(15, 15),
      }

    console.log(ThisTeam)
    return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                        HeaderCopy={ThisTeam.Name}  
                        SubCopy={ThisTeam.region.Name}
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                    
                    <ContentContainer>
                        <div className={`${StructureStyles.Width70}`} >
                            <H1>{ThisTeam.Name}</H1>
                            <H2> Team Roster</H2>
                            <FormElementGroup>
                            <ul className={ListsStyles.ListOfTeams}>
                            {
                                ThisTeam.team_season_rosters[0].Roster[0].players.map((Player,i)=>{
                                        return(
                                            <li>
                                                <P>{Player.Name}</P>
                                                <P>{Player.MyCricketID}</P>
                                            </li> 
                                        )
                                })
                            }
                              </ul>
                              </FormElementGroup>
                            <H3>Playing in the {ThisTeam.region.Name} Region</H3>
                            
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                        
                                <Marker 
                                    icon={GroundMarker}
                                    position={{
                                        lat: parseFloat(ThisTeam.region.Lat),
                                        lng: parseFloat(ThisTeam.region.Long)
                                    }}
                                />
                            </GoogleMap>
                           
                            
                        </div>
                        <div className={`${StructureStyles.Width30}`} > 
                               
                            <ul className={RegionStyles.List_col}>
                                <li><em>Manager :  {ThisTeam.Manager}</em></li>
                                <li>Region:  {ThisTeam.region.Name}</li>
                                <li>Division :  {ThisTeam.division.Name}</li>
                                <li>Age Group :  {ThisTeam.age_group.Name}</li>
                            </ul>
                        </div>
                    </ContentContainer>

                    
        </div>
    )  
}
export default Singleteams;


 

export const getServerSideProps = async(ctx)=>{
        const res = await fetch(`${API}teams/${ctx.params.id}`);
        const teams = await res.json()
        return{ props:{ teams:teams }} 
}