import * as React from 'react';

// Actions
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useSWR from 'swr';
import { server, API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"
 const SelectAgeGroup = ({setAgeGroup, SelectedTeam, setUX}) => {


 
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/AgeGroups`, fetcher)
    const [value, setvalue] = React.useState(SelectedTeam.age_group?.id);

    const handleChange = (event) => {
        setvalue(event.target.value);
        setAgeGroup(event.target.value)
        const OBJ={
          _CALLBACK:setUX,
          _URI:`${API}teams/${SelectedTeam.id}`,
          _DATA:{age_group:[event.target.value]}
        }

      UpdateRegistrationFormHandler(OBJ)
    };
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <FormElementsContainer>
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Select an Age Group</InputLabel> 
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Select an Age Group"
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
    </FormElementsContainer>
  );
}

export default SelectAgeGroup;