import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import FormElementsContainer from "./FormElementContainer"
import useSWR from 'swr';
import { server, API } from "../../config/index"
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration";
import {find,orderBy,groupBy} from 'lodash'

 const SelectARegion = ({setRegion, setUX, SelectedTeam,setConference}) => {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/Regions`, fetcher)
    const [value, setvalue] = React.useState(SelectedTeam.region?.id);

    const handleChange = (event) => {
     

      console.log(groupBy(data,item => item.conference.Conference, ['asc']))
        setvalue(event.target.value);
      
        setRegion(event.target.value)
        const OBJ={
          _CALLBACK:setUX,
          _URI:`${API}teams/${SelectedTeam.id}`,
          _DATA:{region:[event.target.value]}
        }
 
          let Region = find(data, (o)=>{ return o.id === event.target.value })
          console.log(data)
          setConference(Region.conference)
        UpdateRegistrationFormHandler(OBJ)

    };
  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <FormElementsContainer>
      <FormControl fullWidth>
        <InputLabel id="Select-Age-Group">Select a Region</InputLabel>
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Select a Region"
          onChange={handleChange}
        >
            {
              orderBy(data, item => item.conference.id, ['asc']).map((item,i)=>{
                    return(
                        <MenuItem key={i} value={item.id} className={item.conference.conference}>{item.Name}</MenuItem>
                    )
                })
            }

           
        </Select>
      </FormControl>
    </FormElementsContainer>
  );
}

export default SelectARegion;