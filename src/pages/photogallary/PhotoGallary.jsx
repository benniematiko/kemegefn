import React from 'react'
import { PhotoGallaryContents, PhotoGallaryStyled } from './PhotoGallary.styled'

const PhotoGallary = () => {
  return (
    <PhotoGallaryStyled>

      <PhotoGallaryContents>

        <span><img src="./images/kemege10.jpg" alt="" /> Photo</span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>
        <span><img src="./images/kemege10.jpg" alt="" /></span>


      </PhotoGallaryContents>



    </PhotoGallaryStyled>
  )
}

export default PhotoGallary
