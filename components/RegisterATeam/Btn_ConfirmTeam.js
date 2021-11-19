
import Button from '@mui/material/Button';
import { API } from "../../config/index"
import {UpdateRegistrationFormHandler} from "../../actions/Registration/handleTeamRegistration"
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
import { useEffect, useState } from 'react';
import { S } from '../type';
const Btn_ConfirmTeam = ({SelectedTeam, setUX, sethasUserSumbitted})=>{
    
    const MinPlayerNum = 9;

    const [disabled,setDisabled] = useState(true)
    const ConfirmTeamDetails = ()=>{

            const OBJ={
              _CALLBACK:setUX,
              _URI:`${API}teams/${SelectedTeam.id}`,
              _DATA:{RegistrationOpen:false}
            }
    
          UpdateRegistrationFormHandler(OBJ)
         
          sethasUserSumbitted(true)

    }

    useEffect(()=>{
      !SelectedTeam.TeamSeason[0]?.TeamRoster[0].players.length ? setDisabled(true) :
      SelectedTeam.TeamSeason[0]?.TeamRoster[0].players.length>=MinPlayerNum ?  setDisabled(false) :   setDisabled(true)
   
        console.log(SelectedTeam)
    },[SelectedTeam])

    const PlayersLeft = ()=>{
      let Roster = SelectedTeam.TeamSeason[0]?.TeamRoster[0].players.length 
      if(!Roster){ Roster = 0}
      return `${(MinPlayerNum-Roster)}  Players left`
    }

    return(
      <>
        <div className={ButtonStyle.BtnRight}>
        <Button variant="contained"  onClick={()=>{ConfirmTeamDetails()}} disabled={disabled}>
            { disabled ? PlayersLeft(): ' Submit Team for Review'}
        </Button>
        <S style={{color:'#b5b5b5', fontWeight:100}}>SJWCA Requires a Min of {MinPlayerNum} Players per team</S>
        </div>
        
      </>
    )
}
export default Btn_ConfirmTeam;