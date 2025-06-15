import styled from "styled-components";

export const PrioritiesSectionStyled = styled.section`
  width: 100%;
  background: white;
  padding: 30px 0;
`;

export const PrioritiesSectionContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;

export const PrioritiesTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 2.2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
export const PrioritiesCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 30px;

  @media(max-width: ${( { theme }) => theme.mobile}){
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  

  }
`;

export const SinglePriorities = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const PrioritiesImage = styled.div`
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const PrioritiesSubTitle = styled.div`
  width: 100%;
  font-weight: 500;
  padding: 12px 0;
  font-size: 18px;
`;

export const PrioritiesDescription = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
`;
