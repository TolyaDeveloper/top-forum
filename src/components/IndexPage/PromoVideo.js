import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import Title from "../UI/Title"
import ReactPlayer from "react-player/lazy"

const PromoVideo = () => {
  return (
    <PromoVideoStyled>
      <Container>
        <PromoTitle>
          PROMO VIDEO
        </PromoTitle>
        <ReactPlayer
          url="https://youtu.be/dpw9EHDh2bM"
          width={680}
          height={400}
          style={{margin: ' 0 auto'}}
          controls
        />
      </Container>
    </PromoVideoStyled>
  )
}

const PromoVideoStyled = styled.section`
  padding: 60px 0;
`

const PromoTitle = styled(Title)`
  margin-bottom: 25px;
`

export default PromoVideo