import React from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import PageTopDescription from "../PageTopDescription/PageTopDescription"
import { graphql, useStaticQuery } from "gatsby"
import EventItem from "./EventItem/EventItem"

const AllEvents = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/events/"}}) {
        nodes {
          id
          html
          frontmatter {
            eventTitle
            eventTime
            ticketsAvailable
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 360
                  height: 220
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 80
                  webpOptions: {quality: 80}
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
    <AllEventsStyled>
      <Container>
        <PageTopDescription
          title="OUR EVENTS"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div>
          {list.map((item, index) => (
            <EventItem key={item.id} content={item.html} data={item.frontmatter} index={index} />
          ))}
        </div>
      </Container>
    </AllEventsStyled>
  )
}

const AllEventsStyled = styled.section`
  padding: 50px 0 60px 0;
`

export default AllEvents