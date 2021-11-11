import Button from '@mui/material/Button';
const Btn_ResetParentComponent = ({ResetParentComponent})=>{

    return(
        <Button variant="contained" onClick={()=>{ResetParentComponent()}} >Back</Button>
    )
}
export default Btn_ResetParentComponent;