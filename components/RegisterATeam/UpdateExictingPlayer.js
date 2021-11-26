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



const UpdateExictingPlayer = (props)=>{

    const {PlayerReturn, SelectedTeam,CurrentSeasonID,PlayerRoster,BacktoIDInput,RefreshUIonAddUpdate,RequestnewDatafromStrapi} = props;
   
    const [ReceiptNum, setReceiptNum] = useState(0)
    const [Season, setSeason] = useState(0)
    const [disabled, setDisabled] = useState(true)


    const CreateNewReceiptObj = ()=>{
        let OBJ=[]

        PlayerReturn[0].Season_receipts.map((receipt, )=>{
            console.log(receipt)
            OBJ.push({
                ReceiptNumber:receipt.ReceiptNumber,
                Confirmed:receipt.Confirmed,
                season:receipt.season.id,
                team:receipt.team.id
            })
        })

        OBJ.push({
            ReceiptNumber:ReceiptNum,
            Confirmed:false,
            season:CurrentSeasonID,
            team:SelectedTeam.id
        })

        console.log(OBJ)
        return OBJ
    }

    const handleClick = ()=>{
      
                RefreshUIonAddUpdate(true)

                //let FirstReciept =[{ReceiptNumber:ReceiptNum, season:[Season],team:[SelectedTeam.id] }]
                CreateNewReceiptObj()
                console.log(PlayerReturn[0].Season_receipts)
                const OBJ={
                    _PLAYERID:PlayerReturn[0].id,
                    _PLAYER_SEASON_RECEIPTS:CreateNewReceiptObj(),
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

    useEffect(()=>{
        if(Season && ReceiptNum)
            setDisabled(false)
    },[Season,ReceiptNum])

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