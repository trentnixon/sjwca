
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import NoteIcon from '@mui/icons-material/Note';
import {isEmpty} from "../../actions/handleUX"
const Season_receipts = ({setReceiptNum})=>{
    const handleChange = (e)=>{
        isEmpty(e.target.value) ?  setReceiptNum(false) :setReceiptNum(e.target.value) 
    }
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