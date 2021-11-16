import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
// Type
import { H2 } from "../components/type";

const about = ({about})=>{

  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={`2022 Season`}  
          SubCopy={`Sydney Junior Winter Cricket Association`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
                <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>{about.Name}</H2>
                  { <ReactMarkdown>{about.Description}</ReactMarkdown> }
                </div>
                <div className={`${StructureStyles.Width30}`} >
                hello
                </div>
              </ContentContainer> 
      </div>
          
) 
}

export default about



export const getStaticProps = async (context) => {

/*   const aboutRes = await fetch(`${server}api/about`)
  const about = await aboutRes.json() */

  const aboutRes = await fetch(`${API}about`)
  const about = await aboutRes.json()

  return {
    props: {about},
  }
}
