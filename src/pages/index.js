import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import {BgImage} from "gbimage-bridge"
import Container from "../components/UI/Container"
import Slider from "react-slick"
import '../components/UI/Slider/slick.css'
import {PrevArrow, NextArrow} from "../components/UI/Slider/SliderArrows"

const IndexPage = () => {
  const {presentationImage} = useStaticQuery(graphql`
    query {
      presentationImage: file(relativePath: {eq: "forum-presentation.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(quality: 85, placeholder: BLURRED, webpOptions: {quality: 85}, width: 1920, height: 440)
        }
      }
    }
  `)

  const pluginImage = getImage(presentationImage)

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Layout>
      <Seo title="Home page | Top forum 2021" />
      <PresentationBg image={pluginImage}>
        <div>
          <Container>
            <PresentationWrapper>
              <Slider {...settings}>
                <div>
                  <PresentationItem>
                    <PresentationDate>
                      <time dateTime="2021-10-26">
                        <span className="date">26-27</span><br/><span className="month">OCTOBER</span><br/><span className="year">2021</span>
                      </time>
                    </PresentationDate>
                    <PresentationInfo>
                      <PresentationInfoTitle>WEALTH TOP FORUM ISRAEL 2021</PresentationInfoTitle>
                      <PresentationInfoText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      </PresentationInfoText>
                      <PresentationInfoCountry>Barcelona</PresentationInfoCountry>
                    </PresentationInfo>
                  </PresentationItem>
                </div>
                <div>
                  <PresentationItem>
                    <PresentationDate>
                      <time dateTime="2021-11-23">
                        <span className="date">23-24</span><br/><span className="month">NOVEMBER</span><br/><span className="year">2021</span>
                      </time>
                    </PresentationDate>
                    <PresentationInfo>
                      <PresentationInfoTitle>WEALTH TOP FORUM ISRAEL 2021</PresentationInfoTitle>
                      <PresentationInfoText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      </PresentationInfoText>
                      <PresentationInfoCountry>Barcelona</PresentationInfoCountry>
                    </PresentationInfo>
                  </PresentationItem>
                </div>
              </Slider>
            </PresentationWrapper>
          </Container>
        </div>
      </PresentationBg>
    </Layout>
  )
}

const PresentationBg = styled(BgImage)`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 440px;
`

const PresentationWrapper = styled.div`
  margin: 0 40px 0 auto;
  padding: 10px;
  width: 430px;
  min-height: 180px;
  border: 1px solid #fff;
`

const PresentationItem = styled.div`
  display: flex;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.9);
`

const PresentationDate = styled.div`
  margin-right: 20px;
  padding: 25px 10px;
  text-align: center;
  width: 100%;
  max-width: 130px;
  border: 1px solid #cea65b;
  background-color: #fff;
  color: #c99c47;
  font-weight: 900;
  
  .date {
    font-size: 29px;
  }
  .month {
    font-size: 18px;
  }
  .year {
    font-size: 34px;
  }
`

const PresentationInfo = styled.div``

const PresentationInfoTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: 700;
  color: #c99c47;
  font-size: 14px;
`

const PresentationInfoText = styled.p`
  margin-bottom: 10px;
  line-height: 1.28;
`

const PresentationInfoCountry = styled.p`
  color: #757575;
`

export default IndexPage