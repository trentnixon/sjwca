
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {isEmpty} from "../../actions/handleUX"
const PlayerName = (props)=>{
    const {setPlayerName} = props;
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
        </FormElementsContainer>
        ); 
}
export default PlayerName;