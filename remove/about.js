import { server } from "../config/index"
import ReactMarkdown from 'react-markdown';

const about = ({about})=>{

        return(
            <div>
                 <h1>{about.Name}</h1>
                    { <ReactMarkdown>{about.Description}</ReactMarkdown> }
            </div>
        )
}

export default about



export const getStaticProps = async (context) => {

  const aboutRes = await fetch(`${server}api/about`)
  const about = await aboutRes.json()

  return {
    props: {about},
  }
}