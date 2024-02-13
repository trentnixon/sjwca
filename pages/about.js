import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportersIcons from "../components/Structure/SupportersIcons";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { H1 } from "../components/type";
const about = () => {
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`ABOUT`}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>ABOUT SJWCA</H1>
          <div class="undefined Markdown_ReactMarkdown__nlrzp">
            <p>
              The Sydney Junior Winter Cricket Association Inc. evolved from a
              social competition organised by the Association founder, Sam
              Almaliki, and friends in 2004 in the St. George region of Sydney.
              After initial success socially, in 2005, Sydney’s first and only
              junior winter cricket competition came about under the name the
              All Stars Winter Cricket Association Inc. Over the next three
              years the Association would achieve great success and expansion
              into areas beyond the St. George district; growing from 90 players
              in 2005 to near 500 in 2008, building a strong culture of a fair
              go for all and that all cricket is played in the right spirit.
            </p>
            <p>
              At the 2008 AGM, in recognition of the Association’s growing
              popularity, a proposal put by association President, Sam Almaliki,
              to expand the association across the greater Sydney metropolitan
              area was endorsed. This also brought about a change of name, to
              Sydney Junior Winter Cricket Association Inc. and the
              establishment of geographic zones, Western and Central Zone. With
              its reach into many parts of Sydney, in 2009 nearly 600 players
              took part and enjoyed a very successful and exciting competition,
              of which at its completion, the Association celebrated its 5th
              Anniversary.
            </p>
            <p>
              In 2009 the Association was also recognised by, and affiliated
              with, the NSW Districts Cricket Association Inc. In 2010, the
              Association built on its past success, taking the competition to
              Western Sydney and into areas such as Penrith and Blacktown and
              obtaining clubhouse headquarters at Schell Park, Liverpool.
            </p>
            <p>
              Changes in management took place in early 2014 following Sam
              Almaliki’s move to Melbourne to take up a job with Cricket
              Australia. Rob Stevenson assumed the role as president, and with
              the management help of Deenu Rajaratnam and Andrew Percy, has
              ensured the steady and continued growth of the competition to the
              present date, with over 170 teams and more than 1500 players
              participating across all parts of Sydney in 2021.
            </p>
            <p>
              We hope that through increasingly close collaboration with Cricket
              NSW and other grass roots cricketing bodies we can ensure even
              more growth of the competition’s playing numbers over the coming
              years.
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

export default about;
