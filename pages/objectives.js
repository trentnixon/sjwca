import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportersIcons from "../components/Structure/SupportersIcons";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { H2 } from "../components/type";
const objects = () => {
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`Objectives`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H2>Objects of the Association</H2>
          <div class="Markdown_ReactMarkdown__nlrzp">
            <p>
              The Association is established solely for the Objects. The Objects
              of the Association are to:
            </p>
            <ol>
              <li>
                Participate as a member of SSO so Junior Winter Cricket can be
                conducted, encouraged, promoted, advanced and administered in
                the region and New South Wales.
              </li>
              <li>
                Conduct, encourage, promote, advance and administer Junior
                Winter Cricket throughout the Region
              </li>
              <li>
                Ensure the maintenance and enhancement of the Association, the
                SSO, the NSO, the Members and Winter Cricket, along with its
                standards, quality and reputation for the benefit of the Members
                and Junior Winter Cricket.
              </li>
              <li>
                At all times promote mutual trust and confidence between the
                Association, the SSO, the NSO and the Members in pursuit of
                these Objects.
              </li>
              <li>
                At all times act on behalf of, and in the interest of, the
                Members and Junior Winter Cricket in the Region.
              </li>
              <li>
                Promote the economic and community service success, strength and
                stability of the Association, the Members and Winter Cricket in
                the Region.
              </li>
              <li>
                Affiliate and otherwise liaise with the SSO and adopt its rule
                and policy framework to further these Objects and Junior Winter
                Cricket.
              </li>
              <li>Use and protect the Intellectual Property.</li>
              <li>
                Apply the property and capacity of the Association towards the
                fulfilment and achievement of these Objects.
              </li>
              <li>
                Strive for government, commercial and public recognition of the
                Association as the controlling body for Junior Winter Cricket in
                the Region.
              </li>
              <li>
                Abide by, promulgate, enforce and secure uniformity in the
                application of the rules of Junior Winter Cricket as may be
                determined from time to time by NSO or IF and as may be
                necessary for the management and control ofJunior Winter Cricket
                and related activities in the Region.
              </li>
              <li>
                Advance the operations and activities of the Association
                throughout the Region.
              </li>
              <li>
                Further develop Junior Winter Cricket into an organised
                institution and with these Objects in view, to foster, regulate,
                organise and manage examinations, competitions, displays and
                other activities and to issue badges, medallions and
                certificates and award trophies to successful Members.
              </li>
              <li>
                Review and/or determine any matters relating to Junior Winter
                Cricket which may arise, or be referred to it, by any Member.
              </li>
              <li>Recognise any penalty imposed by any Member</li>
              <li>
                Act as arbiter (as required) on all matters pertaining to the
                conduct of Junior Winter Cricket in the Region, including
                disciplinary matters.
              </li>
              <li>
                Pursue such commercial arrangements, including sponsorship and
                marketing opportunities as are appropriate to further the
                interests of Junior Winter Cricket in the Region.
              </li>
              <li>
                Have regard to the public interest in its operations.d by NSO or
                the SSO, including (as relevant and applicable) member
                protection, anti-doping, health and safety, junior sport,
                infectious diseases and such other matters as may ariseas issues
                to be addressed in Junior Winter Cricket.
              </li>
              <li>
                Represent the interests of its Members and of Junior Winter
                Cricket generally in any appropriate forum in the Region.
              </li>
              <li>Have regard to the public interest in itsoperations.</li>
              <li>
                Do all that is reasonably necessary to enable these Objects to
                be achieved and enable Members to receive the benefits which
                these Objects are intended to achieve.
              </li>
              <li>
                Promote the health and safety of Members and all other
                participants in Junior Winter Cricket in the Region.
              </li>
              <li>
                Seek and obtain improved facilities for the enjoyment of Junior
                Winter Cricket in the Region.
              </li>
              <li>
                Undertake and or do all such things or activities which are
                necessary, incidental or conducive to the advancement of these
                Objects.
              </li>
            </ol>
          </div>{" "}
        </div>
        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default objects;
