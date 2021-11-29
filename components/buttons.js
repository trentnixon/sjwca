import ButtonStyles from "../styles/Structure/Buttons.module.css"
import Button from '@mui/material/Button';
import Link from 'next/link'

// Icons
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';


export const ClearButton = () => {
  return (<Button variant="contained">Clear Button</Button>)
}


export const GoToRegionBtn = ({href}) => {
  return (
          <Button variant="contained" className={ButtonStyles.Next}>
                <Link href={href}>
                 <a> Visit Region <EditLocationAltIcon /></a></Link>
          </Button>
          )
}