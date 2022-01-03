import Button from '@mui/material/Button';

import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import Link from 'next/link'


export const RegisterATeamButton = () => {
    return (<Button variant="contained" className={Buttonsstyles.Next}> <Link href={`/registerTeam`}>team Registration </Link></Button>)
  }

export const RegisterIndividualButton = () => {
    return (<Button variant="contained" className={Buttonsstyles.Success}> <Link href={`/registerIndividual`}> Player Registration </Link></Button>)
  }