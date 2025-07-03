import React from "react";
import {
  FooterStyled,
  FooterStyledContainer,
  FooterStyledContent,
  FooterStyledTop,
} from "../styles/layout/Footer.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";
import { Link } from "react-router-dom";

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

                <motion.h1 variants={slideUpVariants}>
                  <ul>
                    <li>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <Link>Gallery</Link>
                    </li>
                    <li>
                      <Link>Programs</Link>
                    </li>
                    <li>
                      <Link>Events</Link>
                    </li>
                    <li>
                      <Link>News</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                  </ul>
                </motion.h1>
              </div>
              <div className="usefullinks">
                <motion.h1 variants={slideUpVariants}>
                  <h1>Usefullinks</h1>
                </motion.h1>

                <motion.h1 variants={slideUpVariants}>
                  <ul>
                    <li>
                      <Link>Join Us</Link>
                    </li>
                    <li>
                      <Link>Donate</Link>
                    </li>
                    <li>
                      <Link>Volunteer</Link>
                    </li>
                    <li>
                      <Link>Subscribe</Link>
                    </li>
                    <li>
                      <Link>Intern</Link>
                    </li>
                    <li>
                      <Link>Careers</Link>
                    </li>
                  </ul>
                </motion.h1>
              </div>
              <div className="contactinfo">
                <motion.h1 variants={slideUpVariants}>
                  <h1>Contact Info</h1>
                </motion.h1>

                <motion.h1 variants={slideUpVariants}>
                  <ul>
                    <li>Location</li>
                    <li>40, Ntimaru,</li>
                    <li>Migori, Kenya.</li>
                    <li>Phone: +254 735 057 260</li>

                    <li> Email: info@tysonkemege.ke</li>
                  </ul>
                </motion.h1>
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
