// import React from "react";
// import {
//   PwdsupportBox,
//   PwdsupportContainer,
//   Pwdsupportleft,
//   PwdsupportRight,
//   PwdsupportStyled,
//   PwdsupportText,
//   PwdsupportTitle,
// } from "./Pwdsupport.styled";

// const Pwdsupport = () => {
//   return (
//     <PwdsupportStyled>
//       <img src="./images/pwd01.jpeg" height="" width="100%" />

//       <PwdsupportContainer>
//         <PwdsupportTitle>
//           <h1>Empowering Persons with Disability (PWDs)</h1>
//         </PwdsupportTitle>
//         <PwdsupportText>
//           <p>
//             Every once a year, Hon Tyson Kemege, undertakes a very bold and
//             committed step. He goes out to extend a helping hand to persons with
//             disability(PWD) in Kuria East constituency.
//             <br />
//             <br />
//             This group of people is at his heart. He knows very well the
//             challenges they face in day-to-day. Therefore, he donates to them
//             different paraphernalia that helps mitigate the challenges they
//             face.
//           </p>
//         </PwdsupportText>

//         <PwdsupportBox>
//           <Pwdsupportleft>
//             <div>
//               <div>
//                 <img src="./images/pwd01.jpeg" height="20%" width="20%" />
//               </div>
//               <div>
//                 <h1>Title</h1>
//                 <p>Description</p>
//               </div>
//             </div>
//           </Pwdsupportleft>

//           <PwdsupportRight>

//                <img src="./images/pwd01.jpeg" height="100%" width="100%" />
             
//           </PwdsupportRight>
//         </PwdsupportBox>
//       </PwdsupportContainer>
//     </PwdsupportStyled>
//   );
// };

// export default Pwdsupport;















import React from "react";
import {
  Pwdblockcomments,
  Pwdblockleft,
  Pwdblockright,
  Pwdsupportblock,
  PwdsupportblocksContent,
  PwdsupportblocksListing,
  Pwdsupportblocktext,
  PwdsupportStyled,
  PwdsupportStyledContainer,
  PwdsupportStyledContent,
  PwdsupportStyledStanding,
  PwdsupportStyledTitle,
} from "./Pwdsupport.styled";

const Pwdsupport = () => {
  return (
    <PwdsupportStyled>
      {/* <img src="./images/kemege207.jpeg" height="100%" width="100%" /> */}

       <img src="./images/pwd01.jpeg" height="" width="100%" />

      <PwdsupportStyledContainer>
        <PwdsupportStyledContent>
          <PwdsupportStyledTitle>
            <h1>PWDs ARE AT HIS HEART. HE ALWAYS GOES OUT TO EXTEND A HELPING HAND </h1>
          </PwdsupportStyledTitle>
        </PwdsupportStyledContent>

        <Pwdsupportblock>
          <PwdsupportStyledStanding>
            <h1>Firmly supporting PDWs rights</h1>
            <p>
              Needless to say, Hon Tyson Kemege has played a
              vital role in supporting PWDs in Kuria East.

              
            </p>

            <p>
              Once every year, he goes out to source request material 
              and resouces that helps PWds individuals.
            </p>

            <p>Below we can see some of his activities:</p>
          </PwdsupportStyledStanding>
        </Pwdsupportblock>

        <PwdsupportblocksListing>
          <Pwdblockleft>
            <h2> 1.</h2>
            <h1> Year, 2025</h1>

            <p>
              Location: Komotobo Mission.
            </p>
            <p>
              Activity:
            </p>

            <p>
             <ul>
              <li>  - Distributed 100 clutches</li>
              <li>  - Distributed 50 wheel chairs</li>
              <li> - Distributed 30 personal items</li>
              
             </ul>
            </p>
          </Pwdblockleft>

          <Pwdblockright>
            <img src="./images/kemege212.jpeg" height="100%" width="100%" />


          </Pwdblockright>
        </PwdsupportblocksListing>
        <PwdsupportblocksListing>
          <Pwdblockright>
            <img src="./images/kemege213.jpeg" height="100%" width="100%" />
          </Pwdblockright>
          <Pwdblockleft>  
            <h2> 2.</h2>
            <h1> Year, 2024 </h1>

            <p>
              Location: Komotobo Mission.
            </p>
            <p>
              Activity:
            </p>

            <p>
             <ul>
              <li>  - Distributed 100 clutches</li>
              <li>  - Distributed 50 wheel chairs</li>
              <li> - Distributed 30 personal items</li>
              
             </ul>
            </p>

            
          </Pwdblockleft>
        </PwdsupportblocksListing>

        <PwdsupportblocksListing>
          <Pwdblockleft>
             <h2> 3.</h2>
            <h1> Year, 2023 </h1>

            <p>
              Location: Tropical Hotel Restaurant
            </p>
            <p>
              Activity:
            </p>

            <p>
             <ul>
              <li>  - Distributed 100 clutches</li>
              <li>  - Distributed 50 wheel chairs</li>
              <li> - Distributed 30 personal items</li>
              
             </ul>
            </p>
          </Pwdblockleft>

          <Pwdblockright>
            <img src="./images/kemege214.jpeg" height="100%" width="100%" />
          </Pwdblockright>
        </PwdsupportblocksListing>
      </PwdsupportStyledContainer>

      <PwdsupportStyledContainer>
        <Pwdblockcomments>
          <Pwdsupportblocktext>
            <h1>
              " Disability is not inability ....
            </h1>

            <button className="btn">Join me</button>
          </Pwdsupportblocktext>
        </Pwdblockcomments>
      </PwdsupportStyledContainer>
    </PwdsupportStyled>
  );
};

export default Pwdsupport;

