import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FormElementsContainer from "./FormElementContainer"
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
 const SelectARegion = ({setTeamStatus, TeamStatus}) => {

    const [value, setvalue] = React.useState('');


    const handleChange = (event) => {   
        setvalue(event.target.value)
        isEmpty(event.target.value) ?  setTeamStatus(false) :setTeamStatus(event.target.value) 
    };
  
 
  return (
    <FormElementsContainer>
      <SportsCricketIcon />
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Do You Have a Team?</InputLabel>
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Do You Have a Team?"
          variant="standard"
          fullWidth
          onChange={handleChange}
        >
        <MenuItem value={true}>I have a Team.</MenuItem>
        <MenuItem value={false}>I would like to be assigned to a team</MenuItem>
        
            
        </Select>
      </FormControl>
      <HasFieldBeenFilledIn Value={TeamStatus} />
    </FormElementsContainer>
  );
}

export default SelectARegion;