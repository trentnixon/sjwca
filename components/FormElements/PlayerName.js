
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"

const PlayerName = (props)=>{
    const {setPlayerName} = props;


    const handleChange = (e)=>{
        setPlayerName(e.target.value)
      
    }
    return (
        <FormElementsContainer>
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