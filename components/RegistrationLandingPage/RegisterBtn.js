import Button from '@mui/material/Button';

import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import Link from 'next/link'


export const RegisterButton = () => {
    return (<Button variant="contained" className={Buttonsstyles.Next}> <Link href={`/registerTeam`}> Register a team today </Link></Button>)
  }

  export default RegisterButton;