import { API } from "../config/index"

//import MarkdownContainer from '../components/Structure/MarkdownContainer'

import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Type
import { H2 } from "../components/type";

const RegisterIndividual = ()=>{

        
  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={`Grounds`}  
          SubCopy={`The grounds we play.`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70}`} >
                  <H2>Grounds</H2>
                  
                </div>
                <div className={`${StructureStyles.Width30}`} >
                ...
                </div>
              </ContentContainer> 
              <SupportersIcons />
      </div>
          
) 
}

export default RegisterIndividual