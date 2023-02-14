import SideNav from "../../styles/registrationPage/SideNav.module.css";
import { H3,H4,P } from "../type";
import Link from 'next/link'
// Icons
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import GavelIcon from '@mui/icons-material/Gavel';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const RegistrationSideNav = ()=>{
    return(
          <div className={SideNav.SideNav}>
              <H4>SJWCA Help List</H4>
           
                <ul className={SideNav.ul}>
                   
                        <Link href={`/regions`}><li> Where we play <LocationOnIcon /></li></Link>
                        <Link href={`/howToRegister`}><li>PlayHQ Registration <SportsCricketIcon /></li></Link>
                        <Link href={`/rules`}><li>SJWCA Rules <GavelIcon /></li></Link>
                        <a target="_blank" href={`https://www.facebook.com/SydneyJuniorWinterCricket/`}><li>Ask the Community <FacebookIcon /></li></a> 
                </ul>
            </div> 
    )
}

export default RegistrationSideNav;