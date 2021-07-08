import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PostLink } from "../../UI/Links"

const EventItem = ({data, content, index}) => {
  const {eventTitle, eventTime, slug, ticketsAvailable, featuredImage} = data

  return (
    <AllEventsItem index={index}>
      <AllEventsImageWrapper>
        {!ticketsAvailable
          ? <AllEventsNoTickets>
            sold out
          </AllEventsNoTickets>
          : null}
        <GatsbyImage alt={eventTitle} image={getImage(featuredImage)} />
      </AllEventsImageWrapper>
      <div>
        <AllEventsTitle>{eventTitle}</AllEventsTitle>
        <AllEventsTime>{eventTime}</AllEventsTime>
        <AllEventsContent dangerouslySetInnerHTML={{__html: content}} />
        <PostLink to={`/upcoming-events/${slug}`}>Learn more</PostLink>
      </div>
    </AllEventsItem>
  )
}

const AllEventsItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  
  @media (max-width: 767px) {
    flex-direction: column;
  }
  
  ${props => props.index !== 0 &&`
    padding-top: 25px;
    border-top: 1px solid #d6d6d6;
  `}
`

const AllEventsImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-right: 30px;

  @media (max-width: 767px) {
    margin-right: 0;
  }
`

const AllEventsNoTickets = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 215px;
  height: 55px;
  border: 3px solid #ec3e3e;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  line-height: 55px;
  text-transform: uppercase;
  color: #ec3e3e;
  transform: translate(-50%, -50%) rotateZ(30deg);
  z-index: 10;
`

const AllEventsTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 500;
  text-transform: uppercase;
  
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`

const AllEventsTime = styled.p`
  margin-bottom: 15px;
  color: #c99c47;
  font-weight: 500;
  font-size: 17px;
`

const AllEventsContent = styled.div`
  margin-bottom: 25px;
`

export default EventItem