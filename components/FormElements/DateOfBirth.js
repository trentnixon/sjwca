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

export default function MaterialUIPickers({setPlayerDOB, PlayerDOB}) {

  const [value, setValue] = React.useState(new Date('2000-01-01'));

  const handleChange = (newValue) => {
    let D = new Date(newValue)
    
    setValue(newValue);

    isEmpty(parseInt(D.getTime())) ?  setPlayerDOB(false) :setPlayerDOB(D.getTime())
  };
 
  return (
    <FormElementsContainer>
      <DateRangeIcon /> 
    <LocalizationProvider dateAdapter={AdapterDateFns}>
     
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="dd/MM/yyyy"
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