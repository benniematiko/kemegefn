import React from "react";

import {
  Projectblockcomments,
  Projectblockleft,
  Projectblockright,
  Educationblock,
  EducationblocksContent,
  EducationblocksListing,
  Educationblocktext,
  EducationStyled,
  EducationStyledContainer,
  EducationStyledContent,
  EducationStyledStanding,
  EducationStyledTitle,
} from "./Education.styled";

const Education = () => {
  return (
    <EducationStyled>
      <img src="./images/kemege206.jpeg" height="100%" width="100%" />

      <EducationStyledContainer>
        <EducationStyledContent>
          <EducationStyledTitle>
            <h1>EDUCATION IS THE TRUEST EQUILIZER</h1>
          </EducationStyledTitle>
        </EducationStyledContent>

        <Educationblock>
          <EducationStyledStanding>
            <h1>Knowledge is power</h1>
            <p>
              Hon Tyson Kemege believes that education is the key to success.
            </p>
            <p>
              He always goes out to help young people get the skills they need
             </p>

            <p>Here are some of the Education he has undertaken:</p>
          </EducationStyledStanding>
        </Educationblock>

        {/* <EducationblocksListing>
          <Projectblockleft>
            <h2> 1.</h2>
            <h1> Community Service & Donations</h1>

            <p>
              Every child deserves to learn in a safe, clean, and inspiring
              environment. Our schools should be places where students feel
              supported, where teachers have the tools they need to succeed, and
              where the facilities reflect the value we place on education.
              That’s why we are taking real action to improve school
              environments—investing in modern infrastructure, promoting mental
              health resources, and ensuring every classroom is a place where
              both students and educators can thrive.
            </p>
          </Projectblockleft>

          <Projectblockright>
            {<img src="./images/kemege203.png" height="100%" width="100%" />}
          </Projectblockright>
        </EducationblocksListing> */}

        
        {/* <EducationblocksListing>
          <Projectblockright>
            <img src="./images/kemege211.jpeg" height="100%" width="100%" />
          </Projectblockright>
          <Projectblockleft>
            <h2> 2. </h2>
            <h1> Projecting for better healthcare </h1>

            <p>
              Good health is the foundation of a strong and thriving community.
              That’s why we are taking bold steps to improve our healthcare
              system—by expanding access, reducing wait times, and investing in
              more doctors, nurses, and modern equipment. Everyone deserves
              timely, high-quality care, no matter where they live or what they
              earn. Our commitment is clear: better healthcare for every
              citizen, today and for generations to come
            </p>
          </Projectblockleft>
        </EducationblocksListing> */}

        {/* <EducationblocksListing>
          <Projectblockleft>
            <h2> 3. </h2>
            <h1> Inspiring the next generation</h1>

            <p>
              Our future depends on the dreams, talents, and determination of
              the next generation. It is our responsibility to inspire and
              empower young people—to give them the education, opportunities,
              and support they need to succeed. By investing in youth programs,
              leadership development, and access to innovation and creativity,
              we are building a brighter tomorrow. Together, we can help every
              young person believe in their potential and reach for greatness
            </p>
          </Projectblockleft>

          <Projectblockright>
            <img src="./images/kemege208.jpeg" height="100%" width="100%" />
          </Projectblockright>
        </EducationblocksListing> */}
      </EducationStyledContainer>

      <EducationStyledContainer>
        <Projectblockcomments>
          <Educationblocktext>
            <h1>
              " My mission is to make sure that everyone gets support to thrive
            </h1>

            <button className="btn">Join me</button>
          </Educationblocktext>
        </Projectblockcomments>
      </EducationStyledContainer>


      
    </EducationStyled>
  );
};

export default Education;


