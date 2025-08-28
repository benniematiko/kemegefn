import {
  GetInvolvedContainer,
  GetInvolvedContents,
  GetInvolvedLeft,
  GetInvolvedRight,
  GetInvolvedStyled,
  GetInvolvedTitle,
  LabelDiv,
  SubmitInput,
} from "../styles/sections/GetInvolvedSections.styled";

const GetInvolvedSections = () => {
  return (
    <GetInvolvedStyled>
      <GetInvolvedContainer>
        <GetInvolvedTitle>
          <h1>GET INVOLVED</h1>
          <p>You can become a member of this noble course</p>
        </GetInvolvedTitle>
        <GetInvolvedContents>
          <GetInvolvedLeft>
            <h1>Become a Volunteer</h1>
            <p>Do what to become a volunteer in this process?
            <span>Please fill the form below and the campaign team with swiftly get back to you.</span>
           

            </p>
            <div>
              <form action="" method="post">          
                <div>
                  <LabelDiv>
                    <label htmlFor="">Your email address: </label>
                    <input type="text" />
                  </LabelDiv>
                  <LabelDiv>
                    <label htmlFor="">First Name: </label>
                    <input type="text" />
                  </LabelDiv>
                  <LabelDiv>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" />
                  </LabelDiv>
                  
                  <LabelDiv>
                    <label htmlFor="">Mobile Number: </label>
                    <input type="text" />
                  </LabelDiv>

                  <div>
                    <SubmitInput type="submit" />
                  </div>
                  
                  
                </div>
              </form>
            </div>
          </GetInvolvedLeft>
          <GetInvolvedRight>
            <h1>Hon. Tyson Kemege's Merchandise & Shop</h1>
            <p>Purchase a campaign paraphernalia</p>

            <div>
              <span>
                Tshirt
                <img src="" alt="" />
              </span>
              <span>
                Cap
                <img src="" alt="" />
              </span>

              </div>
              <div>
              <span>Back bag</span>
              <span>Pens</span>
            </div>

            <div>
              <button>See more</button>
            </div>
          </GetInvolvedRight>
        </GetInvolvedContents>
      </GetInvolvedContainer>
    </GetInvolvedStyled>
  );
};

export default GetInvolvedSections;
