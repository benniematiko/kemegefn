import styled from "styled-components";

export const JoinSectionsStyled = styled.section`
  width: 100%;
  /* background: rgba(2, 12, 27, 1); */
  background: #072f5f;

  padding: 60px 0;
`;
export const JoinSectionsContainer = styled.section`
  width: 86%;
  margin: 0 auto;
`;
export const JoinSectionsContents = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export const JoinSectionsLeft = styled.section`
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 42px;
    margin-bottom: 30px;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.9rem;
    line-height: 2.8rem;
    margin-bottom: 20px;
    font-weight: 200;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const JoinSectionsRight = styled.section`
  width: 100%;
`;
