import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import SupportersIcons from "../components/Structure/SupportersIcons";

import { H1 } from "../components/type";
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
            <p>
              We use the{" "}
              <a href="https://sjwca.s3.ap-southeast-2.amazonaws.com/Australia_Crickets_Junior_Formats_Playing_Conditions_88cf890680.pdf">
                Cricket Australia Junior Formats
              </a>{" "}
              rules.
            </p>
            <p>
              For a full list of the rules by Age group, use these guidelines
              provided by CricketNSW {' '}
              <a href="https://sjwca.s3.ap-southeast-2.amazonaws.com/Australia_Crickets_Junior_Formats_Playing_Conditions_88cf890680.pdf">
                SJWCA Rules
              </a>
            </p>
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
