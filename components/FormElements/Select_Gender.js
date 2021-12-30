import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormElementsContainer from "./FormElementContainer"
import useSWR from 'swr';
import { server, API } from "../../config/index"
import WcIcon from '@mui/icons-material/Wc';
import {isEmpty} from "../../actions/handleUX"
import HasFieldBeenFilledIn from './hasFieldBeenFilledIn'
 const SelectGender = ({setGender,Gender}) => {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/Gender`, fetcher)
    const [value, setvalue] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
        setvalue(event.target.value)
        isEmpty(event.target.value) ?  setGender(false) :setGender(event.target.value) 

    };
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <FormElementsContainer>
      <WcIcon />
      <FormControl fullWidth>
        
        <InputLabel id="Select-Age-Group">Gender</InputLabel>
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Gender"
          variant="standard"
          fullWidth
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
      <HasFieldBeenFilledIn Value={Gender} />
    </FormElementsContainer>
  );
}

export default SelectGender;