import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { H2 } from "../components/type";
const about = ({terms})=>{

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`Terms and Conditions`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                          <H2>{terms.Name}</H2>
                          { <ReactMarkdown>{terms.Description}</ReactMarkdown> }
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
              </div>
                  
        ) 
}
export default about

export const getStaticProps = async (context) => {
    const termsRes = await fetch(`${API}terms`)
    const terms = await termsRes.json()
  return {  props: {terms} }
}