import styled from "styled-components";

export const CampaignsStyled = styled.section`
  width: 100%;
`;
export const CampaignsStyledContainer = styled.div`
  width: 100%;
`;
export const CampaignsStyledContent = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;

  h1 {
    color: ${( {theme }) => theme.colors.orange};
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.5rem;
    line-height: 22px;
    color: white;
    width: 60%;
    
  }
`;
export const CampaignsStyledTitle = styled.div`
  position: absolute;

  bottom: 150px;

  h1 {
    font-size: 3rem;
  }
`;

export const Campaignsblock = styled.div`
  width: 100%;
  background: #072f5f;
`;

export const Campaignsblocks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const Campaignblockleft = styled.div`
  width: 100%;
  
`;
export const Campaignblockright = styled.div`
  width: 100%;
  
`;
export const Campaignblockcomments = styled.div`
  width: 100%;
  background: orange;
  
`;
export const Campaignsblocktext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;
