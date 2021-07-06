import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import Title from "../UI/Title"
import ArrowIcon from '../../images/icons/hint-block-arrow.png'
import ConferenceSelect from "../ConferenceSelect/ConferenceSelect"
import { Link } from "gatsby"

const Registers = () => {
  return (
    <RegistersSection>
      <Container>
        <RegistersTitle>2 EASY STEPS TO REGISTER</RegistersTitle>
        <HintBlock>FILL IN THE FORM IN ENGLISH</HintBlock>
        <HintBlockArrow src={ArrowIcon} alt="arrow" />
        <HintBlock>READ THOROUGHLY TERMS&CONDITIONS</HintBlock>
        <form>
          <RegistersLabel>
            <RegistersLabelText>Please, choose a conference:</RegistersLabelText>
            <span>select will be here</span>
          </RegistersLabel>
          <RegistersLabel as="div">
            <RegistersLabelText>Please, choose delegate package:</RegistersLabelText>
            <div>
              <label>
                <input type="radio" name="package" value="standard" />
              </label>
              <label>
                <input type="radio" name="package" value="premium" />
              </label>
            </div>
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Name:</RegistersLabelText>
            <input type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Surname:</RegistersLabelText>
            <input type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Company Name:</RegistersLabelText>
            <input type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Business Area:</RegistersLabelText>
            <span>select will be here</span>
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>E-mail (for organizers):</RegistersLabelText>
            <input type="email" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>E-mail (for sponsors):</RegistersLabelText>
            <input type="email" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Mobile Number (for organizers):</RegistersLabelText>
            <input type="tel" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Country:</RegistersLabelText>
            <input type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Web-site:</RegistersLabelText>
            <input type="url" />
          </RegistersLabel>
          <RegistersLabel as="div">
            <RegistersLabelText>Method of payment:</RegistersLabelText>
            <div>
              <label>
                <input type="radio" name="payment" value="free" />
              </label>
              <label>
                <input type="radio" name="payment" value="visa" />
              </label>
              <label>
                <input type="radio" name="payment" value="invoice" />
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" />
              </label>
            </div>
          </RegistersLabel>
          <RegisterBottom>
            <label>
              <input type="checkbox" />
              <span>I accept <Link to="/terms-and-conditions">Terms&Conditions</Link></span>
            </label>
            <button type="submit">SUBMIT</button>
          </RegisterBottom>
        </form>
      </Container>
    </RegistersSection>
  )
}

const RegistersSection = styled.section`
  padding: 45px 0;
`

const RegistersTitle = styled(Title)`
  margin-bottom: 40px;
`

const HintBlock = styled.div`
  margin: 0 auto 10px auto;
  padding: 0 20px;
  max-width: 410px;
  min-height: 55px;
  text-align: center;
  line-height: 55px;
  color: #c99c47;
  font-weight: 500;
  border: 2px solid #c99c47;
`

const HintBlockArrow = styled.img`
  display: block;
  width: 22px;
  height: 8px;
  margin: 0 auto 10px auto;
`

const RegistersLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 15px 15px 0;
`

const RegistersLabelText = styled.span`
  width: 220px;
`

const RegisterBottom = styled.div``

export default Registers