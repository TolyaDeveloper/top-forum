import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import GoogleMap from "../GoogleMap/GoogleMap"
import ContactsFeedback from "./ContactsFeedback"

const MapContacts = () => {
  return (
    <MapContactsStyled>
      <Container>
        <MapContactsInner>
          <GoogleMap />
          <div>
            <Address>
              <AddressDepartment>DELEGATE ENQUIRIES</AddressDepartment>
              <AddressName>Tony Bradley</AddressName>
              <div><span>E: </span><AddressEmail href="mailto:tony.bradley@allanlloyds.com">tony.bradley@allanlloyds.com</AddressEmail></div>
              <div><span>P: </span><AddressPhone href="tel:+421221025322">+421 221 025 322</AddressPhone></div>
            </Address>
            <Address>
              <AddressDepartment>DELEGATE ENQUIRIES</AddressDepartment>
              <AddressName>Tony Bradley</AddressName>
              <div><span>E: </span><AddressEmail href="mailto:tony.bradley@allanlloyds.com">tony.bradley@allanlloyds.com</AddressEmail></div>
              <div><span>P: </span><AddressPhone href="tel:+421221025322">+421 221 025 322</AddressPhone></div>
            </Address>
            <Address>
              <AddressDepartment>DELEGATE ENQUIRIES</AddressDepartment>
              <AddressName>Tony Bradley</AddressName>
              <div><span>E: </span><AddressEmail href="mailto:tony.bradley@allanlloyds.com">tony.bradley@allanlloyds.com</AddressEmail></div>
              <div><span>P: </span><AddressPhone href="tel:+421221025322">+421 221 025 322</AddressPhone></div>
            </Address>
            <Address>
              <AddressDepartment>DELEGATE ENQUIRIES</AddressDepartment>
              <AddressName>Tony Bradley</AddressName>
              <div><span>E: </span><AddressEmail href="mailto:tony.bradley@allanlloyds.com">tony.bradley@allanlloyds.com</AddressEmail></div>
              <div><span>P: </span><AddressPhone href="tel:+421221025322">+421 221 025 322</AddressPhone></div>
            </Address>
          </div>
        </MapContactsInner>
      </Container>
      <ContactsFeedback />
    </MapContactsStyled>
  )
}

const MapContactsStyled = styled.section`
  padding-top: 35px;
`

const MapContactsInner = styled.div`
  display: flex;
`

const Address = styled.address`
  margin-bottom: 25px;
  font-size: 15px;
  font-style: normal;
`

const AddressDepartment = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
`

const AddressName = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
`

const AddressEmail = styled.a`
  margin-bottom: 10px;
  text-decoration: underline;
  color: #c99c47;
`

const AddressPhone = styled.a`
  
`

export default MapContacts