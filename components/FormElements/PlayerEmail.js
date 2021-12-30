
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormElementsContainer from "./FormElementContainer"
import {EmailError} from "./Errors"
import {validateEmail} from "../../actions/handleUX"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
const PlayerName = (props)=>{
    const {setPlayerEmail,PlayerEmail} = props;

    const [isEmail, setisEmail] = useState('')
    const [Email, setEmail] = useState('')
    
    const handleChange = (e)=>{
        setisEmail(validateEmail(e.target.value))
        setEmail(e.target.value)

        if(validateEmail(e.target.value)){ 
            isEmpty(e.target.value) ?  setPlayerEmail(false) :setPlayerEmail(e.target.value) 
          }else{
            setPlayerEmail(false)
          }
    }
    return (
        <>
           
                <FormElementsContainer>
                    <AlternateEmailIcon />
                        <TextField 
                                id="outlined-basic" 
                                label={`Contact Email`}
                                variant="standard" 
                                placeholder={`Contact Email`} 
                                fullWidth
                                onBlur={handleChange}
                        />
                        <HasFieldBeenFilledIn Value={PlayerEmail} />
                </FormElementsContainer>
                <EmailError Valid={isEmail} Email={Email}/>
        </>
        ); 
}
export default PlayerName;