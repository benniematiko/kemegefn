import { PrioritiesDatas } from "../../data/PrioritiesDatas";
import {
  PrioritiesCards,
  PrioritiesSectionContainer,
  PrioritiesSectionStyled,
  PrioritiesTitle,
} from "../styles/sections/PrioritiesSection.styled";

const PrioritiesSection = () => {
  return (
    <PrioritiesSectionStyled>
      <PrioritiesSectionContainer>
        <PrioritiesTitle>
          <h1>Hon Tyson's Priorities </h1>
        </PrioritiesTitle>

        <PrioritiesCards>
           {PrioritiesDatas.map((prioritydata, index) => {
          return <div>{prioritydata.title}</div>;
        })}
        </PrioritiesCards>


       
      </PrioritiesSectionContainer>
    </PrioritiesSectionStyled>
  );
};

export default PrioritiesSection;
