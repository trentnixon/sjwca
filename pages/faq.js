import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import FormElementGroup from "../components/FormElements/FormElementGroup"

import { H2,H3,H4 } from "../components/type";
const about = ({faqs})=>{
    console.log(faqs)
        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`FAQs`}  
                  SubCopy={`Sydney Junior Winter Cricket Association`} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />

                    <ContentContainer> 
                        <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                          <H2>FAQs</H2>
                            {
                                faqs.map((q,i)=>{
                                    return(
                                        <>
                                            <H4>{q.Question}</H4>
                                            <FormElementGroup>
                                            <ReactMarkdown>{q.Answer}</ReactMarkdown> 
                                            </FormElementGroup>
                                        </>
                                    )
                                })
                            }
                          { <ReactMarkdown>{about.Description}</ReactMarkdown> }
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