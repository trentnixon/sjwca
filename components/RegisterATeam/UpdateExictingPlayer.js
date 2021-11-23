import { useEffect, useState } from "react";
//Actions
import {UpdatePlayer,CreateTeamRosterforStrapi} from "../../actions/Registration/handlePlayerRoster"

import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
import {H1,H2,H3,H4,P, P_ERROR} from "../type";
import FormElementGroup from "../FormElements/FormElementGroup"
import SeasonReceipt from "../FormElements/SeasonReceipt"
import Select_Seasons from "../FormElements/Select_Seasons"
import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import Button from '@mui/material/Button';
import {findIndex} from "lodash"



const UpdateExictingPlayer = (props)=>{

    const {PlayerReturn, SelectedTeam,CurrentSeasonID,PlayerRoster,BacktoIDInput,RefreshUIonAddUpdate,RequestnewDatafromStrapi} = props;
   
    const [ReceiptNum, setReceiptNum] = useState(0)
    const [Season, setSeason] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const [receiptUsed, setReceiptUsed] = useState(false)
 

    const RecieptCheck = ()=>{

        let INDEX  = findIndex(PlayerReturn[0].Season_receipts, function(o) { return o.ReceiptNumber == ReceiptNum; })
        if(INDEX === -1)
            {
                PlayerReturn[0].Season_receipts.push({ ReceiptNumber:ReceiptNum, season:[Season],team:[SelectedTeam.id] })
                return PlayerReturn[0].Season_receipts;
            }
        else{
            console.log(`INDEX ${INDEX} already exists`)
            return false
        }
    }




    const handleClick = ()=>{
      
        // CHeck to see if reciept has been used
        let New_Season_receipts =  RecieptCheck()
 
        if(!New_Season_receipts)
            {
                console.log(`New_Season_receipts  = ${New_Season_receipts}`)
                setReceiptUsed(true)
            }else{
                RefreshUIonAddUpdate(true)

                const OBJ={
                    _PLAYERID:PlayerReturn[0].id,
                    _PLAYER_SEASON_RECEIPTS:PlayerReturn[0].Season_receipts,
                    _SEASON:Season,
                    _RECEIPTNUM:ReceiptNum,
                    _TEAMID:SelectedTeam.id,
                    _CURRENTSEASONID:CurrentSeasonID,
                    _TEAMROSTER:CreateTeamRosterforStrapi(PlayerRoster),
                    _ROSTERID:PlayerRoster.id,
                    _CALLBACK:RequestnewDatafromStrapi
                }
                UpdatePlayer(OBJ)
            }
    }

    useEffect(()=>{
        if(Season && ReceiptNum)
        setDisabled(false)
    },[Season,ReceiptNum])

   
    if(receiptUsed)
        return(
            <>
                <P_ERROR> ERROR: this Reciept ID has already been used. </P_ERROR>
                <Button variant="contained" onClick={()=>{BacktoIDInput()}} >Retry</Button>
            </>
        )
        return(
            <FormElementGroup>
                <H4>MyCricket ID : {PlayerReturn[0].MyCricketID} </H4>
                <H2>Player Name : {PlayerReturn[0].Name} </H2>
                
                <SeasonReceipt setReceiptNum={setReceiptNum}/>
                <Select_Seasons setSeason={setSeason}/>
                    <div className={ButtonStyle.BtnRight}>
                        <div className={ButtonStyle.BtnGroup}>
                            <Button variant="contained"  className={ButtonStyle.Next} onClick={()=>{handleClick()}} disabled={disabled}>Add {PlayerReturn[0].Name}</Button>
                            <Btn_ResetParentComponent ResetParentComponent={BacktoIDInput}/>
                        </div>
                    </div>
            </FormElementGroup>  
        )
}
export default UpdateExictingPlayer;