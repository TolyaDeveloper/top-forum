import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import { graphql, useStaticQuery } from "gatsby"
import PageTopDescription from "../PageTopDescription/PageTopDescription"
import ConferenceSelect from "../ConferenceSelect/ConferenceSelect"
import GridRenderItem from "../GridRenderItem/GridRenderItem"

const AllSponsors = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/speakers/"}}) {
      nodes {
        id
        html
        frontmatter {
          personName
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(
              width: 135
              height: 135
              webpOptions: {quality: 80}
              quality: 80
              placeholder: BLURRED
              layout: FIXED
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
          title="OUR SPEAKERS"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <ConferenceSelect topText="please select a conference">
          <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM Israel 2021</option>
          <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM ... 2021</option>
          <option value="Wealth TOP FORUM Israel 2021">Wealth TOP FORUM ...... 2021</option>
        </ConferenceSelect>
        <AllSponsorsInner>
          {list.map(item => {
            return (
              <GridRenderItem
                key={item.id}
                data={item.frontmatter}
                paragraph={item.html}
                relativePath="speakers"
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(305px, auto));
  grid-auto-rows: 305px;
  gap: 50px 30px;
`

export default AllSponsors