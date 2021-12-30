import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
const hasFieldBeenFilledIn = ({Value})=>{
    console.log(Value)
    return Value ? <CheckCircleIcon color='success'/> : <PriorityHighIcon color='primary'/>
}
export default hasFieldBeenFilledIn;