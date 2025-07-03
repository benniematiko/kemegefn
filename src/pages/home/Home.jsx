import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import MeetTyson from "../../components/sections/MeetTyson";
import PrioritiesSection from "../../components/sections/PrioritiesSection";
// import EventsSections from "../../components/sections/EventsSections";
import ProjectsSection from "../../components/sections/ProjectsSection";
import GetInvolvedSections from "../../components/sections/GetInvolvedSections";
import JoinSections from "../../components/sections/JoinSections";
import LatestSection from "../../components/sections/LatestSection";
import QuotesSections from "../../components/sections/QuotesSections";

const Home = () => {
  return (
    <div>

      
      <HeroSection />
      <JoinSections/>
      {/* <EventsSections /> */}
      <MeetTyson />
      <PrioritiesSection />
      <ProjectsSection />
      <GetInvolvedSections />
      <LatestSection/>
      <QuotesSections/>
    </div>
  );
};

export default Home;
