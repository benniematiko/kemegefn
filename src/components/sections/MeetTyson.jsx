import {
  MeetTysonContainer,
  MeetTysonContents,
  MeetTysonLeft,
  MeetTysonRight,
  MeetTysonRightp,
  MeetTysonSection,
  MeetTysonTitle,
} from "../styles/sections/MeetTyson.styled";

const MeetTyson = () => {
  return (
    <MeetTysonSection>
      <MeetTysonContainer>
        <MeetTysonTitle>
          <h1>Meet Hon. Tyson Kemege</h1>
        </MeetTysonTitle>
        <MeetTysonContents>
          <MeetTysonLeft>
            <img
              src="./images/kemege10.jpg"
              alt="meetkemege"
              className="meetkemege"
            />
          </MeetTysonLeft>
          <MeetTysonRight>
            <MeetTysonRightp>
              Hon. TK was raised at the Komotobo Orphan Mission and now resides
              in Ntimaru with his wife, Pam, and their two daughters, Lillian
              and Karina.
            </MeetTysonRightp>

            <br />
            <MeetTysonRightp>
              He understands the escalating costs of family life—from fuel and
              housing to healthcare—and the persistent neglect of our
              communities. Security challenges, including cattle rustling and
              instability, continue to affect our people, disrupting even school
              programs. 
              <br />
              <br />
              For too long, politicians have prioritized personal egos
              over tangible progress for our families.
            </MeetTysonRightp>

            <br />

            <MeetTysonRightp>
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
            </MeetTysonRightp>
          </MeetTysonRight>
        </MeetTysonContents>
      </MeetTysonContainer>
    </MeetTysonSection>
  );
};

export default MeetTyson;
