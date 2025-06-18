import React from "react";
import {
  EventsSectionContainer,
  EventsSectionContent,
  EventsSectionLeft,
  EventsSectionRight,
  EventsSectionStyled,
  EventsSectionTitle,
} from "../styles/sections/EventsSections.styled";

const EventsSection = () => {
  return (
    <EventsSectionStyled>
      <EventsSectionContainer>
        <EventsSectionTitle>
          <h1>Events, News & Updates</h1>
        </EventsSectionTitle>

        <EventsSectionContent>
          <EventsSectionLeft>

            <div>Successfully accomplished events</div>

            <div class="listcontainer">
              <ul>
                <li>
                  <div class="event-date">June 10, 2025:</div>
                  Launch of the new Community Health App to improve rural
                  healthcare access.
                </li>
                <li>
                  <div class="event-date">May 25, 2025:</div>
                  Kemege featured in "Tech Innovators Africa" magazine for his
                  impactful projects.
                </li>
                <li>
                  <div class="event-date">May 10, 2025:</div>
                  Webinar on "Building Inclusive Tech Solutions" hosted by
                  Kemege.
                </li>
                <li>
                  <div class="event-date">April 20, 2025:</div>
                  Completed open-source contribution to a local language
                  translation tool.
                </li>
                <li>
                  <div class="event-date">April 1, 2025:</div>
                  Joined the African Developers Conference as a keynote speaker.
                </li>

                <li>
                  <div class="event-date">March 15, 2025:</div>
                  Participated in coding bootcamp focused on Java development.
                </li>
                <li>
                  <div class="event-date">February 28, 2025:</div>
                  Published tutorial on building accessible web apps.
                </li>
              </ul>
            </div>
          </EventsSectionLeft>

          <EventsSectionRight>
            <aside class="news-sidebar">
              <h3>Upcoming Highlights</h3>
              <div class="highlight">
                <strong>July 15, 2025:</strong> Community Hackathon registration
                closes.
              </div>
              <div class="highlight">
                <strong>August 1, 2025:</strong> Launch of new mentorship
                program.
              </div>
              <div class="highlight">
                <strong>Sept 5, 2025:</strong> Workshop: “Advanced Java
                Techniques.”
              </div>
            </aside>
          </EventsSectionRight>
        </EventsSectionContent>
      </EventsSectionContainer>
    </EventsSectionStyled>
  );
};

export default EventsSection;
