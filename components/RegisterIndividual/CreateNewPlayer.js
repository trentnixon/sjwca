import { useState,useEffect } from "react";
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
//Actions
import {AddNewPlayer, CreateTeamRosterforStrapi} from "../../actions/Registration/handlePlayerRoster"

// Build Form
import FormElementGroup from "../FormElements/FormElementGroup"
import Create_Player_Name from "../FormElements/PlayerName";
import Create_Mycricket_ID from "../FormElements/PlayerMyCricketID";
import Create_PlayerEmail from "../FormElements/PlayerEmail";
import Create_PlayerContactNumber from "../FormElements/PlayerContactNumber";
// import SeasonReceipt from "../FormElements/SeasonReceipt"
import Select_Seasons from "../FormElements/Select_Seasons"
import Select_Ethnicity from "../FormElements/Select_Ethnicity"
import Select_TeamStatus from "../FormElements/Select_TeamStatus"
import Select_Gender from "../FormElements/Select_Gender"
import Select_AgeGroup_Individual from "../FormElements/Select_AgeGroup_Individual"
import Select_Division_Individual from "../FormElements/Select_Division_Individual"
import Select_Region_Individual from "../FormElements/Select_Region_Individual"
import DateOfBirth from "../FormElements/DateOfBirth"
import Button from '@mui/material/Button';



import {H1,H2,H3,H4,P} from "../type";

const CreateNewPlayer = (props)=>{ 
    const {MyCricketID} = props;
    const [disabled, setDisabled] = useState(true)
    const [iscallback,setCallback] = useState(false)
    //const [MyCricketID, setMyCricketID] = useState(MyCricketID)
    const [PlayerName, setPlayerName] = useState(false)
    const [Season, setSeason] = useState(false)
    const [Ethnicity, setEthnicity] = useState(false)
    const [TeamStatus, setTeamStatus] = useState(false)
    const [Gender, setGender] = useState(false)
    const [PlayerEmail, setPlayerEmail] = useState(false)
    const [PlayerContactNumber, setPlayerContactNumber] = useState(false) 
    const [PlayerDOB, setPlayerDOB] = useState(false)
    const [Region, setRegion] = useState(false)
    const [AgeGroup, setAgeGroup] = useState(false)
    const [Division, setDivision] = useState(false)
 
    const SelectedTeam ='61b69cc20e40852ffc1e8b52';
    const PlayerRosterID = '61b69cc40e40852ffc1e8b53';


    const CALLBACK = ()=>{
        console.log('CALL BACK HERE')
        setCallback(true)
    }

    const handleClick = ()=>{

       // let FirstReciept =[{ReceiptNumber:ReceiptNum, season:[Season],team:[SelectedTeam] }]
        //console.log(PlayerDOB)
         //RefreshUIonAddUpdate(true)
         setCallback(null)
        const OBJ={
                  
            _PLAYERNAME:PlayerName,
             _SEASON:Season,  
             _TEAMID:SelectedTeam,
             _EMAIL:PlayerEmail,
             _CONTACTNUMBER:PlayerContactNumber,
             _DOB : PlayerDOB,
             _Ethnicity:Ethnicity,
             _GENDER:Gender,
             _MyCricketID:MyCricketID,
             _TEAMID:SelectedTeam,
             _ROSTERID:TeamStatus ? null:PlayerRosterID ,
             _AGE:AgeGroup,
             _DIVISION:Division,
             _REGION:Region,
             _TeamStatus:TeamStatus,
             _EmailTemplate:'new',
             _CALLBACK:CALLBACK,
          /*  
            _TEAMROSTER:CreateTeamRosterforStrapi(PlayerRoster),
             _CURRENTSEASONID:CurrentSeasonID,
            */
          
        }
       
        console.log(OBJ)
        AddNewPlayer(OBJ)  
           
    }


    const FieldCheck = ()=>{
        
        let ARR=[Season,PlayerName,AgeGroup,Division,MyCricketID,Gender,PlayerEmail,Ethnicity,PlayerContactNumber,PlayerDOB]
        console.log('FieldCheck',ARR.indexOf(false) )
        if(ARR.indexOf(false) === -1)
            return true 
                return false
    }

    useEffect(()=>{
        FieldCheck() ? setDisabled(false) :setDisabled(true)
    })
    //Season , ReceiptNum , PlayerName , Gender, PlayerEmail , PlayerContactNumber , PlayerDOB,TeamStatus,Ethnicity
    if(iscallback===null)
        return(
            <FormElementGroup>
            <H2>Processing Form</H2>
            </FormElementGroup>
        )
    if(iscallback)
        return( <FormElementGroup>
                    <H2>Player Registered</H2>
                    <P>Thank you for your interest with SJWCA. We will be in touch shortly</P>
                    <P>Next Steps : </P>
                </FormElementGroup>
                )
        return(
            <div>
            <H2>Register for the New Season</H2>
            <FormElementGroup>
                <H4>About Player ({MyCricketID})</H4>
                <Create_Player_Name setPlayerName={setPlayerName} PlayerName={PlayerName}/>
                <Create_PlayerEmail setPlayerEmail={setPlayerEmail} PlayerEmail={PlayerEmail}/>
                <Create_PlayerContactNumber setPlayerContactNumber={setPlayerContactNumber} PlayerContactNumber={PlayerContactNumber}/>
                <Select_Gender setGender={setGender} Gender={Gender}/>   
                <DateOfBirth setPlayerDOB={setPlayerDOB} PlayerDOB={PlayerDOB} />
                
                <Select_Ethnicity setEthnicity={setEthnicity} Ethnicity={Ethnicity}/>
                 
            </FormElementGroup>
            <FormElementGroup>
            <H4>About this Season</H4>
                   
                    
                    
                    <Select_TeamStatus setTeamStatus={setTeamStatus} TeamStatus={TeamStatus}/>
                    <Select_Seasons setSeason={setSeason} Season={Season}/>
                    <Select_Region_Individual setRegion={setRegion} Region={Region}/>
                    <Select_AgeGroup_Individual setAgeGroup={setAgeGroup} AgeGroup={AgeGroup}/>
                    <Select_Division_Individual setDivision={setDivision} Division={Division}/>    
                    <div className={ButtonStyle.BtnRight}>
                        <div className={ButtonStyle.BtnGroup}>
                            <Button variant="contained" className={ButtonStyle.Next} onClick={()=>{handleClick()}} disabled={disabled}>Submit Registration</Button>
                        </div>
                    </div>                
            </FormElementGroup>
            </div>
        )
}
export default CreateNewPlayer;

// <DateOfBirth />
// <SeasonReceipt setReceiptNum={setReceiptNum}/>
// /<Create_Mycricket_ID setMyCricketID={setMyCricketID} MyCricketID={MyCricketID}/>