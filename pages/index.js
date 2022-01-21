import { server,API } from "../config/index"

//import Header from "../components/Header"

import RegistrationLandingPage from "../components/RegistrationLandingPage/index"
/*
git add .
git commit -am "Register Live"
git push heroku main:main

*/
export default function Home(props) {
  //const {tagline,registrationPage,logosmall} = props
  return (
    <div>
        <RegistrationLandingPage {... props}/>
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

    return {
      props: {tagline,registrationPage, logoLarge},
    }
  }