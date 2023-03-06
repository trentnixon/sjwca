import { useState } from "react";
import { API } from "../config/index";
import { track_ga_event } from "../actions/GA";

import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";
import { Group, Space, Stack, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons";

// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import MarkdownContainer from "../components/Structure/MarkdownContainer";
// Type
import { H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import SupportersIcons from "../components/Structure/SupportersIcons";
import {
  RegisterATeamButton,
  RegisterIndividualButton,
} from "../components/RegistrationLandingPage/RegisterBtn";

const NewSeason = ({ newseason }) => {
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
        HeaderCopy={`2023 Season`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>{newseason.Name}</H1>
          <MarkdownContainer>{newseason.Description}</MarkdownContainer>
          <Space h={30} />
        {/*   <Tabs color="orange" variant="pills" defaultValue="gallery">
            <Tabs.List grow position="center">
              <Tabs.Tab value="gallery" icon={<IconMapPin size={14} />}>
                THUNDER CONFERENCE
              </Tabs.Tab>
              <Tabs.Tab value="messages" icon={<IconMapPin size={14} />}>
                SIXERS CONFERENCE
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <DisplayConference COPY={newseason.Thunder} CLASS="Thunder" />
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              <DisplayConference COPY={newseason.Sixers} CLASS="Sixers" />
            </Tabs.Panel>
          </Tabs> */}
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

export const getStaticProps = async (context) => {
  ///newseason
  const newseasonRes = await fetch(`${API}newseason`);
  const newseason = await newseasonRes.json();

  return {
    props: { newseason },
  };
};

const DisplayConference = ({ COPY, CLASS }) => {
  return <MarkdownContainer class={CLASS}>{COPY}</MarkdownContainer>;
};
