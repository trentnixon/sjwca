import Link from 'next/link'
import SideNav from "../../styles/registrationPage/SideNav.module.css";
// Type
import { H2,H4 } from "../../components/type";
// Icons
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import GavelIcon from '@mui/icons-material/Gavel';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

const SupportingSideNav = ()=>{
    return(
        <div className={SideNav.SideNav}>
             <H4>Further Information</H4>
                    <ul className={SideNav.ul}>
                    {/* <Link href={`/howToRegister`}><li>How to Register<SportsCricketIcon /></li></Link>
                    <Link href={`/registerIndividual`}><li> Register a Player <PersonIcon /></li></Link>
                    <Link href={`/registerTeam`}><li> Register a Team <GroupIcon /></li></Link> */}
                    <Link href={`/regions`}><li> Where we play <LocationOnIcon /></li></Link>
                    <Link href={`/rules`}><li>SJWCA Rules <GavelIcon /></li></Link>
                    <a target="_blank" href={`https://www.facebook.com/SydneyJuniorWinterCricket/`}><li>Ask the Community <FacebookIcon /></li></a> 
                    </ul>
            </div> 
    )
}

export default SupportingSideNav;