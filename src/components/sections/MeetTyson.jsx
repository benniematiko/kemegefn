import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  MeetTysonContainer,
  MeetTysonContents,
  MeetTysonLeft,
  MeetTysonRight,
  MeetTysonRightp,
  MeetTysonSection,
  MeetTysonTitle,
} from "../styles/sections/MeetTyson.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const MeetTyson = () => {
  return (
    <MeetTysonSection>

      <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
        >

      <MeetTysonContainer>
        
          <MeetTysonContents>

            <motion.h1 variants={slideUpVariants}>


            <MeetTysonLeft>
              <img
                src="./images/kemege23.png"
                alt="meetkemege"
                className="meetkemege"
              />
            </MeetTysonLeft>

             </motion.h1>

            <MeetTysonRight>
              
                <MeetTysonTitle>
                  <motion.h2 variants={slideUpVariants}>Meet</motion.h2>
                  
                  <motion.h1 variants={slideUpVariants}>
                  Hon. Tyson Kemege
                   </motion.h1>

                   <motion.p variants={slideUpVariants}>A brief about me...</motion.p>
               
                </MeetTysonTitle>
             

              <motion.h1 variants={slideUpVariants}>
                <MeetTysonRightp>
                  Hon. TK was raised at the Komotobo Orphan Mission and now
                  resides in Ntimaru with his xxxx, xxxx, and their two xxxx,
                  xxx and xxxxx.
                </MeetTysonRightp>

                <br />
                <MeetTysonRightp>
                  He understands the escalating costs of family life—from fuel
                  and housing to healthcare—and the persistent neglect of our
                  communities. Security challenges, including cattle rustling
                  and instability, continue to affect our people, disrupting
                  even school programs.
                  <br />
                  <br />
                  For too long, politicians have prioritized personal egos over
                  tangible progress for our families.
                </MeetTysonRightp>

                <br />
              </motion.h1>

              {/* <div>
                <CTAButton href="#pwds" primary margin="20px 0 0 0">
                  Read more
                </CTAButton>
              </div> */}
            </MeetTysonRight>
          </MeetTysonContents>
        
      </MeetTysonContainer>

      </motion.div>
    </MeetTysonSection>
  );
};

export default MeetTyson;
