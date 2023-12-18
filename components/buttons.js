import ButtonStyles from "../styles/Structure/Buttons.module.css";
import { track_ga_event } from "../actions/GA";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Button as MantineButton } from "@mantine/core";
// Icons
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const ClearButton = () => {
  return <Button variant="contained">Clear Button</Button>;
};

export const GoToRegionBtn = ({ href, Name, Conference }) => {
  const GA = (Name) => {
    track_ga_event({
      action: "Btn_View_Region",
      params: { Region_Selected: Name },
    });
  };

  return (
    <MantineButton
      variant="outline"
      color="blue"
      component="a"
      rel="noopener noreferrer"
      href={href}
      rightIcon={<EditLocationAltIcon size={14} />}
      styles={(theme) => ({
        root: {
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: "#228be6",
            color: "white",
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      onClick={() => {
        GA(Name);
      }}
    >
      {Name}
    </MantineButton>
  );
};

export const RegIndividualTerms = ({
  SetState,
  state,
  Title,
  isDisabled = false,
}) => {
  const GA = () => {
    track_ga_event({
      action: "Btn_Individual_Terms",
      params: { Terms_and_conditions: "true" },
    });
  };
  return (
    <Button
      variant="contained"
      onClick={() => {
        SetState(state);
        GA();
      }}
      className={ButtonStyles.Next}
      disabled={isDisabled}
    >
      {Title}
    </Button>
  );
};

export const AskOnFB = () => {
  const GA = () => {
    track_ga_event({
      action: "Btn_AskonFB",
      params: { AskonFB: "true" },
    });
  };
  return (
    <Button
      variant="contained"
      onClick={() => {
        GA();
      }}
      className={ButtonStyles.Sixers}
    >
      <Link href={`https://www.facebook.com/SydneyJuniorWinterCricket/`}>
        <a>
          {" "}
          Ask On Facebook <HelpOutlineIcon />
        </a>
      </Link>
    </Button>
  );
};

export const TeamRegistrationBtn = () => {
  const GA = () => {
    track_ga_event({
      action: "Btn_Team_Terms",
      params: { Terms_and_conditions: "true" },
    });
  };
  return (
    <Button
      variant="contained"
      className={ButtonStyles.Thunder}
      onClick={() => {
        GA();
      }}
    >
      <Link target="_blank" href={`/pdf/SJWCA How to Register a player.pdf`}>
        <a>
          2024 Team Registration <SportsCricketIcon />
        </a>
      </Link>
    </Button>
  );
};

export const ViewSelectedTeamBtn = ({ href, Name, Conference }) => {
  const GA = (href) => {
    track_ga_event({
      action: "Btn_View_Team",
      params: { View_Team: href },
    });
  };

  return (
    <Button
      variant="contained"
      className={ButtonStyles[Conference]}
      onClick={() => {
        GA(href);
      }}
    >
      <Link href={href}>
        <a>Roster</a>
      </Link>
    </Button>
  );
};
