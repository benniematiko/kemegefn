import React from "react";
import {
  Campaignblockcomments,
  Campaignblockleft,
  Campaignblockright,
  Campaignsblock,
  CampaignsblocksContent,
  CampaignsblocksListing,
  Campaignsblocktext,
  CampaignsStyled,
  CampaignsStyledContainer,
  CampaignsStyledContent,
  CampaignsStyledStanding,
  CampaignsStyledTitle,
} from "./Campaigns.style";

const Campaigns = () => {
  return (
    <CampaignsStyled>
      <img src="./images/kemege207.jpeg" height="100%" width="100%" />

      <CampaignsStyledContainer>
        <CampaignsStyledContent>
          <CampaignsStyledTitle>
            <h1>A PEOPLE'S LEADER - ALWAYS INTERMINGLELING </h1>
          </CampaignsStyledTitle>
        </CampaignsStyledContent>

        <Campaignsblock>
          <CampaignsStyledStanding>
            <h1>Standing for our communities</h1>
            <p>
              As a local lad who lives in Kuria East and was born and bred here,
              I get what matters to our community. I know what changes we need
              and deserve, and work hard to bring local people together to
              campaign for them.
            </p>

            <p>Here are some of my top local priorities:</p>
          </CampaignsStyledStanding>
        </Campaignsblock>

        <CampaignsblocksListing>
          <Campaignblockleft>
            <h2> 1.</h2>
            <h1> Action on better school environments</h1>

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
          </Campaignblockleft>

          <Campaignblockright>
            <img src="./images/kemege203.png" height="100%" width="100%" />
          </Campaignblockright>
        </CampaignsblocksListing>
        <CampaignsblocksListing>
          <Campaignblockright>
            <img src="./images/kemege211.jpeg" height="100%" width="100%" />
          </Campaignblockright>
          <Campaignblockleft>
            <h2> 2. </h2>
            <h1> Campaigning for better healthcare </h1>

            <p>
              Good health is the foundation of a strong and thriving community.
              That’s why we are taking bold steps to improve our healthcare
              system—by expanding access, reducing wait times, and investing in
              more doctors, nurses, and modern equipment. Everyone deserves
              timely, high-quality care, no matter where they live or what they
              earn. Our commitment is clear: better healthcare for every
              citizen, today and for generations to come
            </p>
          </Campaignblockleft>
        </CampaignsblocksListing>

        <CampaignsblocksListing>
          <Campaignblockleft>
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
          </Campaignblockleft>

          <Campaignblockright>
            <img src="./images/kemege208.jpeg" height="100%" width="100%" />
          </Campaignblockright>
        </CampaignsblocksListing>
      </CampaignsStyledContainer>

      <CampaignsStyledContainer>
        <Campaignblockcomments>
          <Campaignsblocktext>
            <h1>
              " My mission is to make sure that everyone gets support to thrive
            </h1>

            <button className="btn">Join me</button>
          </Campaignsblocktext>
        </Campaignblockcomments>
      </CampaignsStyledContainer>
    </CampaignsStyled>
  );
};

export default Campaigns;
