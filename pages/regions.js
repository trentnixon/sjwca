import React from "react";
// Assuming NewRegionCard is used within ConferenceRegions, no need to import it here unless used directly
import DisplayConference from "../components/pages/regions/DisplayConference";
import ConferenceRegions from "../components/pages/regions/ConferenceRegions";

import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
//Styles
import StructureStyles from "../styles/Structure/Structure.module.css";
import ContentContainer from "../components/Structure/ContentContainer";
import { H1, P } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { Space } from "@mantine/core";

import { Conferences } from "../data/confrences";

const RegionPage = () => {
  console.log(Conferences);

  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`Regions`}
        SubCopy={`Where can we be found`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>Conferences</H1>
          <P>
            This season we will be continuing to split the competition into the
            Sixers and Thunder Conferences. In a big change to seasons past, we
            will be having set grades playing out of particular grounds. This
            should lead to teams only playing out of 1-2 venues and hopefully
            played closer to home. With limited fields available and
            registrations increasing we’ll be taking registrations on a first
            come first served basis. If the region and grade you’re hoping for
            your team to play in is full, you will need to consider the other
            remaining options available at the time of registration.
          </P>
          <Space h={30} />

          <DisplayConference
            conferences={Conferences.Thunder}
            CLASS="Thunder"
          />
          <ConferenceRegions
            regions={Conferences.Thunder.regions}
            Conference={Conferences.Thunder}
          />

          <DisplayConference conferences={Conferences.Sixers} CLASS="Sixers" />
          <ConferenceRegions
            regions={Conferences.Sixers.regions}
            Conference={Conferences.Sixers}
          />
        </div>
        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
    </div>
  );
};

export default RegionPage;
