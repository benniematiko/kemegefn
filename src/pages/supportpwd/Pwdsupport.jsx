import React from "react";
import {
  PwdsupportBox,
  PwdsupportContainer,
  Pwdsupportleft,
  PwdsupportRight,
  PwdsupportStyled,
  PwdsupportText,
  PwdsupportTitle,
} from "./Pwdsupport.styled";

const Pwdsupport = () => {
  return (
    <PwdsupportStyled>
      <img src="./images/pwd01.jpeg" height="" width="100%" />

      <PwdsupportContainer>
        <PwdsupportTitle>
          <h1>Empowering Persons with Disability (PWDs)</h1>
        </PwdsupportTitle>
        <PwdsupportText>
          <p>
            Every once a year, Hon Tyson Kemege, undertakes a very bold and
            committed step. He goes out to extend a helping hand to persons with
            disability(PWD) in Kuria East constituency.
            <br />
            <br />
            This group of people is at his heart. He knows very well the
            challenges they face in day-to-day. Therefore, he donates to them
            different paraphernalia that helps mitigate the challenges they
            face.
          </p>
        </PwdsupportText>

        <PwdsupportBox>
          <Pwdsupportleft>
            <div>
              <div>
                <img src="./images/pwd01.jpeg" height="20%" width="20%" />
              </div>
              <div>
                <h1>Title</h1>
                <p>Description</p>
              </div>
            </div>
          </Pwdsupportleft>

          <PwdsupportRight>

               <img src="./images/pwd01.jpeg" height="100%" width="100%" />
             
          </PwdsupportRight>
        </PwdsupportBox>
      </PwdsupportContainer>
    </PwdsupportStyled>
  );
};

export default Pwdsupport;
