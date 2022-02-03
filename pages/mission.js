import { API } from "../config/index"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { H2 } from "../components/type";
const misson = ({misson,values,vision})=>{

    //console.log(misson)
        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`Our Mission`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H2>{misson.Title}</H2>
                          { <MarkdownContainer>{misson.Description}</MarkdownContainer> }
                          
                          <H2>{vision.Name}</H2>
                          { <MarkdownContainer>{vision.Description}</MarkdownContainer> }

                          <H2>{values.Name}</H2>
                          { <MarkdownContainer>{values.Description}</MarkdownContainer> }
                        </div>
                        <div className={`${StructureStyles.Width30}`} >
                          <SupportingSideNav />
                        </div>
                      </ContentContainer> 
                      <SupportersIcons />
              </div>
                  
        ) 
}

export default misson



export const getStaticProps = async (context) => {
    const missonRes = await fetch(`${API}misson`)
    const valuesRes = await fetch(`${API}values`)
    const visionRes = await fetch(`${API}vision`)
    
    const misson = await missonRes.json()
    const values = await valuesRes.json()
    const vision = await visionRes.json()
  return {  props: {misson,values,vision} } 
}