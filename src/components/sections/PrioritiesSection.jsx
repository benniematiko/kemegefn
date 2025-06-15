import { PrioritiesDatas } from "../../data/PrioritiesDatas";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  PrioritiesCards,
  PrioritiesDescription,
  PrioritiesImage,
  PrioritiesSectionContainer,
  PrioritiesSectionStyled,
  PrioritiesSubTitle,
  PrioritiesTitle,
  SinglePriorities,
} from "../styles/sections/PrioritiesSection.styled";

const PrioritiesSection = () => {
  return (
    <PrioritiesSectionStyled>
      <PrioritiesSectionContainer>
        <PrioritiesTitle>
          <h1>Hon. Tyson's Priorities </h1>
        </PrioritiesTitle>

        <PrioritiesCards>
          {PrioritiesDatas.map((prioritydata, index) => {
            return (
              <SinglePriorities key={index}>
                <PrioritiesImage>
                  <img
                    src="./images/kemege10.jpg"
                    alt=""
                    className="prioritiesimage"
                  />
                </PrioritiesImage>
                <PrioritiesSubTitle>{prioritydata.title}</PrioritiesSubTitle>
                <PrioritiesDescription>
                  {prioritydata.description}
                </PrioritiesDescription>

                <CTAButton href="" primary target="_blank" margin="20px 0 0 0">
                  Learn More
                </CTAButton>
              </SinglePriorities>
            );
          })}
        </PrioritiesCards>
      </PrioritiesSectionContainer>
    </PrioritiesSectionStyled>
  );
};

export default PrioritiesSection;
