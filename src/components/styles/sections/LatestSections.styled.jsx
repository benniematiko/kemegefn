import styled from "styled-components";

export const LatestSectionStyled = styled.section`
  width: 100%;
  background: white;
  padding: 30px 0;
`;

export const LatestSectionContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;

export const LatestTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 2.2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
export const LatestCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export const SingleLatest = styled.div`
  width: 100%;
  margin-bottom: 40px;
  position: relative;
`;

export const LatestImage = styled.div`
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const LatestSubTitle = styled.div`
  width: 60%;
  
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 12px 0;
  font-size: 18px;  
  color: white;
  transform: translate(-50%, -50%);
  /* font-size: 2rem; */
  font-weight: 500;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

export const LatestDate = styled.div`
  position: absolute;
  top: 50px;
  left: 24px;
  padding: 10px 12px;
  background-color: orange;
  border-radius: 4px;
  font-size: 1.5rem;

  
`;
export const LatestDescription = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
`;
