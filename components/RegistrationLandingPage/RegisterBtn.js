import Button from '@mui/material/Button';

import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import Link from 'next/link'
import {track_ga_event} from "../../actions/GA"

export const RegisterATeamButton = () => {
  
  const GA = (i) => {
    track_ga_event({
      action: "Btn_HomePage_Registration",
      params : {  Btn_Pressed: 'Team Registration'}
    })
  }
    return (<Button variant="contained" onClick={()=>{GA()}} className={Buttonsstyles.Next}> <Link href={`/registerTeam`}>team Registration </Link></Button>)
  }

export const RegisterIndividualButton = () => {
  
  const GA = (i) => {
    track_ga_event({
      action: "Btn_HomePage_Registration",
      params : {  Btn_Pressed: 'Player Registration'}
    })
  }
    return (<Button variant="contained"   onClick={()=>{GA()}} className={Buttonsstyles.Success}> <Link href={`/registerIndividual`}> Player Registration </Link></Button>)
  }