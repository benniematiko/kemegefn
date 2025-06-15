import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import MeetTyson from "../../components/sections/MeetTyson";
import PrioritiesSection from "../../components/sections/PrioritiesSection";
import EventsSections from "../../components/sections/EventsSections";
import ProjectsSection from "../../components/sections/ProjectsSection";
import GetInvolvedSections from "../../components/sections/GetInvolvedSections";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MeetTyson />
      <PrioritiesSection />
      <EventsSections />
      <ProjectsSection />
      <GetInvolvedSections />
    </div>
  );
};

export default Home;
