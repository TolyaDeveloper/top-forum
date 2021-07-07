import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import Title from "../UI/Title"
import { SubmitButton } from "../UI/Buttons"
import { Link } from "gatsby"

const ContactsFeedback = () => {
  return (
    <ContactsFeedbackStyled>
      <Container>
        <ContactsFeedbackTitle>FEEDBACK</ContactsFeedbackTitle>
        <ContactsFeedbackInner>
          <ContactsFeedbackForm>
            <label className="contacts-top-label">
              <ContactsLabelText>Your appeal</ContactsLabelText>
              <ContactsFeedbackTextarea />
            </label>
            <label>
              <ContactsLabelText>How to contact you?</ContactsLabelText>
              <ContactsInputWrapper>
                <ContactsInput type="email" required />
                <ContactsInput type="text" required />
              </ContactsInputWrapper>
            </label>
            <SubmitButtonStyled as="button" type="submit">SEND</SubmitButtonStyled>
          </ContactsFeedbackForm>
          <ContactsFeedbackAdditional>
            <p className="contact-feedback-top">
              You can also ask questions by phone of a hot line:
            </p>
            <a className="contact-feedback-tel" href="tel:+421221025322">+421 221 025 322</a>
            <p className="contact-feedback-with-faq">The answers to many questions already in our <Link to="/faq">FAQ</Link></p>
            <p className="contact-feedback-suggestions">
              All suggestions and comments are considered mandatory!
            </p>
          </ContactsFeedbackAdditional>
        </ContactsFeedbackInner>
      </Container>
    </ContactsFeedbackStyled>
  )
}

const ContactsFeedbackStyled = styled.section`
  margin-top: 60px;
  padding: 50px 0 40px 0;
  background-color: #f8f3e9;
`

const ContactsFeedbackTitle = styled(Title)`
  margin-bottom: 40px;
`

const ContactsFeedbackInner = styled.div`
  display: flex;
`

const ContactsFeedbackForm = styled.form`
  width: 555px;
  margin-right: 30px;
  
  .contacts-top-label {
    display: block;
    margin-bottom: 25px;
  }
  
  textarea, input {
    border: 1px solid #e8d8b6;
  }
`

const ContactsLabelText = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #606060;
  font-weight: 500;
`

const ContactsFeedbackTextarea = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 115px;
  resize: none;
`

const ContactsInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`

const ContactsInput = styled.input`
  padding: 0 15px;
  height: 50px;
`

const SubmitButtonStyled = styled(SubmitButton)`
  margin: 15px 0 0 auto;
`

const ContactsFeedbackAdditional = styled.div`
  margin-top: 25px;
  
  .contact-feedback-top {
    margin-bottom: 10px;
    font-weight: 500;
  }
  
  .contact-feedback-tel {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 23px;
  }
  
  .contact-feedback-with-faq {
    margin-bottom: 10px;
    font-weight: 400;
    a {
      text-decoration: underline;
    }
  }
`

export default ContactsFeedback