import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PostLink } from "../UI/Links"

const GridRenderItem = ({data, paragraph, relativePath}) => {
  const {slug, sponsorName, companyName, featuredImage, personName, articleTitle} = data

  return (
    <GridItemStyled className="grid-item-styled">
      <div>
        {sponsorName
          ? <GridTitle>{sponsorName}</GridTitle>
          : null}
        <GridImgBlock>
          <GatsbyImage alt={companyName || personName || articleTitle} image={getImage(featuredImage)} />
        </GridImgBlock>
        {articleTitle
          ? <GridArticleTitleLink to={`/${relativePath}/${slug}`}>{articleTitle}</GridArticleTitleLink>
          : <GridName>{companyName || personName}</GridName>}
        <GridInfoText dangerouslySetInnerHTML={{__html: paragraph}} />
      </div>
      {articleTitle
        ? null
        : <div>
            <PostLink to={`/${relativePath}/${slug}`}>Learn more</PostLink>
          </div>}
    </GridItemStyled>
  )
}

const GridItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
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
  min-height: 160px;
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

const GridArticleTitleLink = styled(Link)`
  margin-bottom: 15px;
  padding: 0;
  text-transform: uppercase;
  color: #000;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #c99c47;
    text-decoration: underline;
  }
`

export default GridRenderItem