import React from "react";

import { LatestDatas } from "../../data/LatestDatas";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  LatestCards,
  LatestDate,
  LatestDescription,
  LatestImage,
  LatestSectionContainer,
  LatestSectionStyled,
  LatestSubTitle,
  LatestTitle,
  SingleLatest,
} from "../styles/sections/LatestSections.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";
import { Link } from "react-router-dom";

const LatestSection = () => {
  return (
    <LatestSectionStyled>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <LatestSectionContainer>
          <LatestTitle>
            <h1>Latest In Our Events, News & Updates </h1>
          </LatestTitle>

          <LatestCards>
            {LatestDatas.map((latestdata, index) => {
              return (
                <SingleLatest key={index}>
                  <LatestImage>
                    <img
                      src={latestdata.image}
                      alt=""
                      className="Latestimage"
                    />
                  </LatestImage>

                  <LatestDate>
                    {latestdata.date}
                  </LatestDate>

                  <Link>
                    <LatestSubTitle>
                      {latestdata.title}
                     
                      <div className="me" style={{ width: "120px", height: "6px", bgColor: "orange" }}></div>

                   

                    </LatestSubTitle>
                  </Link>

                  

                  {/* <LatestDescription>
                    {latestdata.description}
                  </LatestDescription> */}

                  {/* <CTAButton
                    href=""
                    primary
                    target="_blank"
                    margin="20px 0 0 0"
                  >
                    Learn More
                  </CTAButton> */}
                </SingleLatest>
              );
            })}
          </LatestCards>
        </LatestSectionContainer>
      </motion.div>
    </LatestSectionStyled>
  );
};

export default LatestSection;
