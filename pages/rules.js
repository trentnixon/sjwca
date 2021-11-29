import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"

import { H2 } from "../components/type";
const sjwcarules = ({sjwcarules})=>{

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={sjwcarules.Name}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                          <H2>{sjwcarules.Name}</H2>
                          { <ReactMarkdown>{sjwcarules.Description}</ReactMarkdown> }
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
                      <SupportersIcons />
              </div>
                  
        ) 
}

export default sjwcarules



export const getStaticProps = async (context) => {
    const sjwcarulesRes = await fetch(`${API}sjwcarules`)
    const sjwcarules = await sjwcarulesRes.json()
  return {  props: {sjwcarules} }
}