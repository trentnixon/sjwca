import { useState,useEffect } from "react";
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
//Actions
import {AddNewPlayer, CreateTeamRosterforStrapi} from "../../actions/Registration/handlePlayerRoster"

// Build Form
import FormElementGroup from "../FormElements/FormElementGroup"
import Create_Player_Name from "../FormElements/PlayerName";
import Create_PlayerEmail from "../FormElements/PlayerEmail";
import Create_PlayerContactNumber from "../FormElements/PlayerContactNumber";
import SeasonReceipt from "../FormElements/SeasonReceipt"
import Select_Seasons from "../FormElements/Select_Seasons"
import Select_Gender from "../FormElements/Select_Gender"
import DateOfBirth from "../FormElements/DateOfBirth"
import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import {H1,H2,H3,H4,P} from "../type";

const CreateNewPlayer = (props)=>{
    const {SelectedTeam, ResetParentComponent, MyCricketID, CurrentSeasonID} = props;
    const [disabled, setDisabled] = useState(true)
    const [PlayerName, setPlayerName] = useState(false)
    const [ReceiptNum, setReceiptNum] = useState(0)
    const [Season, setSeason] = useState(0)
    const [Gender, setGender] = useState(0)
    const [PlayerEmail, setPlayerEmail] = useState(false)
    const [PlayerContactNumber, setPlayerContactNumber] = useState(false)
    const [PlayerDOB, setPlayerDOB] = useState(false)
    const [UpdatingPlayer, setUpdatingPlayer] = useState(false)

    const PostFetchCALLBACK = ()=>{
        ResetParentComponent()
        setUpdatingPlayer(false)
    }
    const handleClick = ()=>{

        let FirstReciept =[{ReceiptNumber:ReceiptNum, season:[Season],team:[SelectedTeam.id] }]
        //console.log(PlayerDOB)
        const OBJ={
                  
            _PLAYERNAME:PlayerName,
            _SEASON:Season, 
            _MyCricketID:MyCricketID,
            _RECEIPTNUM:ReceiptNum,
            _TEAMID:SelectedTeam.id,
            _CURRENTSEASONID:CurrentSeasonID,
            _GENDER:Gender,
            _EMAIL:PlayerEmail,
            _CONTACTNUMBER:PlayerContactNumber,
            _DOB : PlayerDOB,
            _TEAMROSTER:CreateTeamRosterforStrapi(SelectedTeam, Season),
            _CALLBACK:PostFetchCALLBACK,
           _PLAYER_SEASON_RECEIPTS:FirstReciept,
          
        }
       
            AddNewPlayer(OBJ)
            setUpdatingPlayer(true)
    }


    const FieldCheck = ()=>{
        console.log('FieldCheck')
        console.log(Gender)
        if(Season && ReceiptNum && PlayerName && Gender && PlayerEmail && PlayerContactNumber && PlayerDOB)
            return true 
                return false
    }

    useEffect(()=>{
        FieldCheck() ? setDisabled(false) :setDisabled(true)
    },[Season , ReceiptNum , PlayerName , Gender, PlayerEmail , PlayerContactNumber , PlayerDOB])

        return(
            <FormElementGroup>
                <H2>Create New Player</H2>
                <H4>My Cricket ID : {MyCricketID}</H4>
           
                    <Create_Player_Name setPlayerName={setPlayerName}/>
                    <Create_PlayerContactNumber setPlayerContactNumber={setPlayerContactNumber}/>
                    <Create_PlayerEmail setPlayerEmail={setPlayerEmail}/>
                    <Select_Gender setGender={setGender}/>   
                    <DateOfBirth setPlayerDOB={setPlayerDOB} />
                    <SeasonReceipt setReceiptNum={setReceiptNum}/>
                    <Select_Seasons setSeason={setSeason}/>
                    
                    <div className={ButtonStyle.BtnRight}>
                        <div className={ButtonStyle.BtnGroup}>
                            <Button variant="contained" className={ButtonStyle.Next} onClick={()=>{handleClick()}} disabled={disabled}>Create New Player</Button>
                            <Btn_ResetParentComponent ResetParentComponent={ResetParentComponent}/>
                        </div>
                    </div>
            </FormElementGroup>
        )
}
export default CreateNewPlayer;

// / <DateOfBirth />