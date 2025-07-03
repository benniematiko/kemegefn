import styled from "styled-components";

export const QuotesSectionStyled = styled.section`
  width: 100%;
`;
export const QuotesSectionContainer = styled.section`
  width: 86%;
  margin: 0 auto;
`;
export const QuotesSectionTitle = styled.section`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  padding-top: 50px;

  p {
    font-size: 2rem;
  }
  

  
`;

export const QuotesSectionContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    width: 60%;
    /* position: relative; */
    display: block;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    margin: 20px 0;
    justify-content: center;
    color: ${({ theme }) => theme.colors.orange};

    
  
  }
  p {
      color:  black;
      margin: 50px 0;
      font-size: 2rem;
      font-style: italic;
    }
`;
