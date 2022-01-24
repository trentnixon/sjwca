import { API } from "../../../config/index"

//import MarkdownContainer from '../components/Structure/MarkdownContainer'

import fetch from 'node-fetch';
import { GoogleMap, Marker } from '@react-google-maps/api';

import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall"
import ContentContainer from "../../../components/Structure/ContentContainer"
import FullWidthContainer from "../../../components/Structure/FullWidthContainer"
import { H2 } from "../../../components/type";
import { useState } from "react";



const SingleRegion = (region)=>{

    console.log(region.region.region.conference)
    const [useRegion, setuseRegion] = useState(region.region)
    const containerStyle = {
        width: '100%',
        height: '600px'
      };
      
      const center = {
        lat: parseFloat(useRegion.Lat),
        lng: parseFloat(useRegion.Long)
      };
  

      //61e3916be982364ef834ced6
  const GroundMarker = {
    path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
    fillColor: region.region.region.conference === '61e3916be982364ef834ced6'?"#EA008A":"#96D701",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  }



    return(
        <div className={StructureStyles.Outer}> 
                <PageHeaderSmall 
                        HeaderCopy={useRegion.Name}  
                        SubCopy={`Ground`} 
                        BGIMG={`/images/BGIMG/RegoBG.jpg`}/>
                    <FullWidthContainer> 
                      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
                        <Marker icon={GroundMarker} position={{lat: parseFloat(useRegion.Lat),lng: parseFloat(useRegion.Long) }} />
                      </GoogleMap>
                  </FullWidthContainer>
        </div>
    )  
}
export default SingleRegion;

 

export const getServerSideProps = async(ctx)=>{
        const res = await fetch(`${API}grounds/${ctx.params.id}`);
        const region = await res.json()
        return{ props:{ region:region }} 
}

/* <div className={`${StructureStyles.Width70} `} >
                            <H2>{useRegion.Name}</H2>
                                { <MarkdownContainer>{useRegion.About}</MarkdownContainer> }
                        </div> */