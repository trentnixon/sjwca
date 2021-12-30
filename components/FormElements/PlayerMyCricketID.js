
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"

import {isEmpty} from "../../actions/handleUX";
import DialpadIcon from '@mui/icons-material/Dialpad';
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'

const PlayerName = (props)=>{
    const {setMyCricketID, MyCricketID} = props;
    const handleChange = (e)=>{ 
        isEmpty(e.target.value) ?  setMyCricketID(false)  : setMyCricketID(e.target.value)  
    }
    return (
        <FormElementsContainer> 
            <DialpadIcon />
                <TextField 
                        id="outlined-basic" 
                        label={`MyCricket ID`}
                        variant="standard" 
                        placeholder={`MyCricket ID`} 
                        fullWidth
                        onBlur={handleChange}
                />
                <HasFieldBeenFilledIn Value={MyCricketID} />
        </FormElementsContainer>
        ); 
}
export default PlayerName;