import { server,API } from "../config/index"
import ReactMarkdown from 'react-markdown';

const about = ({about})=>{

        return(
            <div>
                 <h1>{about.Name}</h1>

                 Season kicks off in #####
               
                Where would you like to play?
                 select a location. Site changes to reflect everything about that location.
                 pervious seasons, number of teams, grounds, games ages, standards. 
                 google map of locations

                 register a team for this location.

                 how can you help out?
                
                  
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