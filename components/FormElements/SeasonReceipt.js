
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import NoteIcon from '@mui/icons-material/Note';

const Season_receipts = ({setReceiptNum})=>{
    const handleChange = (e)=>{setReceiptNum(e.target.value)}
  return (
         <FormElementsContainer>
             <NoteIcon />
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