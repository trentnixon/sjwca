import * as React from 'react';

import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import FormElementsContainer from "./FormElementContainer"

export default function MaterialUIPickers({setPlayerDOB}) {

  const [value, setValue] = React.useState(new Date('2013-01-01'));

  const handleChange = (newValue) => {
    setValue(newValue);
    let D = new Date(newValue)
    console.log(D.getTime())
    setPlayerDOB(D.getTime())
  };

  return (
    <FormElementsContainer>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
     
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="dd/MM/yyyy"
          value={value}
          variant="standard"
          
          onChange={handleChange}
          renderInput={(params) => <TextField variant="standard" fullWidth {...params} />}
        />
    </LocalizationProvider>
    </FormElementsContainer>
  );
}
