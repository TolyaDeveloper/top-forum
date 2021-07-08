import React from "react"
import styled from "styled-components"
import dropdownArrow from '../../images/icons/select-arrow.png'

const ConferenceSelect = ({topText, children, $width, $marginBottom}) => {
  return (
    <ConferenceSelectStyled $marginBottom={$marginBottom}>
      {topText ? <ConferenceTopText>{topText}</ConferenceTopText> : null}
      <SelectWrapper $width={$width}>
        <CustomSelect>
          {children}
        </CustomSelect>
      </SelectWrapper>
    </ConferenceSelectStyled>
  )
}

const ConferenceSelectStyled = styled.div`
  margin-bottom: ${props => props.$marginBottom || "40px"};
  width: 100%;
  text-align: center;
`

const ConferenceTopText = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
`

const SelectWrapper = styled.div`
  position: relative;
  max-width: ${props => props.$width || "450px"};
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${dropdownArrow});
    background-repeat: no-repeat;
    background-size: cover;
    width: 22px;
    height: 8px;
  }
`

const CustomSelect = styled.select`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #e8d8b6;
  appearance: none;
  color: #606060;
  
`

export default ConferenceSelect