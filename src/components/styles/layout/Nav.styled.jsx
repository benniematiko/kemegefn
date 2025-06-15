import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`
  from{
    opacity: 0;
    transform: translate(50px)

  }
  to{
    opacity: 1;
    transform: translate(0px)

  }

`;

const navItemAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 98;

  padding: 0;
  background: rgba(2, 12, 27, 0.8);
  color: white;
  transition: all 0.15s ease-in;
`;

export const Navcontainer = styled.div`
  width: 86%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

export const Logo = styled.h1`
  width: auto;
  font-weight: 700;
  font-size: 2rem;
`;

export const MenuIcon = styled.div`
  display: none;
  padding: 0.7rem;
  border-radius: 5px;
  background: none;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  position: absolute;
  right: 40px;

  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(249, 105, 14, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2) " : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(249, 105, 14, 1) 100%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : "1")};
  transition: ${({ theme }) => theme.transition};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(249, 105, 14, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2) " : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  flex-wrap: wrap;
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    /* height: 100vh; */
    height: auto;
    position: fixed;
    background: #6e879c;
    top: 0;

    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;

    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NavItemStyled = styled.li`
  margin: 0.4rem 0.7rem;
  list-style: none;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)};
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  list-style: none;
  letter-spacing: 1.5px;

  &::after {
    content: "";
    width: 0%;
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors.orange};
    /* margin-top: 8px; */
    margin-top: 12px;

    transition: all 0.15s ease-in;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      margin: 0.7rem 0;
    }

    span {
      font-size: 12px;
      margin-bottom: 1rem;

      
    }
  }
`;


export const SocialIcons = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.9rem;
      font-size: 2.1rem;
    }
  }
`;
