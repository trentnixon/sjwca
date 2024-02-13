import React from "react";

import MarkdownContainer from "../../Structure/MarkdownContainer";
import { H2 } from "../../type";

const DisplayConference = ({ conferences, CLASS }) => {
  return (
    <div className={CLASS}>
      <H2>{conferences.Conference} CONFERENCE</H2>

      <MarkdownContainer>{conferences.About}</MarkdownContainer>
    </div>
  );
};

export default DisplayConference;
