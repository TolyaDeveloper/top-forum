import React from "react"
import LinkStyled from "../../UI/Link"
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

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
        <LinkStyledEvents to={`/upcoming-events/${slug}`} $pale>Learn more</LinkStyledEvents>
      </div>
    </AllEventsItem>
  )
}

const AllEventsItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  
  ${props => props.index !== 0 &&`
    padding-top: 25px;
    border-top: 1px solid #d6d6d6;
  `}
`

const AllEventsImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-right: 30px;
`

const AllEventsNoTickets = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(30deg);
  width: 215px;
  height: 55px;
  border: 3px solid #ec3e3e;
  text-align: center;
  line-height: 55px;
  text-transform: uppercase;
  color: #ec3e3e;
  font-size: 30px;
  font-weight: 900;
  z-index: 10;
`

const LinkStyledEvents = styled(LinkStyled)`
  padding: 15px 25px;
`

const AllEventsTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: 500;
  text-transform: uppercase;
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