import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
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
                <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>Grounds</H2>
                  
                </div>
                <div className={`${StructureStyles.Width30}`} >
                ...
                </div>
              </ContentContainer> 
      </div>
          
) 
}

export default RegisterIndividual