import * as React from "react";

import { SimpleGrid, Divider } from "@mantine/core";

import StructureStyles from "../styles/Structure/Structure.module.css";
import RegistrationRequirements from "../styles/registrationPage/RegistrationRequirements.module.css";
import MarkdownContainer from "../components/Structure/MarkdownContainer";
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import SupportersIcons from "../components/Structure/SupportersIcons";
// Compoennts
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav";

import { H1, H2, H4, P } from "../components/type";
import Link from "next/link";
import { Conferences } from "../data/confrences";
import { CTABTN } from "../components/buttons";
const RegisterTeam = () => {
  console.log(Conferences);
  return (
    <div>
      <PageHeaderSmall
        HeaderCopy={`REGISTER YOUR TEAM`}
        SubCopy={`SJWCA 2025`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />
      <ContentContainer>
        <div class="Structure_Width70__1DM3-">
          <h1 class="">Register a Team</h1>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <P>
              Gear up for the start of the SJWCA season on 4th May 2025!
              Following an unprecedented surge in participation last year, we're
              thrilled to build on that momentum by welcoming even more teams
              across various age groups throughout the city.
            </P>
            <P>
              With last season reaching full capacity earlier than expected, we
              urge teams to register without delay. Secure your team's place
              early and ensure you're part of the action for our most exciting
              season yet!
            </P>

            <P>
              Make sure to register your team as soon as possible to secure your
              spot in the competition. We look forward to seeing you on the
              field in 2025!
            </P>
            <P style={{ textAlign: "center" }}>
              <em>
                The Team application process is for Team managers to complete
                only.
              </em>
            </P>
            <P style={{ textAlign: "center" }}>
              <em>
                For parents registering their son or daughter for the season,
                please refer to the player registration options
              </em>
            </P>
          </div>
          <H2>How to Register</H2>
          <H2>{Conferences.Thunder.Conference}</H2>
          <P>{Conferences.Thunder.About}</P>
          <Divider my={20} />
          <ListTeamRegistrationLinks conference={Conferences.Thunder} />
          <Divider my={20} />
          <H2>{Conferences.Sixers.Conference}</H2>
          <P>{Conferences.Sixers.About}</P>
          <Divider my={20} />
          <ListTeamRegistrationLinks conference={Conferences.Sixers} />
          <Divider my={20} />
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

const ListTeamRegistrationLinks = ({ conference }) => {
  console.log(conference.color);
  return (
    <div>
      {conference.regions.map((link, i) => {
        return (
          <SimpleGrid
            px="lg"
            my={10}
            breakpoints={[
              { minWidth: "sm", cols: 1 },
              { minWidth: "md", cols: 2 },
            ]}
          >
            <H4
              style={{
                margin: "0px",
                fontWeight: 400,
                lineHeight: "1.2em",
                fontSize: "1.1em",
              }}
            >
              {link.Name}
            </H4>

            <CTABTN
              CTA={link.CTA.TeamRegistration}
              item={0}
              color={conference.color}
            />
          </SimpleGrid>
        );
      })}
    </div>
  );
};

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
