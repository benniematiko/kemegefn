// import styled from "styled-components";

// export const ProjectsSectionStyled = styled.section`
//   width: 100%;
// `;
// export const ProjectsSectioncontainer = styled.section`
//   width: 86%;
//   margin: 0 auto;
// `;



import styled from "styled-components";

export const ProjectsStyled = styled.section`
  width: 100%;
  position: relative;
`;
export const ProjectsStyledContainer = styled.div`
  width: 100%;
`;

export const ProjectsStyledStanding = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;

  h1 {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  p {
    width: 60%;
    font-weight: 200;
    font-size: 1.9rem;
    line-height: 2.8rem;
    color: white;
    margin-bottom: 3rem;
  }
`;

export const ProjectsStyledContent = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;
`;
export const ProjectsblocksListing = styled.div`
  width: 86%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 60px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(1, 1fr);    
    gap: 30px;
   
  }
`;

export const Projectblockleft = styled.div`
  width: 100%;
  padding-left: 12px;

  h2 {
    width: 10%;
    padding: 20px;
    background-color: orange;
    font-size: 42px;
  }
  h1 {
    margin-bottom: 15px;
    font-size: 36px;
  }

  p {
    font-size: 1.9rem;
    line-height: 2.8rem;
    font-weight: 200;
  }
`;

export const Projectsblock = styled.div`
  width: 100%;
  background: #072f5f;
  padding: 60px 0;
`;

export const ProjectsStyledTitle = styled.div`
  position: absolute;
  bottom: 100px;

  h1 {
    font-size: 3rem;
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProjectsblocksContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const Projectblockright = styled.div`
  width: 100%;
`;
export const Projectblockcomments = styled.div`
  width: 100%;
  background: orange;
  padding: 120px 0;

  h1 {
    font-size: 3rem;
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Projectsblocktext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    padding: 12px 20px;
    background-color: #04244d;
    outline: none;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    font-size: 22px;
    color: white;
    border-radius: 4px;

    &:hover {
      background-color: #0d305e;
    }
  }
`;


export const ProjectsAddedphotos = styled.div`
  width: 86%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  flex-wrap: wrap;
`
