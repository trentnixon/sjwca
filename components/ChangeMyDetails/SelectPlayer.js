import { useEffect, useState } from "react";
import { H1,P } from "../type";
import Button from '@mui/material/Button';
import ChangeMyDetailsProcessing from './Processing'
import {useAuthPlayer} from '../../actions/CustomHooks/useAuthFindPlayer'

const ChangeMyDetailsSelectPlayer = ({setProgress, PlayerResponse,Email, setSelected})=>{
    const [Processing, setProcessing] = useState(false)
    const [Data,AuthPlayer] = useAuthPlayer()


    const handelClick=(ID)=>{
        AuthPlayer(ID)
    }

    useEffect(()=>{
        console.log(Data)
        if(Data.error === true){
            setPlayerResponse(Data);
            setProgress(4)
        }
        else if(Data.length != 0 )  {
            setSelected(Data);
            setProcessing(false)
            setProgress(2)
        } 
            
    },[Data])

    if(Processing)
    return <ChangeMyDetailsProcessing />
    return(
        <>
            <H1>Players Registered</H1>
            <P>The following players have been register under this email address {Email}.</P>
            <P>Select the player you wish to edit.</P>
           
            {
                PlayerResponse.map((player,i)=>{
                    if(player.Season_receipts != 0)
                    return(
                        <Button key={i} variant="text" onClick={()=>{handelClick(player.id)}}>{player.Name}</Button>
                    )
                })
            }
            <br /><br />
             <P>Q. Why is my child not showing up?</P>
             <P>A. Only players that have not yet been assigned a team will be editable. If your child is not listed above, it is likely they have been selected for a team.</P>
        </>
    )
}
export default ChangeMyDetailsSelectPlayer;