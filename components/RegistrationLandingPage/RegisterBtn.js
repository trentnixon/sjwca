// import Button from '@mui/material/Button';
import { Button } from "@mantine/core";
import Buttonsstyles from "../../styles/Structure/Buttons.module.css";
import Link from "next/link";
import { track_ga_event } from "../../actions/GA";

export const RegisterATeamButton = () => {
  const GA = (i) => {
    track_ga_event({
      action: "Btn_HomePage_Registration",
      params: { Btn_Pressed: "Team Registration" },
    });
  };
  return (
    <Button
      variant="outline"
      color="green"
      component="a"
      rel="noopener noreferrer"
      href={`/registerTeam`}
      styles={(theme) => ({
        root: {
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: "#40c057",
            color:'white'
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      onClick={() => {
        GA();
      }}
    >
      Team Registration
    </Button>
  );
};

export const RegisterIndividualButton = () => {
  const GA = (i) => {
    track_ga_event({
      action: "Btn_HomePage_Registration",
      params: { Btn_Pressed: "Player Registration" },
    });
  };
  return (
    <Button
      variant="outline"
      color="blue"
      component="a"
      rel="noopener noreferrer"
      href={`/registerIndividual`}
      styles={(theme) => ({
        root: {
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: "#228be6",
            color:'white'
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      onClick={() => {
        GA();
      }}
    >
      Player Registration
    </Button>
  );
};
