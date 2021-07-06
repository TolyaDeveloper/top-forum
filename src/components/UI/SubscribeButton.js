import React from "react"
import styled from "styled-components"

const SubscribeButton = props => {
  console.log(props)

  return (
    <SubscribeButtonStyled type="button" onClick={props.changeVisibility}>SUBSCRIBE</SubscribeButtonStyled>
  )
}

const SubscribeButtonStyled = styled.button`
  margin-left: 15px;
  padding: 15px 10px;
  min-width: 155px;
  text-align: center;
  background-color: #323232;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  border: none;
  cursor: pointer;
`

export default SubscribeButton