import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"


import { H2 } from "../components/type";
const about = ({about})=>{

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`My Cricket`}  
                  SubCopy={`How to Register a Player`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                          <H2>{about.Name}</H2>
                          { <ReactMarkdown>{about.Description}</ReactMarkdown> }
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
                      <SupportersIcons />
              </div>
                  
        ) 
}

export default about



export const getStaticProps = async (context) => {
    const aboutRes = await fetch(`${API}my-cricket-registration`)
    const about = await aboutRes.json()
  return {  props: {about} }
}