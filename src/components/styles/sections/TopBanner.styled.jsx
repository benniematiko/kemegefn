import styled from "styled-components";

export const TopBannerStyled = styled.section`
  width: 100%;
 background: ${({ theme }) => theme.colors.orange};
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const TopBannerStyledContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TopBannerStyledContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const TopBannerStyledLeft = styled.div`
  width: 100%;
  display: flex;
  

  p {
    margin-right: 20px;
    font-size: 16px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const TopBannerStyledRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: right;

  p {
    margin-left: 20px;
    font-size: 16px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white};

    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
