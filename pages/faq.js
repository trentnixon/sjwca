import { API } from "../config/index";
import MarkdownContainer from "../components/Structure/MarkdownContainer";
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import FormElementGroup from "../components/FormElements/FormElementGroup";

import { H1, H2, H3, H4 } from "../components/type";
const about = () => {
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`FAQs`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>FAQs</H1>
          {FAQS.map((q, i) => {
            return (
              <div key={i}>
                <H4>{q.Question}</H4>
                <FormElementGroup>
                  <MarkdownContainer>{q.Answer}</MarkdownContainer>
                </FormElementGroup>
              </div>
            );
          })}
          {<MarkdownContainer>{about.Description}</MarkdownContainer>}
        </div>
        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
    </div>
  );
};
export default about;

const FAQS = [
  {
    Question: "What Are The 2025 Season Dates?",
    Answer:
      "The season will commence on Sunday 4th May 2025 and run for 8-9 weeks up to and including Sunday 18th/25th June 2025.",
  },
  {
    Question:
      "I'm registered with a club team for the summer season—what do I need to do regarding the season permit?",
    Answer:
      "If you are currently registered with a club team this summer season, you will be prompted via Play HQ to complete a season permit—simply click through the &quot;season permit across&quot; prompt, and once your permit is approved, proceed to complete your registration and pay any associated fees; for more detailed instructions, please visit the Play Cricket Support website. https://playcricketsupport.cricket.com.au/hc/en-us/articles/6957106664079-What-is-a-Player-Led-Season-Permit-and-how-can-I-apply",
  },
  {
    Question: "Do You Need To Be Experienced?",
    Answer: "No. We cater for all playing standards",
  },
  {
    Question: "Do We Need Our Own Playing Equipment?",
    Answer:
      "Yes. You will need your personal equipment, including; bat, pads, gloves, helmet and a box.\nThere may be the opportunity to borrow gear but you will need to check with your nominated team manager.\n",
  },
  {
    Question: "What Equipment Is Supplied By The SWJCA?",
    Answer:
      "In season 2025 we’ll be supplying every team with 1 set of stumps, bails, markers, match balls and a kit bag. The team kit is included in registration costs and does not need to be returned at the end of the season!!",
  },
  {
    Question: "What Do We Wear?",
    Answer:
      "You can wear your normal cricket whites or club t-shirt and white pants. If you are in a team that wants to develop its own playing attire/uniform the design, colour etc that is fine also.",
  },
  {
    Question: "Where Are Games Played?",
    Answer:
      "We're currently confirming grounds with councils but to give you an idea, in 2023 matches were played in the following LGA's:\n- Blacktown\n- Campbelltown\n- Canada Bay\n- Canterbury-Bankstown\n- Centennial Parkland and Moore Park Trust\n- Cumberland\n- Ku-ring-gai\n- Liverpool\n- North Sydney\n- Northern Beaches\n- Penrith\n",
  },
  {
    Question: "Are Umpires Supplied For Each Game?",
    Answer: "No. Team Managers/Coaches will officiate the matches.",
  },
  {
    Question: "Can My Child Play Up An Age Group?",
    Answer:
      "Yes. You will need to register your child in the age group based on their DOB. Once registered please forward the registration confirmation with the request to move age groups",
  },
  {
    Question: "What Is The Cost?",
    Answer: "Individual registration costs $110.",
  },
  {
    Question: "Do You Accept Active Kids Vouchers?",
    Answer: "Yes!",
  },
  {
    Question: "Is There Training?",
    Answer:
      "No there is no training, so winter cricket doesn’t affect your normal winter sport training commitments.\nIf a team elects to train that is up the the manager/parents",
  },
  {
    Question: "What Are The Age Group Cut Offs?",
    Answer:
      "Based on feedback received, we have changed the age group dates. In past seasons, age groups were the same as the previous Summer. The updated age group cut off dates are as follows:\n- Under 16 Grade less than 16 years as at midnight 31st August 2023\n- Under 14 Grade less than 14 years as at midnight 31st August 2023\n- Under 12 Grade less than 12 years as at midnight 31st August 2023\n- Under 10 Grade less than 10 years as at midnight 31st August 2023\n",
  },
  {
    Question: "Will Age Groups Be Graded?",
    Answer: "Yes. We have multiple grades.",
  },
  {
    Question: "How Many Players Does Each Team Need?",
    Answer:
      "- U10’s can have up to 9 players participate per game. There can only be 7 players on the field at the same time.\n- U12’s can have up to 11 players participate per game. There can only be 9 players on the field at the same time.\n- U14’s and U16’s can have up to 11 players participate per game.\n",
  },
  {
    Question: "Who Do I Contact If I Have Further Questions?",
    Answer: "Please email sjwca@sydneyjuniorwintercricket.org.au",
  },
  {
    Question: "What Time Are Matches Played?",
    Answer:
      "Matches are played morning, lunchtime and afternoons on Sundays. Times vary week to week.",
  },
];
