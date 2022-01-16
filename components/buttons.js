import ButtonStyles from "../styles/Structure/Buttons.module.css"
import Button from '@mui/material/Button';
import Link from 'next/link'

// Icons
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';


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