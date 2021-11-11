import { useEffect, useState } from "react";
//Actions
import {UpdatePlayer,CreateTeamRosterforStrapi} from "../../actions/Registration/handlePlayerRoster"

import {H1,H2,H3,P} from "../type";
import FormElementGroup from "../FormElements/FormElementGroup"
import SeasonReceipt from "../FormElements/SeasonReceipt"
import Select_Seasons from "../FormElements/Select_Seasons"
import Btn_ResetParentComponent from "./Btn_ResetParentComponent"
import Button from '@mui/material/Button';
import {findIndex} from "lodash"



const UpdateExictingPlayer = (props)=>{

    const {PlayerReturn, SelectedTeam, ResetParentComponent,CurrentSeasonID} = props;
   
    const [ReceiptNum, setReceiptNum] = useState(0)
    const [Season, setSeason] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const [receiptUsed, setReceiptUsed] = useState(false)
    const [UpdatingPlayer, setUpdatingPlayer] = useState(false)


    console.log(PlayerReturn[0]);


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

    const ResetState = ()=>{
        console.log('ResetState')
        setReceiptNum(0)
        setSeason(0)
        setDisabled(true)
        setReceiptUsed(false) 
    }

    const PostFetchCALLBACK = ()=>{
        ResetParentComponent()
        setUpdatingPlayer(false) 
    }


    const handleClick = ()=>{
      
        // CHeck to see if reciept has been used
        let New_Season_receipts =  RecieptCheck()

        if(!New_Season_receipts)
            {
                console.log(`New_Season_receipts  = ${New_Season_receipts}`)
                setReceiptUsed(true)
            }else{
                const OBJ={
                    _PLAYERID:PlayerReturn[0].id,
                    _PLAYER_SEASON_RECEIPTS:PlayerReturn[0].Season_receipts,
                    _SEASON:Season,
                    _RECEIPTNUM:ReceiptNum,
                    _TEAMID:SelectedTeam.id,
                    _CURRENTSEASONID:CurrentSeasonID,
                    _TEAMROSTER:CreateTeamRosterforStrapi(SelectedTeam),
                    _CALLBACK:PostFetchCALLBACK
                }
                UpdatePlayer(OBJ)
                setUpdatingPlayer(true)
            }
    }

    useEffect(()=>{
        if(Season && ReceiptNum)
        setDisabled(false)
    },[Season,ReceiptNum])

   
    if(receiptUsed)
        return(
            <>
                ERROR: this Reciept ID has already been used.
                <Button variant="contained" onClick={()=>{ResetState()}} >Retry</Button>
            </>
        )

    if(UpdatingPlayer)
        return(
            <>
                UPDATING PLAYER PLEASE WAIT
            </>

        )

        return(
            <FormElementGroup>
                <H2>MyCricket ID  {PlayerReturn[0].MyCricketID} Found </H2>
                <H3>Player Name : {PlayerReturn[0].Name}</H3>
                <SeasonReceipt setReceiptNum={setReceiptNum}/>
                <Select_Seasons setSeason={setSeason}/>
                <Button variant="contained" onClick={()=>{handleClick()}} disabled={disabled}>Add {PlayerReturn[0].Name}</Button>
                <Btn_ResetParentComponent ResetParentComponent={ResetParentComponent}/>
            </FormElementGroup>  
        )
}
export default UpdateExictingPlayer;