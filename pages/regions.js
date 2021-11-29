import { API } from "../config/index"

import { GoogleMap, Marker } from '@react-google-maps/api';
import StructureStyles from "../styles/Structure/Structure.module.css";
import RegionStyles from "../styles/Regions.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import {GoToRegionBtn} from "../components/buttons"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Type
import { H2,H4,P} from "../components/type";





const RegisterIndividual = ({regions})=>{


  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={`Regions`}  
          SubCopy={`Where can we be found`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>Regions</H2>
                  <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
                  
                </div>
                <div className={`${StructureStyles.Width30}`} >
                 
                  
                </div>
                </ContentContainer>
                <ContentContainer>  
                <div className={`${StructureStyles.Width100} ${StructureStyles.ReactMarkdown}`} >
                <div className={RegionStyles.CardContainer}>
                    {
                      regions.map((region,i)=>{
                          return(
                            <RegionCard key={i} region={region}/>
                            
                          )
                      })
                    }

                  </div>
                </div>
              </ContentContainer> 
              <SupportersIcons />


      </div>
          
) 
}

export default RegisterIndividual

export const getStaticProps = async (context) => {
  const regionsRes = await fetch(`${API}regions`)
  const regions = await regionsRes.json()
return {  props: {regions} }
}




const RegionCard = ({region})=>{

 
  const center = {
    lat: parseFloat(region.Lat),
    lng: parseFloat(region.Long)
  };
  const containerStyle = {
    width: '100%',
    height: '250px'
  };
  

  const svgMarker = {
    path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
    fillColor: "#FF9813",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.3,
    anchor: new google.maps.Point(0, 0),
  }

  console.log(region, center)

  const CreateSummary = (ABOUT)=>{
    return ABOUT.substring(0,100);
  }

  return(
    <div className={RegionStyles.RegionCard}>
      <H4>{region.Name}  </H4>  
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
                    <Marker icon={svgMarker} position={{lat: parseFloat(region.Lat),lng: parseFloat(region.Long) }} />
                  </GoogleMap>  
                  
                  <P>{`${CreateSummary(region.About)} ...`} </P>
                       
                  <GoToRegionBtn href={`/region/${region.id}`}/>
                  
               
       
    </div>
  )
}