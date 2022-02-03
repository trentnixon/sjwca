import * as React from 'react';

import TextField from '@mui/material/TextField';
//import DateAdapter from '@mui/lab/AdapterDayjs';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import FormElementsContainer from "./FormElementContainer"
import DateRangeIcon from '@mui/icons-material/DateRange';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'

const FindMinYear = ()=>{
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var c = new Date(year - 16, month, day);
  return c
}

export default function MaterialUIPickers({setPlayerDOB, PlayerDOB}) {

  const [value, setValue] = React.useState(FindMinYear());

  const handleChange = (newValue) => {
    let D = new Date(newValue)
    let min = FindMinYear()
    if(parseInt(D.getTime()) < parseInt(min.getTime())){
      setPlayerDOB(false)
    }
    else{
      isEmpty(parseInt(D.getTime())) ?  setPlayerDOB(false) :setPlayerDOB(D.getTime())
    }
    setValue(newValue);
    
  }; 

  return (
    <FormElementsContainer>
      <DateRangeIcon /> 
    <LocalizationProvider dateAdapter={AdapterDateFns}> 
     
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="dd/MM/yyyy"
          minDate={FindMinYear()}
          value={value}
          variant="standard"
          onChange={handleChange}
          renderInput={(params) => <TextField variant="standard" fullWidth {...params} />}
        />
    </LocalizationProvider>
    <HasFieldBeenFilledIn Value={PlayerDOB} />
    </FormElementsContainer>
  );
}