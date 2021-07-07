import styled from "styled-components"

const SubscribeButton = styled.button`
  display: block;
  padding: 0 10px;
  min-width: 153px;
  height: 42px;
  border: none;
  font-size: 13px;
  text-align: center;
  line-height: 42px;
  color: #fff;
  background-color: #323232;
  transition: opacity .2s ease-out;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`

const SubmitButton = styled(SubscribeButton)`
  min-width: 110px;
  background-color: #c99c47;
`

export {
  SubscribeButton,
  SubmitButton
}