import React from "react"
import styled from "styled-components"

const PrevArrow = props => {
  const {className, onClick} = props

  const arrowColor = props.$color ? props.$color : "#fff"

  return (
    <PrevArrowButton type="button" aria-label="previous slide" className={className} onClick={onClick}>
      <svg width="14" height="47" viewBox="0 0 14 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.449653 23.8675C0.201316 23.7467 0.0978978 23.4475 0.218661 23.1992L11.5002 -3.20597e-06L12.3995 0.437319L1.11797 23.6365C0.997203 23.8848 0.697989 23.9883 0.449653 23.8675V23.8675Z"
          fill={arrowColor}
        />
        <path
          d="M0.437406 23.2422C0.678981 23.1084 0.983264 23.1958 1.11704 23.4374L13.6142 46.005L12.7393 46.4894L0.242218 23.9219C0.108442 23.6803 0.195831 23.376 0.437406 23.2422V23.2422Z"
          fill={arrowColor}
        />
      </svg>
    </PrevArrowButton>
  )
}

const NextArrow = props => {
  const {className, onClick} = props

  const arrowColor = props.$color ? props.$color : "#fff"

  return (
    <NextArrowButton type="button" aria-label="next slide" className={className} onClick={onClick}>
      <svg width="14" height="47" viewBox="0 0 14 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.1645 23.8675C13.4129 23.7467 13.5163 23.4475 13.3955 23.1992L2.11402 -3.20597e-06L1.21471 0.437319L12.4962 23.6365C12.617 23.8848 12.9162 23.9883 13.1645 23.8675V23.8675Z"
          fill={arrowColor}
        />
        <path
          d="M13.1768 23.2422C12.9352 23.1084 12.6309 23.1958 12.4971 23.4374L1.05312e-05 46.005L0.874832 46.4894L13.372 23.9219C13.5057 23.6803 13.4184 23.376 13.1768 23.2422V23.2422Z"
          fill={arrowColor}
        />
      </svg>
    </NextArrowButton>
  )
}

const PrevArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const NextArrowButton = styled(PrevArrowButton)`
  left: auto;
  right: -50px;
`

export {
  PrevArrow,
  NextArrow
}