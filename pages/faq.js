import { API } from "../config/index"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import FormElementGroup from "../components/FormElements/FormElementGroup"

import { H1, H2,H3,H4 } from "../components/type";
const about = ({faqs})=>{
    //console.log(faqs)
        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`FAQs`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70}`} >
                          <H1>FAQs</H1>
                            {
                                faqs.map((q,i)=>{
                                    return(
                                        <div key={i}>
                                            <H4>{q.Question}</H4>
                                            <FormElementGroup>
                                            <MarkdownContainer>{q.Answer}</MarkdownContainer> 
                                            </FormElementGroup>
                                        </div>
                                    )
                                })
                            }
                          { <MarkdownContainer>{about.Description}</MarkdownContainer> }
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
    const faqsRes = await fetch(`${API}faqs`)
    const faqs = await faqsRes.json()
  return {  props: {faqs} }
}