import { API } from "../config/index"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import { H1 } from "../components/type";
const about = ({about})=>{

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`ABOUT`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H1>{about.Name}</H1>
                          <MarkdownContainer>{about.Description}</MarkdownContainer>
                         
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
    const aboutRes = await fetch(`${API}about`)
    const about = await aboutRes.json()
  return {  props: {about} }
}