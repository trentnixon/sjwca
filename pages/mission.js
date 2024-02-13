import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportersIcons from "../components/Structure/SupportersIcons";
import SupportingSideNav from "../components/Structure/SupportingSideNav";

const misson = () => {
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`Our Mission`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div class="Structure_Width70__1DM3-">
          <h2 class="">Our Mission</h2>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <p>
              To provide prospective and current junior cricketers the
              opportunity to play cricket during the winter months in a fun,
              safe and enjoyable atmosphere that fosters participation in
              cricket, the development of cricketing skills, and the building of
              life long friendships and personal skills.
            </p>
            <p>
              To administer and manage a highly professional, accountable and
              reputable junior winter cricket competition across the Sydney
              Metropolitan area, that becomes entrenched into the culture of
              junior sport in particular junior cricket in NSW.
            </p>
          </div>
          <h2 class="">Vision Statement</h2>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <p>
              To administer and manage a highly professional, accountable and
              reputable Junior Winter Cricket competition across the Sydney
              Metropolitan area that becomes entrenched into the culture of
              junior sport in particular junior cricket in NSW.
            </p>
          </div>
          <h2 class="">Values Statement</h2>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <p>The Sydney Junior Winter Cricket Association is committed to:</p>
            <ul>
              <li>
                The spirit and the associated traditions and values of cricket.
              </li>
              <li>The principles of equal opportunity.</li>
              <li>
                A high level of professionalism and accountability as required
                in the administration and management of a sporting association.
              </li>
              <li>
                The development of cricket and also non cricketing skills of
                players.
              </li>
              <li>
                The professional development of volunteers in particular those
                serving on the committee.
              </li>
              <li>
                The ability of cricket to make a difference to worthwhile causes
                that are non-political and non-religious.
              </li>
              <li>
                To provide a safe and enjoyable environment for all involved.
              </li>
              <li>
                To make cricket accessible to all children through the delivery
                of a cricket competition that is affordable and can be reached
                by all within the Sydney Metropolitan Area.
              </li>
              <li>
                The development and growth of participation levels in junior
                sport in particular cricket.
              </li>
              <li>
                To build and sustain strong relationships with cricketing and
                other sporting bodies as all levels in particular winter sport
                associations.
              </li>
              <li>
                To have a professional relationship based on cooperation,
                understanding and a commitment to healthy lifestyles for young
                people with all Government authorities in particular Local
                Councils.
              </li>
              <li>
                To build and sustain mutually beneficial relationships with
                businesses that are reputable for being responsible and ethical
                corporate citizens.
              </li>
            </ul>
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

export default misson;
