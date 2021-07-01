import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../UI/Link"

const GridRenderItem = ({data, paragraph, relativePath}) => {
  const {slug, sponsorName, companyName, featuredImage} = data

  return (
    <GridItemStyled>
      <div>
        {sponsorName
          ? <GridTitle>{sponsorName}</GridTitle>
          : null}
        <GridImgBlock>
          <GatsbyImage alt={companyName} image={getImage(featuredImage)} />
        </GridImgBlock>
        <GridName>{companyName}</GridName>
        <GridInfoText dangerouslySetInnerHTML={{__html: paragraph}} />
      </div>
      <div>
        <GridLink to={`/${relativePath}/${slug}`} $pale>Learn more</GridLink>
      </div>
    </GridItemStyled>
  )
}

const GridItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 265px;
  min-height: 355px;
`

const GridTitle = styled.h3`
  margin-bottom: 20px;
  color: #c99c47;
  font-weight: 500;
  text-transform: uppercase;
`

const GridImgBlock = styled.div`
  display: grid;
  place-items: center;
  height: 160px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #f3ebda;
`

const GridName = styled.h4`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 500;
`

const GridInfoText = styled.div`
  margin-bottom: 20px;
  text-align: justify;
  text-align-last: center;
  line-height: 1.5;
`

const GridLink = styled(Link)`
  padding: 15px 25px;
  &:hover {
    background-color: #c99c47;
  }
`

export default GridRenderItem