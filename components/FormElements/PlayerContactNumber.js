
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormElementsContainer from "./FormElementContainer"
import {ValidateNumberOnly} from "../../actions/handleUX"
import {NumberError} from "./Errors"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const PlayerName = (props)=>{
    
    const {setPlayerContactNumber} = props;
    const [isNumber, setisNumber] = useState('')
    const [Number, setNumber] = useState('')
    
    const handleChange = (e)=>{
        setisNumber(ValidateNumberOnly(e.target.value))
        setNumber(e.target.value)
        if(ValidateNumberOnly(e.target.value)){
            setPlayerContactNumber(e.target.value)
        }
        
    }
    return (
        <>
        
            <FormElementsContainer>
            <ContactPhoneIcon />
            <TextField 
                    id="outlined-basic" 
                    label={`Contact Number`}
                    variant="standard" 
                   
                    fullWidth
                    onBlur={handleChange}
            />
        </FormElementsContainer>
        <NumberError Valid={isNumber} Number={Number}/>
        </> 
        );  
}
export default PlayerName;