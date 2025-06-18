import styled from "styled-components";

export const MeetTysonSection = styled.section`
  width: 100%;
  padding: 60px 0;
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

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    /* text-align: left; */
    
  }

  p {
        
    font-size: 1.9rem;
    line-height: 2.8rem;
    margin-bottom: 20px;
    font-weight: 200;
   
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
  font-size: 1.9rem;
  line-height: 2.8rem;
  font-weight: 200;
`;
