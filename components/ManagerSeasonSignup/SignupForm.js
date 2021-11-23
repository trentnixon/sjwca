import { useEffect, useState } from "react";
// Actions
import {validateEmail,ValidateNumberOnly} from "../../actions/handleUX"
import {handleCreateNewTeam} from "../../actions/Registration/handleTeamRegistration";


import FormElementGroup from "../FormElements/FormElementGroup"
import FormElementsContainer from "../FormElements/FormElementContainer"
// FOrm Elements
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import {EmailError, NumberError} from "../FormElements/Errors"

import { API } from "../../config/index"
import { H1,H2,H4,P,S } from "../type";

// Icons
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import {isEmpty} from "../../actions/handleUX" 
const SignupForm  = ({setisFormSent, setResponse, CurrentSeasonID})=>{
    const label = { inputProps: { 'aria-label': 'Agree to the terms and conditions' } };

    const data=['Manager', 'Coach']

    const [disable, setDisable] = useState(true)
    const [Position, setPosition] = useState('')
    const [Name, setName] = useState(false)
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('') 

    const [Agreed, setAgreed] = useState(false)
    const [isPosition, setisPosition] = useState(false)
    const [isName, setisName] = useState(false)
    const [isEmail, setisEmail] = useState(false)
    const [isNumber, setisNumber] = useState(false)

   
    const handleSendForm = ()=>{

        const OBJ={
            _CALLBACK:setResponse,
            _URI:`${API}teams/`,
            _PROCESS:true,
            _Position:Position,
            _DATA:{
                Manager:Name,
                Manager_Email:Email,
                Manager_Phone:Number,
                Current_Season_ID:CurrentSeasonID
            }
          }
 
          handleCreateNewTeam(OBJ)
        setisFormSent(true)
    }

    const FormCheck = ()=>{
        if( isPosition && Agreed && isName && isEmail && isNumber ){
            setDisable(false) 
        }else{
            setDisable(true)
        }   
    }

    const handleSelectPosition = (event)=>{ 
        setisPosition(true)
        setPosition(event.target.value)
    }
    const handleName = (event)=>{ 
      
        isEmpty(event.target.value) ?  setName(false) :setName(event.target.value)
        isEmpty(event.target.value) ?  setisName(false) :setisName(true)
        
    }

    const handleEmail = (event)=>{
     /*    //setisEmail(validateEmail(event.target.value))
        //setEmail(e.target.value) */

        isEmpty(event.target.value) ?  setisEmail(false) :setisEmail(validateEmail(event.target.value))
        isEmpty(event.target.value) ?  setEmail(false) :setEmail(event.target.value)
    }
    const handleAgree = (e)=>{ setAgreed(e.target.checked) }
    
    
    const handleNumber  = (event)=>{
  

        isEmpty(event.target.value) ?  setisNumber(false) :setisNumber(ValidateNumberOnly(event.target.value))
        isEmpty(event.target.value) ?  setNumber(false) :setNumber(event.target.value)
    }

    useEffect(()=>{FormCheck() },[Position,Agreed,Name,Email,Number])

    return(
        <>
        <RegisterFormCopy />
        <FormElementGroup>
          
                <FormElementsContainer>
                    <DriveFileRenameOutlineIcon />
                    <TextField label={'Name'} variant="standard" placeholder={'Name'} fullWidth onBlur={handleName} 
                    autocomplete={false}
                    /> 
                </FormElementsContainer>
        
                <FormElementsContainer>
                 <PersonIcon />
                        <Select value={Position} label="I am the teams" variant="standard"fullWidth onChange={handleSelectPosition}>
                            {
                                data.map((item,i)=>{
                                    return(
                                        <MenuItem key={i} value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                        </Select>
            </FormElementsContainer>
            

            <FormElementsContainer>
                    <AlternateEmailIcon />
                    <TextField autocomplete={false} label={'Contact Email Address'} variant="standard" placeholder={'Contact Email Address'} fullWidth onBlur={handleEmail}/>
                </FormElementsContainer>
                <EmailError Valid={isEmail} Email={Email}/>

                
                <FormElementsContainer>
                    <ContactPhoneIcon />
                    <TextField autocomplete={false} label={'Contact Number'} type="number" variant="standard" placeholder={'Contact Number'} fullWidth onBlur={handleNumber}/>
                </FormElementsContainer>
                <NumberError Valid={isNumber} Number={Number}/>

                <S style={{color:'#969595'}}>I agree to let SJWCA contact me via the Supplied Email Address  <Switch onChange={handleAgree} label="Label"/></S>
               
                <Button variant="contained" onClick={()=>{handleSendForm()}} disabled={disable}>Register</Button>
        </FormElementGroup>
        </>
    )
}
export default SignupForm;




const RegisterFormCopy=()=>{

    return(
        <>
            <H2>Register a team</H2>
            <P>The SJWCA Season begins in * of * 2022. Registrations for this coming season will close * of weeks before the seasons starts, and there are limited spaces in each region</P>                                
        </>
    )
}