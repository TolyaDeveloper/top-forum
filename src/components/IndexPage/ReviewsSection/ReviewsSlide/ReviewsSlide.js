import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import NoPhotoReview from "../../../NoPhotoReview/NoPhotoReview"

const ReviewsSlide = props => {
  const {date, personName, quote} = props.data
  const imageExists = props.data.featuredImage

  return (
    <div>
      <ReviewsItem>
        {imageExists
          ? <GatsbyImage
            alt={personName}
            image={getImage(imageExists)}
            imgStyle={ReviewsImageStyles}
          />
          : <NoPhotoReview />}

        <ReviewsCommentBlock>
          <ReviewsCommentName>{personName}</ReviewsCommentName>
          <ReviewsDateLabel>{date}</ReviewsDateLabel>
          <ReviewsQuote>{quote}</ReviewsQuote>
        </ReviewsCommentBlock>
      </ReviewsItem>
    </div>
  )
}

const ReviewsItem = styled.div`
  display: flex;
  align-items: flex-start;
`

const ReviewsImageStyles = {
  backgroundColor: '#fff',
  padding: '2px',
  borderRadius: '100%'
}

const ReviewsCommentBlock = styled.div`
  position: relative;
  margin-left: 35px;
  max-width: 390px;
  min-height: 245px;
  padding: 25px 25px 30px 30px;
  background-color: #fff;
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: -25px;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-right: 25px solid #fff;
  }
`

const ReviewsCommentName = styled.h4`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
`

const ReviewsDateLabel = styled.time`
  display: inline-block;
  width: 120px;
  height: 30px;
  margin-bottom: 13px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  font-size: 9px;
  color: #fff;
  background-color: #bbbbbd;
  text-transform: uppercase;
`

const ReviewsQuote = styled.blockquote`
  margin: 0;
  text-align: justify;
`

export default ReviewsSlide