
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
const PlayerName = (props)=>{
    const {setPlayerName, PlayerName} = props;
    const handleChange = (e)=>{ 
        isEmpty(e.target.value) ?  setPlayerName(false)  : setPlayerName(e.target.value)  
    }
    
    return (
        <FormElementsContainer> 
            <DriveFileRenameOutlineIcon />
                <TextField 
                        id="outlined-basic" 
                        label={`Player Name`}
                        variant="standard" 
                        placeholder={`Player Name`} 
                        fullWidth
                        onBlur={handleChange}
                />
                <HasFieldBeenFilledIn Value={PlayerName} />
        </FormElementsContainer>
        ); 
}
export default PlayerName;