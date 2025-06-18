import React from "react";
import {
  FooterStyled,
  FooterStyledBottom,
  FooterStyledContainer,
  FooterStyledContent,
  FooterStyledTop,
} from "../styles/layout/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterStyledTop>
        <FooterStyledContainer>
          <FooterStyledContent>
            <div className="services">
              <h1>Services</h1>

              <ul>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Programs</li>
                <li>Events</li>
                <li>News</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="usefullinks">
              <h1>usefullinks</h1>
              <ul>
                <li></li>
                <li>Join Us</li>
                <li>Donate</li>
                <li>Volunteer</li>
                <li>Subscribe</li>
                <li>Intern</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="contactinfo">
              <h1>contactinfo</h1>oioioioioioi
              <span>Location</span>
              <span>40, Ntimaru,</span>
              <span>Migori, Kenya.</span>
              <span>Phone</span>
              <span>+254 735 057 260</span>
              <span> Email</span>
              <span>info@tysonkemege.ke</span>
            </div>
            <div className="download">
              <h1>download</h1>
            </div>
          </FooterStyledContent>
        </FooterStyledContainer>
      </FooterStyledTop>

      <FooterStyledBottom>
        <p>© 2024. Tyson Kemege Digital Spaces. All Rights Reserved. </p>
      </FooterStyledBottom>
    </FooterStyled>
  );
};

export default Footer;
