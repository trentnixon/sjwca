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
import { H1,H2,P,S } from "../type";

const SignupForm  = ({setisFormSent, setResponse})=>{
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
        setName(event.target.value)
        setisName(true)
    }

    const handleEmail = (e)=>{
        setisEmail(validateEmail(e.target.value))
        setEmail(e.target.value)
    }
    const handleAgree = (e)=>{ setAgreed(e.target.checked) }
    const handleNumber  = (e)=>{
        setisNumber(ValidateNumberOnly(e.target.value))
        setNumber(e.target.value)
    }

    useEffect(()=>{FormCheck() },[Position,Agreed,Name,Email,Number])

    return(
        <>
        <RegisterFormCopy />
        <FormElementGroup>
          
                <FormElementsContainer>
                    <TextField label={'Name'} variant="standard" placeholder={'Name'} fullWidth onBlur={handleName}/>
                </FormElementsContainer>

                <FormElementsContainer>
                    <InputLabel id="Select-Age-Group">I am the teams</InputLabel>
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
            <EmailError Valid={isEmail} Email={Email}/>
                    <TextField label={'Contact Email Address'} variant="standard" placeholder={'Contact Email Address'} fullWidth onBlur={handleEmail}/>
                </FormElementsContainer>

                <FormElementsContainer>
                    <NumberError Valid={isNumber} Number={Number}/>
                    <TextField label={'Contact Number'} type="number" variant="standard" placeholder={'Contact Number'} fullWidth onBlur={handleNumber}/>
                </FormElementsContainer>

                <S>I agree to let SJWCA contact me via the Supplied Email Address  <Switch onChange={handleAgree} label="Label"/></S>
               
                <Button variant="contained" onClick={()=>{handleSendForm()}} disabled={disable}>Register</Button>
        </FormElementGroup>
        </>
    )
}
export default SignupForm;




const RegisterFormCopy=()=>{

    return(
        <>
            <H2>Register your team for the 2022 SJWCA Season</H2>
            <P>The SJWCA Season begins in * of * 2022. Registrations for this coming season will close * of weeks before the seasons starts, and there are limited spaces in each region</P>                                
        </>
    )
}