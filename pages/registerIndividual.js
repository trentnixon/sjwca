import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Type
import { H2 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
const RegisterIndividual = ({individual})=>{

        
  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={individual.Name}  
          SubCopy={`Sydney Junior Winter Cricket Association`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>{individual.Name}</H2>
                  { <ReactMarkdown>{individual.Description}</ReactMarkdown> }
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
  const individualRes = await fetch(`${API}register-individual`)
  const individual = await individualRes.json()
return {  props: {individual} }
}