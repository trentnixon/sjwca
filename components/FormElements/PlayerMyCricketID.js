
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import {track_ga_event} from "../../actions/GA"
import {isEmpty} from "../../actions/handleUX";
import DialpadIcon from '@mui/icons-material/Dialpad';

import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'


const PlayerName = (props)=>{
    const {setMyCricketID, MyCricketID} = props;
 
    const handleChange = (e)=>{ 
        isEmpty(e.target.value) ?  setMyCricketID(false)  : setMyCricketID(e.target.value) 
        track_ga_event({
            action: "Form_Entry_MyCricketID",
            params : {  MyCricketID: 'true'}
          }) 
    }


    return (
        <FormElementsContainer> 
            <DialpadIcon />
                <TextField 
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                
                        id="outlined-basic" 
                        label={`PlayHQ ID`}
                        variant="standard" 
                        placeholder={`PlayHQ ID`} 
                        type='number'
                        fullWidth
                        onBlur={handleChange}
                        className='input'
                        
                />
                <HasFieldBeenFilledIn Value={MyCricketID} />
        </FormElementsContainer>
        ); 
}
export default PlayerName;