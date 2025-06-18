import { Link } from "react-router-dom";
import { ProjectsDatas } from "../../data/ProjectsDatas";
import {
  PrioritiesImage,
  ProjectsSectionContainer,
  ProjectsSectionContent,
  ProjectsSectionStyled,
  ProjectsSectionTitle,
} from "../styles/sections/ProjectsSection.styled";

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyled>
      <ProjectsSectionContainer>
        <ProjectsSectionTitle>
          <h1>Achievements | Community Projects</h1>
          <p>Serving communities in Kuria East and the nation</p>
        </ProjectsSectionTitle>

        <ProjectsSectionContent>
          {ProjectsDatas.map((projectdata, index) => {
            return (
              <div key={index}>
                <div>
                  <Link>
                    <PrioritiesImage
                      src={projectdata.image}
                      alt=""
                      className="productImage"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </ProjectsSectionContent>
      </ProjectsSectionContainer>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSection;
