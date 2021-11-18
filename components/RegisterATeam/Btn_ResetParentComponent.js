import Button from '@mui/material/Button';
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
const Btn_ResetParentComponent = ({ResetParentComponent})=>{

    return(
        <Button variant="contained" className={ButtonStyle.Back} onClick={()=>{ResetParentComponent()}} >Back</Button>
    )
}
export default Btn_ResetParentComponent; 