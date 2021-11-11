import { server ,API } from "../config/index"
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

 /*  const aboutRes = await fetch(`${server}api/about`) */
 const aboutRes = await fetch(`${API}about`)
  const about = await aboutRes.json()

/*   const fetchReturn = await fetch(`${API}about`)
            //const fetchReturnJson = await fetchReturn.json()
            await res.status(200).json(fetchReturn) */
  return { 
    props: {about},
  }
}