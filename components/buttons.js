import ButtonStyles from "../styles/Structure/Buttons.module.css"
import Button from '@mui/material/Button';
import Link from 'next/link'

// Icons
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const ClearButton = () => {
  return (<Button variant="contained">Clear Button</Button>)
}


export const GoToRegionBtn = ({href, Name,Conference}) => {
  return (
          <Button variant="contained" className={ButtonStyles[Conference]}>
                <Link href={href}>
                 <a> Visit {Name} <EditLocationAltIcon /></a></Link>
          </Button>
          )
}

export const RegIndividualTerms = ({SetState, state, Title, isDisabled=false}) => {
  return (<Button variant="contained" onClick={()=>{SetState(state)}} className={ButtonStyles.Next} disabled={isDisabled}>{Title}</Button>)
}


export const AskOnFB = () => {
  return (
          <Button variant="contained" className={ButtonStyles.Sixers}>
                <Link href={`https://www.facebook.com/SydneyJuniorWinterCricket/`}>
                 <a> Ask On Facebook  <HelpOutlineIcon /></a></Link>
          </Button>
          )
}

export const TeamRegistrationBtn = () => {
  return (
          <Button variant="contained" className={ButtonStyles.Thunder}>
                <Link target='_blank' href={`/pdf/SJWCA How to Register a player.pdf`}>
                 <a> 2022 Team Registration  <SportsCricketIcon /></a></Link>
          </Button>
          )
}

export const ViewSelectedTeamBtn = ({href, Name,Conference})=>{
  return(
    <Button variant="contained" className={ButtonStyles[Conference]}>
    <Link href={href}>
     <a>Roster</a></Link>
</Button>
  )
  
}