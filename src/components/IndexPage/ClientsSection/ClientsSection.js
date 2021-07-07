import React from "react"
import styled from "styled-components"
import Title from "../../UI/Title"
import Slider from "react-slick"
import Container from "../../UI/Container"
import { graphql, useStaticQuery } from "gatsby"
import ClientItem from "./ClientItem/ClientItem"
import { NextArrow, PrevArrow } from "../../UI/Slider/SliderArrows"

const ClientsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/clients/"}}) {
        nodes {
          frontmatter {
            alt
            featuredImage {
              childImageSharp {
                gatsbyImageData(quality: 75, layout: FIXED, placeholder: BLURRED)
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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow $color="#c99c47" />,
    prevArrow: <PrevArrow $color="#c99c47" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <ClientsSectionStyled>
      <Container>
        <ClientsSectionTitle>OUR CLIENTS</ClientsSectionTitle>
        <Slider {...sliderSettings}>
          {list.map(item => (
            <ClientItem key={item.id} data={item.frontmatter} />
          ))}
        </Slider>
      </Container>
    </ClientsSectionStyled>
  )
}

const ClientsSectionStyled = styled.section`
  padding: 45px 0 70px 0;
  background-color: #f8f3e9;
  
  @media (max-width: 1300px) {
    .slick-next {
      right: 0;
    }
    
    .slick-prev {
      left: 0;
    }
  }
`

const ClientsSectionTitle = styled(Title)`
  margin-bottom: 30px;
`

export default ClientsSection