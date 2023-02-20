import React, { useEffect } from 'react';
import AboutUsHeader from "./AboutUsHeader";
import Mision from './Mision';
import Team from './Team';
import WhyWeStarted from "./WhyWeStarted";
import Authors from './Authors';
import { Join } from "../../@components";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutUsHeader />
      <Mision />
      <Team />
      <WhyWeStarted />
      <Authors />
      <Join />
    </>
  );
};

export default AboutUs;
