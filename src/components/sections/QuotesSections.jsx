import React from "react";
import {
  QuotesSectionContainer,
  QuotesSectionContent,
  QuotesSectionStyled,
  QuotesSectionTitle,
} from "../styles/sections/QuotesSection.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const QuotesSections = () => {
  return (
    <QuotesSectionStyled>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <QuotesSectionContainer>
          <motion.p variants={slideUpVariants}>
          <QuotesSectionTitle>
            Quotes of Wisdom
          </QuotesSectionTitle>
          </motion.p>

          <QuotesSectionContent>
            <h1>
              “Education is the most powerful weapon which you can use to change
              the world.
            </h1>
            <p>-- Nelson Mandela</p>
          </QuotesSectionContent>
        </QuotesSectionContainer>
      </motion.div>
    </QuotesSectionStyled>
  );
};

export default QuotesSections;
