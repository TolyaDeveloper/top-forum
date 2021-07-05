import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"

const MapContacts = () => {
  return (
    <MapContactsStyled>
      <Container>
        <MapContactsInner>

        </MapContactsInner>
      </Container>
    </MapContactsStyled>
  )
}

const MapContactsStyled = styled.section`
  padding: 35px 0 70px 0;
`

const MapContactsInner = styled.div``

export default MapContacts