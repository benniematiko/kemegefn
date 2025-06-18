import styled from "styled-components";

export const FooterStyled = styled.section`
  width: 100%;
  background: #072f5f;
  padding: 30px 0;
`;


export const FooterStyledTop = styled.div`
  width: 100%;
  background: #072f5f;
`;

export const FooterStyledContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;


export const FooterStyledContent = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.white};

    font-size: 22px;
    line-height: 30px;
    /* color: #ffffff; */
    font-weight: 500;
    margin-bottom: 30px;
  }
`;



export const FooterCopyright = styled.div`
  width: 100%;
`;
