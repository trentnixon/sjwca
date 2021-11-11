import * as React from 'react';

import {FindPlayerDetails} from "../../actions/Registration/handlePlayerRoster";
import FormElementsContainer from "./FormElementContainer"
import FormElementGroup from "./FormElementGroup"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { H4 } from '../type';


export default function PlayerID({FindPlayerID, FetchPlayerValue, setMyCricketID}) {

   const [InternalMyCricketID, setInternalMyCricketID] = React.useState(null)

  const handleIDInput = (e)=>{
    setMyCricketID(e.target.value)
    setInternalMyCricketID(e.target.value)
  }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log( 'PlayerID:', InternalMyCricketID); 

        FindPlayerID()
        const OBJ={
            _CALLBACK:FetchPlayerValue,
            _MYCRICKETID:InternalMyCricketID,
            
          }
        FindPlayerDetails(OBJ)
    }
  return (
      <>
        <H4>Add a Player</H4>
        <FormElementGroup>
        <form  onSubmit={handleSubmit} > 
              <FormElementsContainer>
                <TextField  
                    id="outlined-basic" 
                    label="Entry a players MyCricket ID" 
                    variant="standard"
                    fullWidth
                    onInput={handleIDInput}
                    />
                    </FormElementsContainer>
                <Button variant="outlined" type="submit">Find Player</Button>
          </form>
          </FormElementGroup>
        </>
        );
}
