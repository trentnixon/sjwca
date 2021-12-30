import * as React from 'react';

// Actions
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useSWR from 'swr';
import { server, API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer";
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
 const SelectAgeGroup = ({setAgeGroup,AgeGroup}) => {


 
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/AgeGroups`, fetcher)
    const [value, setvalue] = React.useState();

    const handleChange = (event) => {
        setvalue(event.target.value);
        setAgeGroup(event.target.value)
    };
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <FormElementsContainer>
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Preferred Age Group</InputLabel> 
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Preferred Age Group"
          onChange={handleChange}
        >
            {
                data.map((item,i)=>{
                    return(
                        <MenuItem key={i} value={item.id}>{item.Name}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>
      <HasFieldBeenFilledIn Value={AgeGroup} />
    </FormElementsContainer>
  );
}

export default SelectAgeGroup;