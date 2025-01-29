import Link from "next/link";
import StructureStyles from "../styles/Structure/Structure.module.css";

// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportersIcons from "../components/Structure/SupportersIcons";
// Type
import { P, H2, H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { CTABTN } from "../components/buttons";

import { Links } from "../data/RegistrationLinks";
import { Paper } from "@mantine/core";

const RegisterIndividual = () => {
  console.log(Links.EOF);

  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`INDIVIDUAL PLAYER REGISTRATION`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>INDIVIDUAL PLAYER REGISTRATION OPEN FOR 2025</H1>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <P>
              Get ready to hit the pitch for the Sydney Junior Winter Cricket
              2025 season! We're welcoming young cricketers aged 7-16 years to
              sign up for an exhilarating season ahead.
            </P>
            <P>
              This year, we're streamlining the registration process with an
              Expression of Interest form available through PlayHQ. This new
              step is aimed at seamlessly integrating players into age groups,
              divisions, and regions that best match their skill levels and
              geographical location.
            </P>
            <P>
              If you're a budding cricketer without a team, this is your
              starting point:
            </P>
            <Paper
              radius="md"
              withBorder
              shadow="md"
              m={40}
              p="md"
              sx={{ backgroundColor: "#f1f7ff", textAlign: "center" }}
            >
              <CTABTN CTA={Links.EOF} item={0} color={"#ff9813"} />
            </Paper>
            <P>
              Fill out the form to express your interest in playing winter
              cricket this year. This is specifically for players not yet
              connected to a team or those without a team manager. By submitting
              this form, you'll help us guide you towards a team that fits your
              profile based on availability and preference.
            </P>
          </div>
          <div className={StructureStyles.VertSpacer}></div>
          <H2>Already in a team?</H2>
          <P>
            For players who are already part of a team, please reach out to your
            team manager or coach for the direct registration link through
            PlayHQ. They're equipped with all you need to get registered for the
            upcoming season.
          </P>
          <H2>Want to register a team?</H2>
          <P>
            Team Managers wishing to register a Team for the upcoming season
            please use our{" "}
            <Link href="/registerTeam">Team Registration Page</Link>.
          </P>
        </div>

        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default RegisterIndividual;
