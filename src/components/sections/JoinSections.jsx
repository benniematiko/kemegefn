import React from "react";
import {
  JoinSectionsContainer,
  JoinSectionsContents,
  JoinSectionsLeft,
  JoinSectionsRight,
  JoinSectionsStyled,
} from "../styles/sections/JoinSections.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const JoinSections = () => {
  return (
    <JoinSectionsStyled>
      <JoinSectionsContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
        >
          <JoinSectionsContents>
            <JoinSectionsLeft>
              <motion.h1 variants={slideUpVariants}>
                <h1>Habari wazalendo!</h1>
              </motion.h1>

              <p>
                Born and bred at Komotobi mission, I’ve grown up here and I love
                our homeland! It really is the jewel in our beloved county of
                Migori. It's’ my mission to ensure that we continue to thrive.
              </p>

              <p>
                I’m passionate about Kuria East and the people who live here. As
                the Nominated county MP for Migori county, it’s my mission to
                represent you, and to make sure your voices are heard and our
                town gets the representation that it deserves.
              </p>
              <p>
                In the future, I desire to representm you, my beloved people, in
                the national assemby. I humbly ask you all to join me in this
                noble journey.
              </p>

              <div>
                <CTAButton
                  href="/campaigns"
                  primary
                  target="_blank"
                  style={{ marginTop: "14px" }}
                >
                  Read my story
                </CTAButton>
              </div>
            </JoinSectionsLeft>

            <JoinSectionsRight>
              <img
                src="./images/join.png"
                alt=""
                className="joinKemege"
                height={400}
                width={400}
              />
            </JoinSectionsRight>
          </JoinSectionsContents>
        </motion.div>
      </JoinSectionsContainer>
    </JoinSectionsStyled>
  );
};

export default JoinSections;
