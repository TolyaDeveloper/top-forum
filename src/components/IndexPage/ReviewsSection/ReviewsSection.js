import React from "react"
import styled from "styled-components"
import Title from "../../UI/Title"
import Container from "../../UI/Container"
import Slider from "react-slick"
import {graphql, useStaticQuery} from "gatsby"
import ReviewsSlide from "./ReviewsSlide/ReviewsSlide"
import { NextArrow, PrevArrow } from "../../UI/Slider/SliderArrows"

const ReviewsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/reviews/"}}) {
        nodes {
          frontmatter {
            quote
            personName
            date
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 85
                  layout: FIXED
                  height: 121
                  width: 121
                  placeholder: BLURRED
                )
              }
            }
          }
          id
        }
      }
    }
  `)

  const list = data.allMarkdownRemark.nodes

  const sliderSettings = {
    slidesToShow: 2,
    infinite: false,
    nextArrow: <NextArrow $color="#c99c47" />,
    prevArrow: <PrevArrow $color="#c99c47" />,
  }

  return (
    <ReviewsSectionStyled>
      <Container>
        <ReviewsSectionTitle>
          CUSTOMER REVIEWS
        </ReviewsSectionTitle>
        <Slider {...sliderSettings}>
          {list.map(item => {
            return (
              <ReviewsSlide data={item.frontmatter} key={item.id} />
            )
          })}
        </Slider>
      </Container>
    </ReviewsSectionStyled>
  )
}

const ReviewsSectionStyled = styled.section`
  padding: 55px 0 60px 0;
  background-color: #f8f3e9;
`

const ReviewsSectionTitle = styled(Title)`
  margin-bottom: 40px;
  text-align: center;
`

export default ReviewsSection