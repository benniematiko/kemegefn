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

  h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column; 
    font-size:1.3rem;  
  }

 


`;

export const SubmitInput = styled.input`
  padding: 10px 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-top: 12px;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background-color: #dee7e7;
  }
`

export const LabelDiv = styled.div`
  width: 100%;
  margin: 6px 0;

  label {
    font-size:1.1rem;
  }

  input {
    padding: 3px;
    border: none;
    border-radius: 4px;
    width: 60%;
  }
`

export const GetInvolvedRight = styled.div`
  width: 100%;
  width: 100%;
   background: #6e879c;
  color: white;
  padding: 30px 0 30px 30px;
  cursor: pointer;

  
`;


