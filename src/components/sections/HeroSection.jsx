import { FaTwitter } from "react-icons/fa6";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  HeroContent,
  HeroSocialIcon,
  SocialIcon,
  StyledArrowDown,
  StyledHeroSection,
} from "../styles/sections/HeroSection.styled";
import { FaArrowDown, FaFacebook, FaInstagram } from "react-icons/fa";



import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const HeroSection = () => {
  return (
    <StyledHeroSection>

      <motion.div

      initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >

        <HeroContent>
        <h1>A Leader . Family Man . Community Mobilizer</h1>
        <div>
          <CTAButton href="/projects">Community Projects</CTAButton>
          <CTAButton href="/pwdsupport" primary margin="0 0 0 20px">
            Support for PWDs
          </CTAButton>
        </div>

        <HeroSocialIcon>
          <SocialIcon href="#" target="_blank">
            <FaTwitter />
          </SocialIcon>

          <SocialIcon href="#" target="_blank">
            <FaFacebook />
          </SocialIcon>

          <SocialIcon href="#" target="_blank">
            <FaInstagram />
          </SocialIcon>
        </HeroSocialIcon>
      </HeroContent>



      </motion.div>



      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      
    </StyledHeroSection>
  );
};

export default HeroSection;
