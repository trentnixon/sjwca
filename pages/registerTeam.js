import { API } from "../config/index";

import * as React from "react";
/* import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"; 
import { Button } from "@mui/material";*/

import { Table, Button } from "@mantine/core";
import { IconUsers } from '@tabler/icons';
import StructureStyles from "../styles/Structure/Structure.module.css";
import RegistrationRequirements from "../styles/registrationPage/RegistrationRequirements.module.css";
import MarkdownContainer from "../components/Structure/MarkdownContainer";
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import SupportersIcons from "../components/Structure/SupportersIcons";
// Compoennts
import ManagerSignupForm from "../components/ManagerSeasonSignup/ManagerSignupForm";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { useState } from "react";
import { H1, H2, H3, P } from "../components/type";
import Link from "next/link";


const RegisterTeam = ({
  switchboard,
  registerteam,
  RegistrationInsructions,
  RegionToAge,
}) => {
  //const RegisterTeamsOpen = switchboard.isRegisterTeamsOpen;
  const RegisterTeamsOpen = true;
  const [CurrentSeasonID, setCurrentSeasonID] = useState(switchboard.season.id);
  //console.log(RegisterTeamsOpen)
  return (
    <div>
      <PageHeaderSmall
        HeaderCopy={`REGISTER YOUR TEAM`}
        SubCopy={`SJWCA 2023`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />
      <ContentContainer>
        <div className={StructureStyles.Width70}>
          {/* {
                                        RegisterTeamsOpen ?
                                                <ManagerSignupForm CurrentSeasonID={CurrentSeasonID } registerteamCopy={registerteam}/> :
                                                <RegisterTeamsClosed RegistrationInsructions={RegistrationInsructions}/>
                                } */}
          <RegisterFormCopy registerteamCopy={registerteam} />

          <BasicTable RegionToAge={RegionToAge} />
        </div>

        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default RegisterTeam;
const RegisterFormCopy = ({ registerteamCopy }) => {
  return (
    <div className={`${StructureStyles.Width70}`}>
      <H1>{registerteamCopy.Title}</H1>
      <MarkdownContainer>{registerteamCopy.Description}</MarkdownContainer>
    </div>
  );
};

function BasicTable({ RegionToAge }) {
  console.log(RegionToAge);
  function groupByIdentifier(array) {
    const grouped = {};
    array.forEach((item) => {
      const identifier = item?.region?.Name;
      if (!grouped[identifier]) {
        grouped[identifier] = [];
      }
      grouped[identifier].push(item);
    });
    return grouped;
  }

  const grouped = groupByIdentifier(RegionToAge);
  console.log(grouped);
  return (
    <>
      {Object.keys(groupByIdentifier(RegionToAge)).map((key, i) => {
        return (
          <>
            <H3>{key}</H3>
            <Table verticalSpacing="sm" >
              <thead> 
                <tr>
                  <th>League</th>
                  <th>Age</th>
                  <th>Division</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {groupByIdentifier(RegionToAge)[key].map((row, i) => {
                  if (row.PlayHQTeamRegoLink)
                    return (
                      <tr key={i}>
                        <td>{row?.region?.Name}</td>
                        <td>{row?.age_group.Name}</td>
                        <td> {row?.division.Name}</td>
                        <td>
                          <Button
                            variant="outline"
                            color="orange"
                            uppercase
                            href={row.PlayHQTeamRegoLink}
                            component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            rightIcon={<IconUsers size={14} />}
                            styles={(theme) => ({
                              root: {
                                paddingLeft: 20,
                                paddingRight: 20,

                                "&:hover": {
                                  backgroundColor:'#fd7e14',
                                  color:'white'
                                },
                              },

                              leftIcon: {
                                marginRight: 15,
                              },
                            })}
                          >
                            Register
                          </Button>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </Table>
          </>
        );
      })}

     
    </>
  );
}

const RegisterTeamsClosed = ({ RegistrationInsructions }) => {
  //console.log(RegistrationInsructions)
  return (
    <div className={` ${StructureStyles.Column}`}>
      <H1>Team Registrations</H1>
      <H2>OPENING 21st FEBRUARY</H2>
      <P>
        Team Registrations will be open to all team managers and coaches on the
        21st of February. Until then, please ensure all players in your team
        have registered with BOTH Play-Cricket{" "}
        <Link
          target="_blank"
          href={`https://play.cricket.com.au/club/sydney-junior-winter-cricket-association/6fb6ee9f-87d8-eb11-a7ad-2818780da0cc`}
        >
          <a>HERE</a>
        </Link>{" "}
        and SJWCA via our{" "}
        <Link href={`/registerIndividual`}>
          <a>Individual Registration</a>
        </Link>{" "}
        form. all information about{" "}
        <Link href={`/howToRegister`}>
          <a>registration</a>
        </Link>{" "}
        this season,can be found{" "}
        <Link href={`/howToRegister`}>
          <a>here</a>
        </Link>
        .
      </P>
      <H2>Registration Preperation</H2>
      <div className={RegistrationRequirements.MainList}>
        <MarkdownContainer>
          {RegistrationInsructions.Insructions}
        </MarkdownContainer>
      </div>
    </div>
  );
};

/* export const getStaticProps = async (context) => {
  const registerteamRes = await fetch(`${API}register-team-landing`);
  const switchboardRes = await fetch(`${API}switchboard`);
  const resRego = await fetch(`${API}registration-insructions`);
  const RegistrationInsructions = await resRego.json();
  const registerteam = await registerteamRes.json();
  const switchboard = await switchboardRes.json();
  return { props: { switchboard, registerteam, RegistrationInsructions } };
}; */

export async function getServerSideProps(context) {
  const registerteamRes = await fetch(`${API}register-team-landing`);
  const switchboardRes = await fetch(`${API}switchboard`);
  const resRego = await fetch(`${API}registration-insructions`);
  const RegionToAgeRes = await fetch(`${API}region-to-agegroups`);
  const RegistrationInsructions = await resRego.json();
  const registerteam = await registerteamRes.json();
  const switchboard = await switchboardRes.json();

  const RegionToAge = await RegionToAgeRes.json();

  return {
    props: { switchboard, registerteam, RegistrationInsructions, RegionToAge },
  };
}
