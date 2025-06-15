import styled from "styled-components";

export const GetInvolvedStyled = styled.section`
  width: 100%;
  background: white;
  padding: 30px 0;
`;

export const GetInvolvedContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;

export const GetInvolvedTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  h1 {
    font-size: 2.5rem;
  }

  p{
    font-size: 18px;
  }
`;


export const GetInvolvedContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);


`;



export const GetInvolvedLeft = styled.div`
  width: 100%;
  background: orange;
  color: white;
  padding: 30px 0 30px 30px;
  cursor: pointer;
`;

export const GetInvolvedRight = styled.div`
  width: 100%;
  width: 100%;
   background: #6e879c;
  color: white;
  padding: 30px 0 30px 30px;
  cursor: pointer;
`;
