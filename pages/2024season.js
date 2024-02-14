import { useState } from "react";
import { track_ga_event } from "../actions/GA";
import StructureStyles from "../styles/Structure/Structure.module.css";

import { Space, Stack } from "@mantine/core";

// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
// Type
import { H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import SupportersIcons from "../components/Structure/SupportersIcons";
import {
  RegisterATeamButton,
  RegisterIndividualButton,
} from "../components/RegistrationLandingPage/RegisterBtn";

const NewSeason = () => {
  const [Conference, setConference] = useState(true);

  const GA = (i) => {
    track_ga_event({
      action: "Btn_View_Conference",
      params: { Conference_Selected: Conference ? "Sixers" : "Thunder" },
    });
  };

  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`2024 Season`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>Our 2024 Seasons</H1>

          <div class=" Markdown_ReactMarkdown__nlrzp">
            <p>
              Sydney Junior Winter Cricket continues to go from strength to
              strength. In partnership with Cricket NSW, Sydney Thunder, Sydney
              Sixers and Coolana Sports we’re pleased to launch our 19th season!
            </p>
            <h2>SEASON DATES</h2>
            <p>
              The season will commence on Sunday 5th May 2024 and run for 8
              weeks, finishing on Sunday 18th June. We have one reserve weekend,
              Sunday 25th June.
            </p>
            <h2>SEASON FEES</h2>
            <p>
              This season's Subscription fees will once again be paid via our
              partners at PlayHQ. This year's fee remains at $110 per player. As
              part of the PlayHQ changes, Cricket Australia will charge all
              junior players a one off annual charge named the "National
              Registration Fee". This $16 fee may also be payable during the
              registration process depending if you've paid this fee already
              within the last 12 months. All Individual players will be required
              to pay the Seasons Subscription fee to ensure their playing spot
              in their team.
            </p>
            <h2>AGE GROUPS</h2>
            <p>
              <strong>The age group cut off dates are as follows:</strong>
            </p>
            <ul>
              <li>
                Under 16 Grade less than 16 years as at midnight 31st August
                2023
              </li>
              <li>
                Under 14 Grade less than 14 years as at midnight 31st August
                2023
              </li>
              <li>
                Under 12 Grade less than 12 years as at midnight 31st August
                2023
              </li>
              <li>
                Under 10 Grade less than 10 years as at midnight 31st August
                2023
              </li>
            </ul>
          {/*   <h2>THE TWO CONFERENCE SYSTEM</h2>
            <p>
              This season we will be continuing to split the competition into
              the Sixers and Thunder Conferences. After the successful
              introduction in 2023 of the split regions, within the two
              conferences, we will once again be having set grades playing out
              of particular grounds. This should lead to teams only playing out
              of 1-2 venues and hopefully played closer to home. With limited
              fields available and registrations increasing we’ll be taking
              registrations on a first come first served basis. If the region
              and grade you’re hoping for your team to play in is full, you will
              need to consider the other remaining options available at the time
              of registration. Whilst we are able to help some individuals
              register and find a team to play with, we give priority to full
              team registrations so try to find a team to register with if you
              can!
            </p> */}
          </div>

          <Space h={30} />
        </div>

        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
          <Stack position="apart" grow>
            <RegisterATeamButton />
            <RegisterIndividualButton />
          </Stack>
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default NewSeason;