import { server,API } from "../config/index"

//import Header from "../components/Header"
/*
git add .
git commit --allow-empty -am "Push New Version"
git push heroku HEAD:main

//--allow-empty
*/
import ComingSoonPage from "./ComingSoonPage";
import RegistrationLandingPage from "../components/RegistrationLandingPage/index"

export default function Home(props) {
  const {tagline,registrationPage,logosmall, switchboard} = props
  console.log(switchboard.isSiteLive)
  return (
    <div>
      {
        switchboard.isSiteLive ?<RegistrationLandingPage {... props}/>:<ComingSoonPage {... props}/>
      }
        
    </div>
  )
}
 


export const getStaticProps = async (context) => {

  //const registrationPageRes = await fetch(`${server}api/registrationPage`)
  const registrationPageRes = await fetch(`${API}registration-page`)
    const registrationPage = await registrationPageRes.json()
    
    //const taglineRes = await fetch(`${server}api/tagline`)
    const taglineRes = await fetch(`${API}tagline`)
    const tagline = await taglineRes.json()

    //const logoLargeRes = await fetch(`${server}api/logoLarge`)
    const logoLargeRes = await fetch(`${API}logo-large`)
    const logoLarge = await logoLargeRes.json() 

    const switchboardRes = await fetch(`${API}switchboard`)
    const switchboard = await switchboardRes.json()
    return {
      props: {tagline,registrationPage, logoLarge, switchboard},
    }
  }