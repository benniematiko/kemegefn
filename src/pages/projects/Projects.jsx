import React from "react";

import {
  Projectblockcomments,
  Projectblockleft,
  Projectblockright,
  ProjectsAddedphotos,
  Projectsblock,
  ProjectsblocksContent,
  ProjectsblocksListing,
  Projectsblocktext,
  ProjectsStyled,
  ProjectsStyledContainer,
  ProjectsStyledContent,
  ProjectsStyledStanding,
  ProjectsStyledTitle,
} from "./Projects.styled";

const Projects = () => {
  return (
    <ProjectsStyled>
      <img src="./images/cs01.jpeg" height="100%" width="100%" />

      <ProjectsStyledContainer>
        <ProjectsStyledContent>
          <ProjectsStyledTitle>
            <h1>LEADING BY ACTION - NOT LIP SERVICE </h1>
          </ProjectsStyledTitle>
        </ProjectsStyledContent>

        <Projectsblock>
          <ProjectsStyledStanding>
            <h1>Putting ideas into action to actualize projects</h1>
            <p>
              Hon Tyson Kemege believes that good ideas ought to be put into
              action.
            </p>
            <p>
              His actions always means undertaking projects that uplift the
              people he leads. Encouraging them to focus on undertaking projects
              that uplift their lives.
            </p>

            <p>Here are some of the projects he has undertaken:</p>
          </ProjectsStyledStanding>
        </Projectsblock>

        <ProjectsblocksListing>
          <Projectblockleft>
            <h2> 1.</h2>
            <h1> Community Service & Donations</h1>

            <p>
              Every child deserves to learn in a safe, clean, and inspiring
              environment. Our schools should be places where students feel
              supported, where teachers have the tools they need to succeed, and
              where the facilities reflect the value we place on education.
              That’s why we are taking real action to improve school
              environments—investing in modern infrastructure, promoting mental
              health resources, and ensuring every classroom is a place where
              both students and educators can thrive.
            </p>
          </Projectblockleft>

          <Projectblockright>
            <img src="./images/kemege203.png" height="100%" width="100%" />
          </Projectblockright>
        </ProjectsblocksListing>

        <ProjectsblocksListing>
          <Projectblockright>
            <img src="./images/kemege211.jpeg" height="100%" width="100%" />
            <h1 style={{ fontStyle: "italic", marginTop: "10px" }}>
              In the picture: Hon Tyson Kemege and other leaders are laying
              foundation stone for construction of Gibarori Secondary School
            </h1>
          </Projectblockright>
          <Projectblockleft>
            <h2> 2. </h2>
            <h1> Working for a better education system </h1>

            <p>
              Good education is the foundation of a strong and thriving
              community. That’s why we are taking bold steps to improve our
              education system—by expanding access,improving on quality, and
              investing in more teachers and modern equipment. Every child
              deserves access to a quality educationno matter where they live or
              what they earn. Our commitment is clear: better education system
              for every child in Kuria East, today and for generations to come.
            </p>
          </Projectblockleft>
        </ProjectsblocksListing>

        <ProjectsblocksListing>
          <Projectblockleft>
            <h2> 3. </h2>
            <h1> Inspiring the next generation</h1>

            <p>
              Our future depends on the dreams, talents, and determination of
              the next generation. It is our responsibility to inspire and
              empower young people—to give them the education, opportunities,
              and support they need to succeed. By investing in youth programs,
              leadership development, and access to innovation and creativity,
              we are building a brighter tomorrow. Together, we can help every
              young person believe in their potential and reach for greatness
            </p>
          </Projectblockleft>

          <Projectblockright>
            <img src="./images/kemege208.jpeg" height="100%" width="100%" />
          </Projectblockright>
        </ProjectsblocksListing>

        <ProjectsblocksListing>
          <Projectblockright>
            <img src="./images/kemege219.jpeg" height="100%" width="100%" />

            <h1 style={{ fontStyle: "italic", marginTop: "10px" }}>
              Hon Tyson Kemege's Kuria East Constituency Tournament: It keeps
              grows year after year
            </h1>
          </Projectblockright>
          <Projectblockleft>
            <h2> 4. </h2>
            <h1> Kemege's Kuria East Constituency Tournament</h1>

            <p>
              The tourments scouts for talent in youth. It also keeps youth
              engaged positively. The rewards given are used for imortant
              matters such as school fees or buying uniforms.
            </p>

            {/* <div>
              <img src="./images/kemege217.jpeg"  width="30%" height="auto" />

              <img src="./images/kemege218.jpeg" alt="" width="30%" height="auto" />
            
              <img src="./images/kemege218.jpeg" alt="" width="30%" height="auto" />
            </div> */}
          </Projectblockleft>
        </ProjectsblocksListing>
      </ProjectsStyledContainer>

      <ProjectsAddedphotos>
        <img src="./images/kemege218.jpeg" alt="" width="100%" height="auto" />
        <img src="./images/kemege223.jpeg" width="100%" height="auto" />
        <img src="./images/kemege220.jpeg" width="100%" height="auto" />
        <img src="./images/kemege222.jpeg" alt="" width="100%" height="auto" />
        <img src="./images/kemege221.jpeg" alt="" width="100%" height="auto" />

        <img src="./images/kemege221.jpeg" alt="" width="100%" height="auto" />
        <img src="./images/kemege219.jpeg" width="100%" height="auto" />

        <img src="./images/kemege222.jpeg" alt="" width="100%" height="auto" />

        <img src="./images/kemege226.jpeg" alt="" width="100%" height="auto" />
        <img src="./images/kemege225.jpeg" alt="" width="100%" height="auto" />

        <img src="./images/kemege223.jpeg" alt="" width="100%" height="auto" />
        <img src="./images/kemege224.jpeg" alt="" width="100%" height="auto" />
      </ProjectsAddedphotos>

      <ProjectsStyledContainer>
        <Projectblockcomments>
          <Projectsblocktext>
            <h1>
              " My mission is to make sure that everyone gets support to thrive
            </h1>

            <button className="btn">Join me</button>
          </Projectsblocktext>
        </Projectblockcomments>
      </ProjectsStyledContainer>
    </ProjectsStyled>
  );
};

export default Projects;
