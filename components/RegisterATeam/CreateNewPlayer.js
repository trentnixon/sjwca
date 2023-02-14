import { useState,useEffect } from "react";
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
//Actions
import {AddNewPlayer, CreateTeamRosterforStrapi} from "../../actions/Registration/handlePlayerRoster"

// Build Form
import FormElementGroup from "../FormElements/FormElementGroup"
import Create_Player_Name from "../FormElements/PlayerName";
import Create_PlayerEmail from "../FormElements/PlayerEmail";
import Create_PlayerContactNumber from "../FormElements/PlayerContactNumber";
import Select_Ethnicity from "../FormElements/Select_Ethnicity"
import Select_Seasons from "../FormElements/Select_Seasons"
import Select_Gender from "../FormElements/Select_Gender"
import DateOfBirth from "../FormElements/DateOfBirth"
import Select_AgeGroup_Individual from "../FormElements/Select_AgeGroup_Individual"
import Select_Division_Individual from "../FormElements/Select_Division_Individual"
import Select_Region_Individual from "../FormElements/Select_Region_Individual"

import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import Button from '@mui/material/Button';



import {H1,H2,H3,H4,P} from "../type";

const CreateNewPlayer = (props)=>{
    const {SelectedTeam, RefreshUIonAddUpdate, MyCricketID, CurrentSeasonID,BacktoIDInput,RequestnewDatafromStrapi,PlayerRoster} = props;
    const [disabled, setDisabled] = useState(true)
    const [PlayerName, setPlayerName] = useState(false)
   
    const [Ethnicity, setEthnicity] = useState(false)
    const [Season, setSeason] = useState(false)
    const [Gender, setGender] = useState(false)
    const [PlayerEmail, setPlayerEmail] = useState(false)
    const [PlayerContactNumber, setPlayerContactNumber] = useState(false)
    const [PlayerDOB, setPlayerDOB] = useState(false)
    const [Region, setRegion] = useState(false)
    const [AgeGroup, setAgeGroup] = useState(false)
    const [Division, setDivision] = useState(false)
 
 

    const handleClick = ()=>{

        let FirstReciept =[{season:[Season],team:[SelectedTeam.id] }]
        //console.log(PlayerDOB)
         RefreshUIonAddUpdate(true)
        const OBJ={
                  
            _PLAYERNAME:PlayerName,
            _SEASON:Season,  
            _MyCricketID:MyCricketID,
            _TEAMID:SelectedTeam.id,
            _CURRENTSEASONID:CurrentSeasonID,
            _GENDER:Gender,
            _EMAIL:PlayerEmail,
            _CONTACTNUMBER:PlayerContactNumber,
            _DOB : PlayerDOB,
            _Ethnicity:Ethnicity,
            _TEAMROSTER:CreateTeamRosterforStrapi(PlayerRoster),
            _ROSTERID:PlayerRoster.id,
            _CALLBACK:RequestnewDatafromStrapi,
            _TeamStatus:true, // true, player has a team
            _EmailTemplate:'assigned',
           _PLAYER_SEASON_RECEIPTS:FirstReciept,
           _AGE:SelectedTeam.age_group?.id?SelectedTeam.age_group.id:AgeGroup,
           _DIVISION:SelectedTeam.division?.id?SelectedTeam.division.id:Division,
           _REGION: SelectedTeam.region?.id ?SelectedTeam.region.id:Region,
          
        }
            //console.log(OBJ) 
            AddNewPlayer(OBJ) 
           
    }

    const FieldCheck = ()=>{
        //console.log('FieldCheck')
        let ARR=[Season,PlayerName,MyCricketID,Gender,PlayerEmail,Ethnicity,PlayerContactNumber,PlayerDOB]
        //console.log('FieldCheck',ARR.indexOf(false) )
        if(ARR.indexOf(false) === -1)
            return true 
                return false
    }

    useEffect(()=>{
        FieldCheck() ? setDisabled(false) :setDisabled(true)
    })

        return(
            <div>
            <FormElementGroup>
                <H4>About Player</H4>
                <H4>PlayHQ ID : {MyCricketID}</H4>
                <Create_Player_Name setPlayerName={setPlayerName} PlayerName={PlayerName}/>
                <Create_PlayerEmail setPlayerEmail={setPlayerEmail} PlayerEmail={PlayerEmail}/>
                <Create_PlayerContactNumber setPlayerContactNumber={setPlayerContactNumber} PlayerContactNumber={PlayerContactNumber}/>
                <Select_Gender setGender={setGender} Gender={Gender}/>   
                <DateOfBirth setPlayerDOB={setPlayerDOB} PlayerDOB={PlayerDOB} />
                
                <Select_Ethnicity setEthnicity={setEthnicity} Ethnicity={Ethnicity}/>
                 
            </FormElementGroup>
         
            <FormElementGroup>
            <H4>About this Season</H4>
                   
                    <Select_Seasons setSeason={setSeason} Season={Season}/>
                    {
                        SelectedTeam.region?.id ? null:<Select_Region_Individual setRegion={setRegion} Region={Region}/>
                    }
                      
                    {
                        SelectedTeam.age_group?.id ? null:<Select_AgeGroup_Individual setAgeGroup={setAgeGroup} AgeGroup={AgeGroup}/>
                    }
                    
                    {
                        SelectedTeam.division?.id? null : <Select_Division_Individual setDivision={setDivision} Division={Division}/> 
                    }
                  
                    <div className={ButtonStyle.BtnRight}>
                        <div className={ButtonStyle.BtnGroup}>
                            <Button variant="contained" className={ButtonStyle.Next} onClick={()=>{handleClick()}} disabled={disabled}>Create New Player</Button>
                            <Btn_ResetParentComponent ResetParentComponent={BacktoIDInput}/>
                        </div>
                    </div>            
            </FormElementGroup>
            </div>
        )
}
export default CreateNewPlayer;