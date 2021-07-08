import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import Title from "../UI/Title"
import ArrowIcon from '../../images/icons/hint-block-arrow.png'
import ConferenceSelect from "../ConferenceSelect/ConferenceSelect"
import { Link } from "gatsby"
import CheckedIcon from '../../images/icons/checked.svg'
import VisaImg from '../../images/icons/visa.png'
import PayPal from '../../images/icons/paypal.png'
import { SubmitButton } from "../UI/Buttons"

const Registers = () => {
  return (
    <RegistersSection>
      <Container>
        <RegistersTitle>2 EASY STEPS TO REGISTER</RegistersTitle>
        <HintBlock>FILL IN THE FORM IN ENGLISH</HintBlock>
        <HintBlockArrow src={ArrowIcon} alt="arrow" />
        <HintBlock>READ THOROUGHLY TERMS&CONDITIONS</HintBlock>
        <RegistersForm>
          <RegistersLabel>
            <RegistersLabelText>Please, choose a conference:</RegistersLabelText>
            <ConferenceSelect $width="100%" $marginBottom="0">
              <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM Israel 2021</option>
              <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM ... 2021</option>
              <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM ...... 2021</option>
            </ConferenceSelect>
          </RegistersLabel>
          <RegistersLabel as="div">
            <RegistersLabelText>Please, choose delegate package:</RegistersLabelText>
            <div>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="package" value="standard" />
                <span>standard</span>
              </RegisterRadioLabel>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="package" value="premium" />
                <span>premium</span>
              </RegisterRadioLabel>
            </div>
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Name:</RegistersLabelText>
            <RegistersInput type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Surname:</RegistersLabelText>
            <RegistersInput type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Company Name:</RegistersLabelText>
            <RegistersInput type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Business Area:</RegistersLabelText>
            <ConferenceSelect $width="100%" $marginBottom="0">
              <option value="Forex Companies">Forex Companies</option>
              <option value="...">...</option>
              <option value="......">......</option>
            </ConferenceSelect>
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>E-mail (for organizers):</RegistersLabelText>
            <RegistersInput type="email" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>E-mail (for sponsors):</RegistersLabelText>
            <RegistersInput type="email" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Mobile Number (for organizers):</RegistersLabelText>
            <RegistersInput type="tel" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Country:</RegistersLabelText>
            <RegistersInput type="text" />
          </RegistersLabel>
          <RegistersLabel>
            <RegistersLabelText>Web-site:</RegistersLabelText>
            <RegistersInput type="url" />
          </RegistersLabel>
          <RegistersLabel as="div">
            <RegistersLabelText>Method of payment:</RegistersLabelText>
            <div>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="payment" value="free" />
                <span>free</span>
              </RegisterRadioLabel>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="payment" value="visa" />
                <span><RegisterRadioImg src={VisaImg} alt="visa payment method" /></span>
              </RegisterRadioLabel>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="payment" value="invoice" />
                <span>invoice</span>
              </RegisterRadioLabel>
              <RegisterRadioLabel>
                <RegisterRadioInput type="radio" name="payment" value="paypal" />
                <span><RegisterRadioImg src={PayPal} alt="paypal payment method" /></span>
              </RegisterRadioLabel>
            </div>
          </RegistersLabel>
          <RegisterBottom>
            <RegisterBottomLabel>
              <RegisterCheckboxInput type="checkbox" />
              <RegisterCustomCheckbox />
              <RegisterCheckboxSpan>I accept&nbsp;
                <Link to="/terms-and-conditions" style={{textDecoration: 'underline'}}>Terms&Conditions</Link>
              </RegisterCheckboxSpan>
            </RegisterBottomLabel>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </RegisterBottom>
        </RegistersForm>
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

const RegistersForm = styled.form`
  max-width: 655px;
  margin: 40px auto 0 auto;
`

const RegisterRadioLabel = styled.label`
  margin: 0 5px 5px 0;
  display: inline-block;
  cursor: pointer;
  
  span {
    min-width: 100px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    height: 50px;
    padding: 0 10px;
    background-color: #f2ead8;
    font-weight: 500;
    text-transform: uppercase;
  }
`

const RegisterRadioImg = styled.img`
  max-width: 80px;
`

const RegisterRadioInput = styled.input`
  position: absolute;
  appearance: none;
  
  &:checked + span {
    background-color: #e2cc9d;
  }
`

const RegistersInput = styled.input`
  padding: 0 15px;
  flex-grow: 1;
  height: 50px;
  border: 1px solid #e8d8b6;
  
  @media (max-width: 500px) {
    width: 100%;
  }
`

const RegistersLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const RegistersLabelText = styled.span`
  width: 220px;
  flex-shrink: 0;
  color: #606060;
  font-weight: 500;
  
  @media (max-width: 500px) {
    margin-bottom: 15px;
  }
`

const RegisterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 435px;
  margin-left: auto;
`

const RegisterCheckboxInput = styled.input`
  position: absolute;
  appearance: none;
  
  &:checked + span::before {
    display: block;
  }
`

const RegisterBottomLabel = styled.label`
  position: relative;
  cursor: pointer;
`

const RegisterCheckboxSpan = styled.span`
  padding-left: 30px;
  color: #606060;
`

const RegisterCustomCheckbox = styled.span`
  position: absolute;
  top: -2px;
  left: 0;
  width: 19px;
  height: 19px;
  border: 1px solid #e8d8b6;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${CheckedIcon});
    width: 13px;
    height: 11px;
    background-repeat: no-repeat;
    background-size: cover;
    display: none;
  }
`

export default Registers