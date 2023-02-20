import React, { useEffect } from "react";

import PrivacyHeader from "./PrivacyHeader";
import Body from "./Body";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
    <PrivacyHeader />
    <Body />
  </>;
};

export default Privacy;
