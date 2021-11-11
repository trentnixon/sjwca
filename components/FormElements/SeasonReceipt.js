
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
const Season_receipts = ({setReceiptNum})=>{
    const handleChange = (e)=>{setReceiptNum(e.target.value)}
  return (
         <FormElementsContainer>
            <TextField 
                id="outlined-basic" 
                label='Receipt Number'
                variant="standard"
                fullWidth
                onBlur={handleChange}
            />
            </FormElementsContainer>);
}
export default Season_receipts;