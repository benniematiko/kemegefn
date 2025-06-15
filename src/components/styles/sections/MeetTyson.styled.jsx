import styled from "styled-components";

export const MeetTysonSection = styled.section`
  width: 100%;
`;

export const MeetTysonContainer = styled.div`
  width: 86%;
  /* display: flex;
  justify-content: center; */
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 960px) {
    width: 92%;
  }
`;

export const MeetTysonTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    
  }

  p {
    font-size: 18px;
    padding-bottom: 30px;
  }
`;

export const MeetTysonContents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 30px;

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export const MeetTysonLeft = styled.div`
  width: 100%;

  @media (max-width: 960px) {
    img {
      width: 100%;
    }
  }
`;
export const MeetTysonRight = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const MeetTysonRightp = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 24px;
`;
