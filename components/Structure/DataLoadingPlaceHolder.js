import StructureStyles from "../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "./PageHeaderSmall";
import ContentContainer from "./ContentContainer";

import { H2 } from "../type";

const DataLoadingPlaceholder = (props) => {
  // In your component body
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`Team Registration`}
        SubCopy={`SJWCA 2025`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />
      <ContentContainer>
        <H2>{props.Copy}</H2>
      </ContentContainer>
    </div>
  );
};
export default DataLoadingPlaceholder;
