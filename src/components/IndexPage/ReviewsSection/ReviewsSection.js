import React from "react"
import styled from "styled-components"
import Title from "../../UI/Title"
import Container from "../../UI/Container"
import Slider from "react-slick"
import {graphql, useStaticQuery} from "gatsby"
import ReviewsSlide from "./ReviewsSlide/ReviewsSlide"

const ReviewsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
    infinite: false
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