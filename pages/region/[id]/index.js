import { API } from "../../../config/index"
import ReactMarkdown from 'react-markdown';
import fetch from 'node-fetch';
import { GoogleMap, Marker } from '@react-google-maps/api';

import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
import ContentContainer from "../../../components/Structure/ContentContainer"
import FullWidthContainer from "../../../components/Structure/FullWidthContainer"
import { H2 } from "../../../components/type";
import { useState } from "react";



const SingleRegion = (region)=>{

    console.log(region.region)
    const [useRegion, setuseRegion] = useState(region.region)
    const containerStyle = {
        width: '100%',
        height: '600px'
      };
      
      const center = {
        lat: parseFloat(useRegion.Lat),
        lng: parseFloat(useRegion.Long)
      };
    
      const svgMarker = {
        path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
        fillColor: "#ffffff",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 1.5,
        anchor: new google.maps.Point(15, 30),
      }


      
  const GroundMarker = {
    path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
    fillColor: "#FF9813",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  }

      const Markers = ()=>{
        let Markers = []
        useRegion.grounds.map((region,i)=>{
          Markers.push(<Marker 
                        icon={GroundMarker}
                       
                        position={{lat: parseFloat(region.Lat),lng: parseFloat(region.Long) }}
        />)
          
      })
  
      return Markers
      }

    return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                        HeaderCopy={useRegion.Name}  
                        SubCopy={`Region`} 
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                    
                    <ContentContainer>
                        <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                            <H2>{useRegion.Name}</H2>
                                { <ReactMarkdown>{useRegion.About}</ReactMarkdown> }
                        </div>
                    <div className={`${StructureStyles.Width30}`} >
                            <H2>Pitches</H2>
                        {
                            useRegion.grounds.map((grounds,i)=>{
                                    return(
                                        <li>
                                            {grounds.Name}
                                        </li>
                                    )
                            })
                        }
                    </div>
                    </ContentContainer>

                    <FullWidthContainer> 
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                        <Marker icon={svgMarker} position={{lat: parseFloat(useRegion.Lat),lng: parseFloat(useRegion.Long) }} />
                
                    {Markers()}
                  </GoogleMap>
              </FullWidthContainer>
        </div>
    )  
}
export default SingleRegion;


 

export const getServerSideProps = async(ctx)=>{
        const res = await fetch(`${API}regions/${ctx.params.id}`);
        const region = await res.json()
        return{ props:{ region:region }} 
}