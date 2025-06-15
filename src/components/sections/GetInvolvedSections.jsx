import {
  GetInvolvedContainer,
  GetInvolvedContents,
  GetInvolvedLeft,
  GetInvolvedRight,
  GetInvolvedStyled,
  GetInvolvedTitle,
} from "../styles/sections/GetInvolvedSections.styled";

const GetInvolvedSections = () => {
  return (
    <GetInvolvedStyled>
      <GetInvolvedContainer>
        <GetInvolvedTitle>
          <h1>GET INVOLVED</h1>
          <p>You can become path of this noble course</p>
        </GetInvolvedTitle>

        <GetInvolvedContents>
          <GetInvolvedLeft>
            <h1>Volunteer</h1>
          </GetInvolvedLeft>
          <GetInvolvedRight>
            <h1>Hon. Tyson Kemege Merchandise & Shop</h1>
          </GetInvolvedRight>
        </GetInvolvedContents>
      </GetInvolvedContainer>
    </GetInvolvedStyled>
  );
};

export default GetInvolvedSections;
