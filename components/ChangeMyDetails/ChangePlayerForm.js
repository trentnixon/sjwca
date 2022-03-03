import { H1, H3,H4_ERROR } from "../type";
import Button from '@mui/material/Button';
import ChangeMyDetailsProcessing from './Processing'
import FormElementGroup from "../FormElements/FormElementGroup"
import FormElementsContainer from "../FormElements/FormElementContainer"

import ChangePlayerMyCricketID from "../FormElements/ChangePlayerMyCricketID"
import ChangeRegion from "../FormElements/Select_Region_Individual"
import ChangeDivision from "../FormElements/Select_Division_Individual"
import ChangeAge from "../FormElements/Select_AgeGroup_Individual"
import HasDedicatedTeam from "../FormElements/Select_HasDedicatedTeam_Individual"
import { useState,useEffect } from "react";
import {useUpdatePlayersPreferences} from "../../actions/CustomHooks/useUpdatePlayerPreferences"

const ChangeMyDetailsForm = ({setProgress, Selected, setSelected})=>{
    const [Processing, setProcessing] = useState(false)
    const [NewID,setNewID] = useState(Selected.MyCricketID)
    const [Region,setRegion] = useState(null)
    const [Division,setDivision] = useState(null)
    const [AgeGroup,setAgeGroup] = useState(null)
    const [DedicatedTeam,setDedicatedTeam] = useState(null)
    const [Data, AuthUpdatePlayer] = useUpdatePlayersPreferences()
    

    const handleClick = ()=>{
        console.log(Selected)
        console.log("SUBMIT", Region, Division, AgeGroup)
        setProcessing(true)
        AuthUpdatePlayer({
            DATA:{
                MyCricketID:NewID,
                region: Region=== null ?[Selected.region.id]:[Region],
                division:Division === null ?[Selected.division.id]:[Division],
                age_group:AgeGroup=== null ?[Selected.age_group.id]:[AgeGroup],
                hasDedicatedTeam:DedicatedTeam,
            },
            
            ID:Selected.id
        })
    }   

    useEffect(()=>{
        console.log(Data)
        if(Data.error === true){
            setSelected(Data);
            setProgress(4)
        }
        else if(Data.length != 0 )  {
            setSelected(Data);
            setProcessing(false)
            setProgress(3)
        } 
            
    },[Data])

    if(Processing)
    return <ChangeMyDetailsProcessing />
    return(
        <>
        <H1>Edit my Details</H1>
        <H4_ERROR>Details for {Selected.Name}</H4_ERROR>
        <FormElementGroup>
            
            <ChangePlayerMyCricketID NewID={NewID} setNewID={setNewID}/>
            <ChangeRegion setRegion={setRegion} Region={Region}/>
            <ChangeDivision Division={Division} setDivision={setDivision}/>
            <ChangeAge AgeGroup={AgeGroup} setAgeGroup={setAgeGroup}/>
            <HasDedicatedTeam DedicatedTeam={DedicatedTeam} setDedicatedTeam={setDedicatedTeam}/>
            <Button variant="contained" onClick={()=>{handleClick()}}>Submit</Button>
            </FormElementGroup>
        </>
    )
}
export default ChangeMyDetailsForm;