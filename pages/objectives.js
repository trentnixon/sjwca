import { API } from "../config/index"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { H2 } from "../components/type";
const objects = ({objects})=>{

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`Objectives`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H2>{objects.Name}</H2>
                          { <MarkdownContainer>{objects.Description}</MarkdownContainer> }
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
                      <SupportersIcons />
              </div>
                  
        ) 
}

export default objects



export const getStaticProps = async (context) => {
    const objectsRes = await fetch(`${API}objects`)
    const objects = await objectsRes.json()
  return {  props: {objects} }
}