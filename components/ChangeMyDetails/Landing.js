import { useEffect, useState } from "react";
import Link from "next/link";
import { H1, P } from "../type";

import ChangeMyDetailsProcessing from "./Processing";
import FormElementGroup from "../FormElements/FormElementGroup";
import FormElementsContainer from "../FormElements/FormElementContainer";
import HasFieldBeenFilledIn from "../FormElements/hasFieldBeenFilledIn";
import TextField from "@mui/material/TextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { validateEmail } from "../../actions/handleUX";
import Button from "@mui/material/Button";
import { useAuthParentEmail } from "../../actions/CustomHooks/useAuthPlayerEmail";

const ChangeMyDetailsLanding = ({
  setProgress,
  setPlayerResponse,
  StoreEmail,
}) => {
  const [Processing, setProcessing] = useState(false);
  const [isEmail, setisEmail] = useState("");
  const [Email, setEmail] = useState("");
  const [Data, AuthEmail] = useAuthParentEmail();
  const [disabled, setdisabled] = useState(true);
  const handleChange = (e) => {
    setisEmail(validateEmail(e.target.value));
    setEmail(e.target.value);
    StoreEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  const handleClick = () => {
    console.log("HANDLE CLICK");
    setProcessing(true);
    AuthEmail(Email);
  };

  useEffect(() => {
    console.log(Data);
    if (Data.error === true) {
      setPlayerResponse(Data);
      setProgress(4);
    } else if (Data.length != 0) {
      setPlayerResponse(Data);
      setProcessing(false);
      setProgress(1);
    }
  }, [Data]);

  if (Processing) return <ChangeMyDetailsProcessing />;
  return (
    <>
      <H1>Change my details</H1>
      <P>
        The upcoming Winter 2025 season is taking shape and it's clear to see
        this will be the biggest season to date!!
      </P>
      <P>
        The North-West region, in particular, is massively oversubscribed. Our
        stance this season was to prioritise full team registrations. With many
        full teams registering and the general demand for the competition in
        North-West Sydney mixed with a lack of available grounds, this has led
        to many individual registrations (and team registrations!) missing out
        on a spot in the North-West Region for the 2025 season. The good news is
        that we do have space in other nearby regions.
      </P>
      <P>
        Please check the other{" "}
        <Link href={`/regions`}>
          <a>Regions available </a>
        </Link>
      </P>

      <FormElementGroup>
        <FormElementsContainer>
          <AlternateEmailIcon />
          <TextField
            id="outlined-basic"
            label={`Email used to Register Player`}
            variant="standard"
            placeholder={`Email used to Register Player`}
            fullWidth
            onBlur={handleChange}
          />
          <HasFieldBeenFilledIn Value={Email} />
        </FormElementsContainer>
        <Button variant="contained" onClick={handleClick} disabled={disabled}>
          Find Players
        </Button>
      </FormElementGroup>
    </>
  );
};
export default ChangeMyDetailsLanding;
