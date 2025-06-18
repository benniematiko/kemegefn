import { Link } from "react-router-dom"
import { TopBannerStyled, TopBannerStyledContainer, TopBannerStyledContent, TopBannerStyledLeft, TopBannerStyledRight } from "../styles/sections/TopBanner.styled"
import { FaEnvelope,  FaFacebook,  FaImages,  FaInstagram,  FaMobileAlt, FaTwitter } from "react-icons/fa"

const TopBanner = () => {
  return (
    <TopBannerStyled>
      <TopBannerStyledContainer>
        <TopBannerStyledContent>
          <TopBannerStyledLeft>
            <p><FaEnvelope/> info@kemegetyson.org</p>
            <p>|</p>
            <p> <FaMobileAlt/> +254 724 560 742</p>
          </TopBannerStyledLeft>

          <TopBannerStyledRight>
            <p><Link to="/photogallary"> <FaImages/> Photo Gallary</Link></p>
            <p>|</p>

           <p> <FaFacebook /> </p>
           <p> <FaTwitter /> </p>
           <p> <FaInstagram /> </p>
          </TopBannerStyledRight>



        </TopBannerStyledContent>
        
      </TopBannerStyledContainer>
    </TopBannerStyled>
  )
}

export default TopBanner
