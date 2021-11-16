import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import { GoogleMap, Marker } from '@react-google-maps/api';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import FormElementContainer from "../components/FormElements/FormElementContainer"
import FormElementGroup from "../components/FormElements/FormElementGroup"
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
// Type
import { H2,H3,P} from "../components/type";

const RegisterIndividual = ({regions})=>{

  const containerStyle = {
    width: '100%',
    height: '600px'
  };
  
  const center = {
    lat: -33.768528,
    lng: 150.956856
  };

  console.log(regions)


    const Markers = ()=>{
      let Markers = []
      regions.map((region,i)=>{
        Markers.push(<Marker position={{lat: parseFloat(region.Lat),lng: parseFloat(region.Long) }}
      />)
        
    })

    return Markers
    }

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
                  <H2>Our Regions</H2>
                  <ul>
                    {
                      regions.map((region,i)=>{
                          return(
                            <li key={i}>
                              {region.Name}
                            </li>
                          )
                      })
                    }

                  </ul>
                </div>
              </ContentContainer> 
              <ContentContainer> 
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    {Markers()}
                  </GoogleMap>
              </ContentContainer> 
      </div>
          
) 
}

export default RegisterIndividual

export const getStaticProps = async (context) => {
  const regionsRes = await fetch(`${API}regions`)
  const regions = await regionsRes.json()
return {  props: {regions} }
}