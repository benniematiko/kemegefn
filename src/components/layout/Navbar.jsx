import { useState } from "react";

import { Link } from "react-router-dom";
import {
  LineOne,
  LineTwo,
  LineThree,
  Logo,
  MenuIcon,
  Nav,
  Navcontainer,
  NavList,
  NavItemStyled,
  NavLink,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { NavItems } from "../../data/NavItems";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";
import TopBanner from "./TopBanner";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <TopBanner/>
      <Nav>
        
        <Navcontainer>
          <div>
            <Link to="/">
              <Logo>Hon. Tyson Kemege</Logo>
              <p>My calling is to serve people</p>
            </Link>
          </div>
          <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <LineOne menuOpen={menuOpen} />
            <LineTwo menuOpen={menuOpen} />
            <LineThree menuOpen={menuOpen} />
          </MenuIcon>
          <NavList menuOpen={menuOpen}>
            {NavItems &&
              NavItems.map((navItem, index) => (
                <NavItemStyled
                  key={index}
                  index={index}
                  menuOpen={menuOpen}
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.isProfile ? (
                    <NavLink href="#hero-section">
                      <Profile>
                        <img src="./images/logo.jpg" alt="profile-pic" /> 
                        <span>Hon Tyson Kemege</span>
                        
                      </Profile>
                    </NavLink>
                  ) : null}
                 
                  {navItem.text ? (
                    <NavLink href={navItem.href}>{navItem.text}</NavLink>
                  ) : null}

                  {navItem.hasSocialIcons ? (
                    <SocialIcons>
                      <NavLink href="#facebook" target="_blank">
                        <FaFacebook />
                      </NavLink>
                      <NavLink href="#twitter" target="_blank">
                        <FaTwitter />
                      </NavLink>
                      <NavLink href="#instagram" target="_blank">
                        <FaInstagram />
                      </NavLink>
                    </SocialIcons>
                  ) : null}
                  {navItem.hasCTA ? (
                     <CTAButton href="" target="_blank">
                      Community Engagement(PDF)
                     </CTAButton>
                  ) : null }
                </NavItemStyled>
              ))}
          </NavList>
        </Navcontainer>
      </Nav>
    </>
  );
};
