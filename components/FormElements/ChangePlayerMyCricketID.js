
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import {track_ga_event} from "../../actions/GA"
import {isEmpty} from "../../actions/handleUX";
import DialpadIcon from '@mui/icons-material/Dialpad';

import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'


const PlayerName = ({NewID, setNewID})=>{
  
 
    const handleChange = (e)=>{ 
        isEmpty(e.target.value) ?  false : setNewID(e.target.value) 
      
    }

    return (
        <FormElementsContainer> 
            <DialpadIcon />
                <TextField 
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                
                        id="outlined-basic" 
                        label={`Change MyCricket ID ${NewID}`}
                        variant="standard" 
                        placeholder={`Change MyCricket ID ${NewID}`} 
                        type='number'
                        fullWidth
                        onBlur={handleChange}
                        className='input'
                        
                />
                <HasFieldBeenFilledIn Value={NewID} />
        </FormElementsContainer>
        ); 
}
export default PlayerName;