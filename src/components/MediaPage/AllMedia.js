import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import {graphql, useStaticQuery} from "gatsby"
import PageTopDescription from "../PageTopDescription/PageTopDescription"
import GridRenderItem from "../GridRenderItem/GridRenderItem"

const AllSponsors = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/media/"}}) {
      nodes {
        id
        html
        frontmatter {
          slug
          articleTitle
          featuredImage {
            childImageSharp {
              gatsbyImageData(
              width: 360
              height: 220
              webpOptions: {quality: 80}
              quality: 80
              placeholder: BLURRED
              layout: CONSTRAINED
            )
            }
          }
        }
      }
    }
    }
  `)

  const list = data.allMarkdownRemark.nodes

  return (
    <AllSponsorsStyled>
      <Container>
        <PageTopDescription
          title="ARTICLES FROM SPONSORS"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <AllSponsorsInner>
          {list.map(item => {
            return (
              <GridRenderItem
                key={item.id}
                data={item.frontmatter}
                paragraph={item.html}
                relativePath="media"
              />
            )
          })}
        </AllSponsorsInner>
      </Container>
    </AllSponsorsStyled>
  )
}

const AllSponsorsStyled = styled.section`
  padding: 50px 0 70px 0;
`

const AllSponsorsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px 30px;
`

export default AllSponsors