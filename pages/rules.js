import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import SupportersIcons from "../components/Structure/SupportersIcons";

import { H1, H2, H3, P } from "../components/type";
import { Paper } from "@mantine/core";
import { CTABTN } from "../components/buttons";
const sjwcarules = () => {
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`SJWCA GAME RULES`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>SJWCA GAME RULES</H1>
          <div class="Markdown_ReactMarkdown__nlrzp">
            <P>
              Our commitment is to provide a safe, enjoyable, and competitive
              cricket environment for players aged U10 to U16, aligning with
              Cricket Australia's Junior Formats. Our rules cover everything
              from player equipment and match duration to team compositions and
              field setup, ensuring a balanced development focus for young
              cricketers.
            </P>
            <H2>Key Highlights for Parents and Coaches:</H2>
            <P>
              - Match formats tailored for each age group to foster skill
              development and enjoyment.
            </P>
            <P>
              - Safety equipment guidelines to keep our young players protected on
              the field.
            </P>
            <P>
              - Specifics on team sizes, batting, bowling, and fielding rules to
              ensure inclusive play.
            </P>

            <H3>Looking for More Details?</H3>
            <P>
              Access the complete set of rules to fully prepare your child or
              team for the season ahead. Download our comprehensive rules PDF
              and embrace the cricket journey with confidence.
            </P>
            <Paper
              radius="md"
              withBorder
              shadow="md"
              m={40}
              p="md"
              sx={{ backgroundColor: "#f1f7ff", textAlign: "center" }}
            >
              <CTABTN
                CTA={{
                  Href: "https://sjwca.s3.ap-southeast-2.amazonaws.com/Australia_Crickets_Junior_Formats_Playing_Conditions_88cf890680.pdf",
                  Name: "Download Full SJWCA Rules PDF",
                }}
                item={0}
                color={"#ff9813"}
              />
            </Paper>

            <P>
              Let's foster a love for cricket together, ensuring a rewarding
              experience for our young athletes.
            </P>
          </div>
        </div>
        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default sjwcarules;
