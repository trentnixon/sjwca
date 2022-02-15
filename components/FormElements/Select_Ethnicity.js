import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useSWR from 'swr';
import { server, API } from "../../config/index"
//import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration";
import FormElementsContainer from "./FormElementContainer"
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
import {orderBy} from 'lodash'
 const SelectARegion = ({setEthnicity, Ethnicity}) => {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/ethnicities`, fetcher)
    const [value, setvalue] = React.useState('');


    const handleChange = (event) => { 
     
        setvalue(event.target.value)
        isEmpty(event.target.value) ?  setEthnicity(false) :setEthnicity(event.target.value) 
    }; 
  
  if (error) return <div>Ethnicity Values Failed to load</div>
  if (!data) return <div>Loading...</div>
 
  return (
    <FormElementsContainer>
      <SportsCricketIcon />
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Players Ethnicity</InputLabel>
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Players Ethnicity"
          variant="standard"
          fullWidth 
          onChange={handleChange}
        >
         
            {
                 orderBy(data,['Name']).map((item,i)=>{
                    return(
                        <MenuItem key={i} value={item.id}>{item.Name}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>
      <HasFieldBeenFilledIn Value={Ethnicity} />
    </FormElementsContainer>
  );
}

export default SelectARegion;