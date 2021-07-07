import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import Title from "../UI/Title"

const PromoVideo = () => (
  <PromoVideoStyled>
    <Container>
      <PromoTitle>PROMO VIDEO</PromoTitle>
      <PromoVideoIframe src="https://www.youtube.com/embed/dpw9EHDh2bM"
                        loading="lazy"
                        title="React Today and Tomorrow and 90% Cleaner React With Hooks video"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
      />
    </Container>
  </PromoVideoStyled>
)

const PromoVideoStyled = styled.section`
  padding: 60px 0;
`

const PromoTitle = styled(Title)`
  margin-bottom: 25px;
`

const PromoVideoIframe = styled.iframe`
  display: block;
  max-width: 680px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border: 0;
  
  @media (max-width: 575px) {
    height: 300px;
  }
`

export default PromoVideo