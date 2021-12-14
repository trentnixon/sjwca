
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"

import {isEmpty} from "../../actions/handleUX";
import DialpadIcon from '@mui/icons-material/Dialpad';
const PlayerName = (props)=>{
    const {setMyCricketID} = props;
    const handleChange = (e)=>{ 
        isEmpty(e.target.value) ?  setMyCricketID(false)  : setMyCricketID(e.target.value)  
    }
    return (
        <FormElementsContainer> 
            <DialpadIcon />
                <TextField 
                        id="outlined-basic" 
                        label={`My Cricket ID`}
                        variant="standard" 
                        placeholder={`My Cricket ID`} 
                        fullWidth
                        onBlur={handleChange}
                />
        </FormElementsContainer>
        ); 
}
export default PlayerName;