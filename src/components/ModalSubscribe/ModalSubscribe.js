import React from "react"
import styled, { keyframes } from "styled-components"
import LinkStyled from "../UI/Link"
import CloseIcon from '../../images/icons/close-modal.png'

const ModalSubscribe = props => {
  return (
    <ModalSubscribeStyled>
      <ModalBox>
        <CloseBtnStyled onClick={props.changeVisibility}>
          <CloseIconStyled src={CloseIcon} alt="close modal" />
        </CloseBtnStyled>
        <ModalBoxTitle>subscribe</ModalBoxTitle>
        <ModalBoxText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </ModalBoxText>
        <form>
          <ModalInput type="text" required placeholder="NAME AND SURNAME" />
          <ModalInput type="text" required placeholder="COMPANY NAME" />
          <ModalInput type="email" required placeholder="E-MAIL" />
          <ModalSubmit as="button">SUBSCRIBE</ModalSubmit>
        </form>
      </ModalBox>
    </ModalSubscribeStyled>
  )
}

const appearModal = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const ModalSubscribeStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`

const ModalBox = styled.div`
  position: relative;
  margin: 200px auto 0 auto;
  padding: 40px 30px 25px 30px;
  width: 420px;
  min-height: 370px;
  text-align: center;
  background-color: #fff;
  border: 2px solid #c99c47;
  animation: ${appearModal} 0.3s;
`

const ModalBoxTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
`

const ModalBoxText = styled.p`
  margin-bottom: 25px;
  text-align: justify;
  text-align-last: center;
`

const ModalInput = styled.input`
  margin-bottom: 8px;
  width: 100%;
  height: 50px;
  border: 1px solid #e8d8b6;
  padding: 0 15px;
  color: #606060;
  text-align: center;
`

const ModalSubmit = styled(LinkStyled)`
  margin-top: 13px;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
`

const CloseBtnStyled = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const CloseIconStyled = styled.img`
  width: 20px;
  height: 20px;
`

export default ModalSubscribe