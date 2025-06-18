import React from "react";
import {
  FooterStyled,
  FooterStyledContainer,
  FooterStyledContent,
  FooterStyledTop,
} from "../styles/layout/Footer.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterStyledTop>
        <FooterStyledContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
          >
            <FooterStyledContent>
              <div className="services">
                <motion.h1 variants={slideUpVariants}>
                  <h1>Services</h1>
                </motion.h1>

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
                <motion.h1 variants={slideUpVariants}>
                  <h1>Usefullinks</h1>
                </motion.h1>

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
                <motion.h1 variants={slideUpVariants}>
                  <h1>Contactinfo</h1>
                </motion.h1>

                <span>Location</span>
                <span>40, Ntimaru,</span>
                <span>Migori, Kenya.</span>
                <span>Phone</span>
                <span>+254 735 057 260</span>
                <span> Email</span>
                <span>info@tysonkemege.ke</span>
              </div>
              <div className="download">
                <motion.h1 variants={slideUpVariants}>
                  <h1>Download</h1>
                </motion.h1>
              </div>
            </FooterStyledContent>
          </motion.div>
        </FooterStyledContainer>
      </FooterStyledTop>
    </FooterStyled>
  );
};

export default Footer;
