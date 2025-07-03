import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0%, 20%, 50%, 80%,100% {
      transform: translateY(0)      
    }
    40% { 
      transform: translateY(-30px)
    }
    60% { 
      transform: translateY(-15px)
    }
      
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
`;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.1) 100%
    ),
    url("./images/hero-banner.jpg") center no-repeat;
  /* background: url("./images/hero-banner.jpg") center no-repeat; */
  /* background-size: cover; */
  background-size: cover;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 58rem;
  padding-top: 80px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  margin-left: 90px;

  h1 {
    font-size: 42px;
    font-weight: 500;

    line-height: 55px;
    /* background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => theme.colors.purple} 50%,
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  }

  div {
    margin: 2.5rem 0;
  }

  /* Mobile responsivenness */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      line-height: 20px;
      font-size: 1.5rem;
    }
  }
`;

export const StyledArrowDown = styled.a`
  width: 100%;
  position: absolute;
  bottom: 50px;

  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 30px;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite 8s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

// export const HeroSocialIcons = styled.div`
//   position: fixed;
//   right: 20px;

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     bottom: 70px;
//   }
// `;

export const HeroSocialIcon = styled.div`
  display: flex;
  color: white inherit;
    

  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 70px;
  }
`;

export const SocialIcon = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(249, 105, 14, 0.1);
  font-size: 22px;
  margin-right: 18px;
  cursor: pointer;

  svg {
    /* color: rgba(249, 105, 14); */
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    
  }

  &:hover {
    svg {
      animation: ${rotate} 1.5s linear infinite;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
