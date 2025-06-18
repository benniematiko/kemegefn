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
      <MeetTysonContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
        >
          <MeetTysonContents>
            <MeetTysonLeft>
              <img
                src="./images/kemege23.png"
                alt="meetkemege"
                className="meetkemege"
              />
            </MeetTysonLeft>

            <MeetTysonRight>
              <MeetTysonTitle>
                <h1>Meet Kemege</h1>
                <p>A brief about me</p>
              </MeetTysonTitle>
              <MeetTysonRightp>
                Hon. TK was raised at the Komotobo Orphan Mission and now
                resides in Ntimaru with his xxxx, xxxx, and their two xxxx, xxx
                and xxxxx.
              </MeetTysonRightp>

              <br />
              <MeetTysonRightp>
                He understands the escalating costs of family life—from fuel and
                housing to healthcare—and the persistent neglect of our
                communities. Security challenges, including cattle rustling and
                instability, continue to affect our people, disrupting even
                school programs.
                <br />
                <br />
                For too long, politicians have prioritized personal egos over
                tangible progress for our families.
              </MeetTysonRightp>

              <br />

              {/* <MeetTysonRightp>
              Hon. TK embodies a new generation of leaders committed to
              dismantling political gridlock and reforming a broken system.
              Having firsthand experience with the challenges faced by persons
              with disabilities, Hon. TK is dedicated to advocating for their
              rights and changing the prevailing narrative.
              <br />
              <br />
              His diverse support base spans farmers, ranchers, union workers,
              and law enforcement, reflecting his broad appeal and commitment to
              all communities.
            </MeetTysonRightp> */}

              <div>
                <CTAButton href="#pwds" primary margin="20px 0 0 0">
                  Read more
                </CTAButton>
              </div>
            </MeetTysonRight>
          </MeetTysonContents>
        </motion.div>
      </MeetTysonContainer>
    </MeetTysonSection>
  );
};

export default MeetTyson;
