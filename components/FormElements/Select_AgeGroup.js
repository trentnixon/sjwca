import * as React from 'react';
import {useEffect,useState} from 'react'
// Actions
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useSWR from 'swr';
import { server, API } from "../../config/index"
import FormElementsContainer from "./FormElementContainer"
import { filter,findIndex } from 'lodash';
import { P } from '../type';


 const SelectAgeGroup = ({setAgeGroup, SelectedTeam, setUX, Region}) => {


  console.log(Region)
    const [SelectData, setSelectData] = useState([])
    const fetcher = (url) => fetch(url).then((res) => res.json()); 
    const { data, error } =  useSWR(`${API}region-to-agegroups`, fetcher)
    const [value, setvalue] = React.useState(SelectedTeam.age_group?.id);
  
    const [firstLoad, setFirstLoad] = useState(false)
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



    const CreateAgeGroupByRegion = ()=>{
      console.log(data)
      console.log(SelectedTeam.region?.id)
      let FindRegionAgeGroup = filter(data,(o)=>{
          console.log(o.region?.id, SelectedTeam.region?.id)
        return o.region?.id=== (Region ? Region : SelectedTeam.region?.id)}
        )
      let AgeGroups = []
      FindRegionAgeGroup.map((group,i)=>{
        if(findIndex(AgeGroups, function(o) { return o.id === group.age_group.id; }) === -1)
          AgeGroups.push(group.age_group)
      })
    
      console.log(AgeGroups)
      setSelectData(AgeGroups)
    }


    useEffect(()=>{ 
      if(data)
        CreateAgeGroupByRegion() 
    },[Region])

    useEffect(()=>{
     
      Region = (Region ? Region : SelectedTeam.region?.id)
      if(!firstLoad && data) {
        CreateAgeGroupByRegion()
        setFirstLoad(true)
      }
    },[data])


  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  if(SelectData.length === 0 ) return <div><P>Await Region</P></div>
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
                SelectData.map((item,i)=>{
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