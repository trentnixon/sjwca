import { API } from "../config/index"
import {useState} from 'react'
import { GoogleMap, Marker,Polygon  } from '@react-google-maps/api';
// Styles
import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";
import RegionStyles from "../styles/Regions.module.css";
import MarkdownContainer from '../components/Structure/MarkdownContainer'
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import {GoToRegionBtn} from "../components/buttons"
import SupportersIcons from "../components/Structure/SupportersIcons"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
// Type
import { H1, H2,H4,P} from "../components/type";
import Button from '@mui/material/Button';

const RegisterIndividual = ({conferences,newseason})=>{

  console.log(conferences)
  const [Conference, setConference] = useState(true)
  const SetClass=(ARR)=>{
    console.log(ARR)
    return ARR
  }
  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall  
          HeaderCopy={`Regions`}  
          SubCopy={`Where can we be found`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
              <div className={`${StructureStyles.Width70}`} >
              <H1>Conferences</H1>
              <P>This season we will be continuing to split the competition into the Sixers and Thunder Conferences. In a big change to seasons past, we will be having set grades playing out of particular grounds. This should lead to teams only playing out of 1-2 venues and hopefully played closer to home. With limited fields available and registrations increasing we’ll be taking registrations on a first come first served basis. If the region and grade you’re hoping for your team to play in is full, you will need to consider the other remaining options available at the time of registration.</P>
                  <Button variant="contained" onClick={()=>{setConference(!Conference)}} 
                      className={Conference ? Buttonsstyles['Thunder']:Buttonsstyles['Sixers']}>
                      { Conference ?'View Thunder  CONFERENCE':'View Sixers CONFERENCE'}
                  </Button>
                  {
                    Conference  ? <DisplayConference conferences={conferences[0]}  CLASS='Sixers' /> : 
                                  <DisplayConference conferences={conferences[1]} CLASS='Thunder'/>
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




export default RegisterIndividual

export const getStaticProps = async (context) => {
  const conferencesRes = await fetch(`${API}conferences`)
  const conferences = await conferencesRes.json()
  const newseasonRes = await fetch(`${API}newseason`)
  const newseason = await newseasonRes.json()

return {  props: {conferences,newseason} }
}


const DisplayConference = ({conferences, CLASS})=>{
  console.log(conferences.Conference)

  const center = {
    lat: parseFloat(-33.83284347201585),
    lng: parseFloat(151.03396309803895)
  };

  const containerStyle = {
    width: '100%',
    height: '350px'
  };
  const options = { disableDefaultUI:true}
  const svgMarker = {
    path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
    fillColor: conferences.Conference === 'Sixers'?"#EA008A":"#96D701",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2.5,
    anchor: new google.maps.Point(10, 10),
  }

  const Polyoptions = {
    fillColor: conferences.Conference === 'Sixers'?"#EA008A":"#96D701",
    fillOpacity: .5,
    strokeColor: conferences.Conference === 'Sixers'?"#EA008A":"#96D701",
    strokeOpacity: .5,
    strokeWeight: 1,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
  }
  const removeMiddle = (a, b, c) =>{
    var cross = (a.lat - b.lat) * (c.lng - b.lng) - (a.lng - b.lng) * (c.lat - b.lat);
    var dot = (a.lat - b.lat) * (c.lat - b.lat) + (a.lng - b.lng) * (c.lng - b.lng);
    return cross < 0 || cross == 0 && dot <= 0;
}
  const  Polypaths = () =>{ 
    let points=[];
    
    conferences.regions.map((point,i)=>{ points.push({ lat:parseFloat(point.Lat), lng:parseFloat(point.Long)}) })
    points.sort(function (a, b) {  return a.lat != b.lat ? a.lat - b.lat : a.lng - b.lng; });

    var n = points.length;
    var hull = [];

    for (var i = 0; i < 2 * n; i++) {
        var j = i < n ? i : 2 * n - 1 - i;
        while (hull.length >= 2 && removeMiddle(hull[hull.length - 2], hull[hull.length - 1], points[j]))
            hull.pop();
        hull.push(points[j]);
    }

    hull.pop();
    return hull;
}


  return(
    <div className={CLASS}>
    <H2>{conferences.Conference}</H2>
    
    <MarkdownContainer>{conferences.About}</MarkdownContainer>
    <GoogleMap mapContainerStyle={containerStyle} options={options} center={center} zoom={9}>
     {
      conferences.regions.map((ThisMarker,i)=>{
        
        return <Marker key={i}  icon={svgMarker} position={{lat: parseFloat(ThisMarker.Lat),lng: parseFloat(ThisMarker.Long) }} />
      })
     }
      <Polygon
      paths={Polypaths()}
      options={Polyoptions}
    />
    </GoogleMap>
    <br /><br /><br /> 
    <ConfrenceRegions regions={conferences.regions} Conference={conferences.Conference} />

  </div>
  )
}



const ConfrenceRegions = ({regions,Conference, newseason})=>{
  return(
    <div className={RegionStyles.CardContainer}>
      {
        regions.map((region,i)=>{
          return(<RegionCard key={i} region={region} Conference={Conference}/>)
        })
      }
      </div>
  )
}





const RegionCard = ({region,Conference})=>{

 
  //console.log('Conference', Conference)

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

  //console.log(region, center)

  const CreateSummary = (ABOUT)=>{
    return ABOUT?.substring(0,100);
  }

  return(
    <div className={RegionStyles.RegionContainer} >
      <H4>{region.Name}  </H4>  
      <P><MarkdownContainer>{region.Blurb}</MarkdownContainer>  </P>  
          <GoToRegionBtn href={`/region/${region.id}`} Name={region.Name} Conference={Conference} />
    </div>
  )
} 

/* <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
<Marker icon={svgMarker} position={{lat: parseFloat(region.Lat),lng: parseFloat(region.Long) }} />
</GoogleMap> */  
// <P>{`${CreateSummary(region.About)} ...`} </P>
//className={RegionStyles.RegionCard}