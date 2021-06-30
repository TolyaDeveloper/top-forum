import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ClientItem = ({data}) => {
  const {alt, featuredImage} = data

  return (
    <div>
      <ClientsItem>
        <GatsbyImage alt={alt} image={getImage(featuredImage)} />
      </ClientsItem>
    </div>
  )
}

const ClientsItem = styled.div`
  display: grid;
  place-items: center;
  width: 180px;
  height: 120px;
  background-color: #fff;
`

export default ClientItem

