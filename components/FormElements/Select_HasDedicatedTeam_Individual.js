import * as React from 'react';

// Actions
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FormElementsContainer from "./FormElementContainer";
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
 const SelectHasTeam= ({setDedicatedTeam,DedicatedTeam}) => {
    const [value, setvalue] = React.useState();

    const handleChange = (event) => {
        setvalue(event.target.value);
        setDedicatedTeam(event.target.value)
    };
  
const BoolData = [{
    Name:'Yes i have a Team.',
    id:true
},{
    Name:'I would like to be assigned a team if one is available',
    id:false
}]

  return (
    <FormElementsContainer>
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Does the player have a team?</InputLabel> 
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Does the player have a team?"
          onChange={handleChange}
        >
            {
                BoolData.map((item,i)=>{
                    return(
                        <MenuItem key={i} value={item.id}>{item.Name}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>
      <HasFieldBeenFilledIn Value={DedicatedTeam} />
    </FormElementsContainer>
  );
}

export default SelectHasTeam;