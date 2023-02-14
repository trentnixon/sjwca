import * as React from 'react';
import {useEffect,useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormElementsContainer from "./FormElementContainer"
import useSWR from 'swr';
import { server, API } from "../../config/index"
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import { filter,findIndex } from 'lodash';
import { P } from '../type';

 const SelectDivision = ({setDivision,SelectedTeam, setUX, Region, AgeGroup}) => {
  const [SelectData, setSelectData] = useState([])
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${API}region-to-agegroups`, fetcher)
    const [value, setvalue] = React.useState(SelectedTeam.division?.id);
    const [firstLoad, setFirstLoad] = useState(false)

    const handleChange = (event) => {
        setvalue(event.target.value);
        setDivision(event.target.value)
        const OBJ={
          _CALLBACK:setUX,
          _URI:`${API}teams/${SelectedTeam.id}`,
          _DATA:{division:[event.target.value]}
        } 
        UpdateRegistrationFormHandler(OBJ)
    };
  

    
    const CreateAgeGroupByRegion = ()=>{
      
      let FindRegionAgeGroup = filter(data,(o)=>{return o.region?.id=== (Region ? Region : SelectedTeam.region?.id)})
     
     
      let FindDivision = filter(FindRegionAgeGroup,(o)=>{return o.age_group.id=== (AgeGroup ? AgeGroup : SelectedTeam.age_group?.id)})
 
      let DivisionGroups = []
      FindDivision.map((group,i)=>{
        if(findIndex(DivisionGroups, function(o) { return o.id === group.division.id; }) === -1)
        DivisionGroups.push(group.division)
      })
    
      setSelectData( DivisionGroups)
    }


    useEffect(()=>{ CreateAgeGroupByRegion()  },[Region,AgeGroup])

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
    
        <InputLabel id="Select-Age-Group">Prefered Division </InputLabel>
        <Select
          labelId="Select-Age-Group"
          id="demo-simple-select"
          value={value}
          label="Prefered Division"
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

export default SelectDivision;