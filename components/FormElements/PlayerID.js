import * as React from 'react';
import  ButtonStyle from "../../styles/Structure/Buttons.module.css"
import {FindPlayerDetails} from "../../actions/Registration/handlePlayerRoster";
import FormElementsContainer from "./FormElementContainer"
import FormElementGroup from "./FormElementGroup"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { H4 } from '../type';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DialpadIcon from '@mui/icons-material/Dialpad';
import {isEmpty} from "../../actions/handleUX"

export default function PlayerID({setPlayerReturn, setMyCricketID}) {

   const [InternalMyCricketID, setInternalMyCricketID] = React.useState(null)

   const [disabled, setDisabled] = React.useState(true)
 
   const handleIDInput = (e)=>{
      setMyCricketID(e.target.value)
      setInternalMyCricketID(e.target.value)
    
      isEmpty(e.target.value) ?  setMyCricketID(false) :setMyCricketID(e.target.value)
      isEmpty(e.target.value) ? setDisabled(true) :setDisabled(false)
      
  }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log( 'PlayerID:', InternalMyCricketID); 

        //FindPlayerID()
        const OBJ={
            _CALLBACK:setPlayerReturn,
            _MYCRICKETID:InternalMyCricketID,
            
          }
        FindPlayerDetails(OBJ)  
    }
  return (
      <>
        <H4>Add a Player <PersonAddAlt1Icon /> </H4>
        <FormElementGroup>
        <form  onSubmit={handleSubmit} > 
              <FormElementsContainer>
                <DialpadIcon />
                <TextField  
                    id="outlined-basic" 
                    label="Entry a players MyCricket ID" 
                    variant="standard"
                    fullWidth
                    type='number'
                    onInput={handleIDInput}
                    />
                    </FormElementsContainer>
                    <div className={ButtonStyle.BtnRight}>
                      <Button variant="contained" type="submit" className={ButtonStyle.Next} disabled={disabled}>Find Player</Button>
                  </div>
          </form>
          </FormElementGroup>
        </>
        );
}
