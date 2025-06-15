import styled from "styled-components";

export const ProjectsSectionStyled = styled.section`
  width: 100%;
`;

export const ProjectsSectionContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;
export const ProjectsSectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
  }
`;

export const ProjectsSectionContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

// export const ProjectsSectionLeft = styled.div`
//   width: 100%;
// `;
// export const ProjectsSectionRight = styled.div`
//   width: 100%;
// `;


export const PrioritiesImage = styled.img`
  width: 216px;
`
