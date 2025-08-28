// import styled from "styled-components";



// export const PwdsupportStyled = styled.section`
//   width: 100%;
// `;
// export const PwdsupportContainer = styled.section`
//   width: 86%;
//   margin: 0 auto;
  
// `;

// export const PwdsupportTitle = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 30px 0;

//   h1 {
//     width: 70%;
//     font-size: 2.3rem;
//     text-align: center;
//   }
// `;


// export const PwdsupportText = styled.div`
  
//   width: 100%; 
//   font-size: 18px;
 
//   text-align: center;
//   padding-bottom: 30px;

//   p {
//     width: 70%;
//     margin: 0 auto;
    
//   }


  
// `;

// export const PwdsupportBox = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap:30px;
// `



// export const Pwdsupportleft = styled.div`
//   width: 100%;
// `

// export const PwdsupportRight = styled.div`
//   width: 100%;
// `





import styled from "styled-components";

export const PwdsupportStyled = styled.section`
  width: 100%;
  position: relative;
`;
export const PwdsupportStyledContainer = styled.div`
  width: 100%;
`;

export const PwdsupportStyledStanding = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;

  h1 {
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.orange};
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

export const PwdsupportStyledContent = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;
`;
export const PwdsupportblocksListing = styled.div`
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

export const Pwdblockleft = styled.div`
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

export const Pwdsupportblock = styled.div`
  width: 100%;
  background: #072f5f;
  padding: 60px 0;
`;

export const PwdsupportStyledTitle = styled.div`
  position: absolute;
  bottom: 100px;

  h1 {
    font-size: 3rem;
    width: 50%;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PwdsupportblocksContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const Pwdblockright = styled.div`
  width: 100%;
`;
export const Pwdblockcomments = styled.div`
  width: 100%;
  background: orange;
  padding: 120px 0;

  h1 {
    font-size: 3rem;
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Pwdsupportblocktext = styled.div`
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
