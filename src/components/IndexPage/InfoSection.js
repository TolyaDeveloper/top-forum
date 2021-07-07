import React, { useState } from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import { StaticImage } from "gatsby-plugin-image"
import { PostLink, RegisterLink } from "../UI/Links"
import { SubscribeButton } from '../UI/Buttons'
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe"

const InfoSection = () => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const changeVisibility = () => {
    setModalVisibility(!modalVisibility)
  }

  modalVisibility ? document.body.style.overflow = "hidden": document.body.style.overflow = "visible"

  return (
    <React.Fragment>
      <InfoSectionStyled>
        <Container>
          <ContentText>
            TOP FORUM is an international business communication company. Our main idea is to take your business to the next level. To make this transformation happen you need to have a platform to meet hundreds of new clients and specialists, become aware of new trends and soak up fresh ideas from best experts. It's what we call the forum impact. Face to face communication with like-minded professionals is a personal experience which leads your business to a great success. TOP FORUM business conferences give you the unique opportunity to set new goals, open your new strategy and implement the campaigns that will give you superiority in your industry. Just invest in your future.
          </ContentText>
          <InfoInner>
            <InfoCart>
              <div>
                <StaticImage
                  src="../../images/icons/info-sponsors-icon.png"
                  alt="info sponsors"
                  width={170}
                  height={170}
                  placeholder="tracedSVG"
                  style={InfoImgStyles}
                />
                <InfoCartTitle>
                  FOR FUTURE SPONSORS AND EXHIBITORS
                </InfoCartTitle>
                <InfoText>
                  TOP FORUM conferences are the best route to raise brand awareness, get pre- and after-event promotion among your target audience, confirm the highest level of your business, present your company services and catch the interest of highly qualified prospects and as a result to find new clients
                </InfoText>
              </div>
              <div>
                <PostLinkStyled to="/sponsors">Learn more</PostLinkStyled>
                <InfoBottomAnnouncer>
                  Wealth TOP FORUM Israel 2021
                </InfoBottomAnnouncer>
              </div>
            </InfoCart>
            <InfoCart>
              <div>
                <StaticImage
                  src="../../images/icons/info-delegates-icon.png"
                  alt="info become delegate"
                  width={170}
                  height={170}
                  placeholder="tracedSVG"
                  style={InfoImgStyles}
                />
                <InfoCartTitle>
                  BECOME A DELEGATE
                </InfoCartTitle>
                <InfoText>
                  TOP FORUM business conferences and events serve as the best platform to learn useful insights and new trends in your business area, engage with peers from the global community and choose the best available offer, and all that in one place, so your participation will safe dozens of working hours.
                </InfoText>
              </div>
              <div>
                <PostLinkStyled to="/media">Learn more</PostLinkStyled>
                <InfoBottomAnnouncer>
                  Wealth TOP FORUM Israel 2021
                </InfoBottomAnnouncer>
              </div>
            </InfoCart>
            <InfoCart>
              <div>
                <StaticImage
                  src="../../images/icons/info-speakers-icon.png"
                  alt="info future speakers"
                  width={170}
                  height={170}
                  placeholder="tracedSVG"
                  style={InfoImgStyles}
                />
                <InfoCartTitle>
                  FOR FUTURE SPEAKERS
                </InfoCartTitle>
                <InfoText>
                  We thoroughly choose the key experts to make a speech at TOP FORUM international conferences and our audience obtains the most up-to-date information about new trends on the market. Should you like to share useful insights, become a speaker or to take part in panel discussion, please contact us.
                </InfoText>
              </div>
              <div>
                <PostLinkStyled to="/speakers">Learn more</PostLinkStyled>
                <InfoBottomAnnouncer>
                  Wealth TOP FORUM Israel 2021
                </InfoBottomAnnouncer>
              </div>
            </InfoCart>
          </InfoInner>
          <InfoButtonsInner>
            <RegisterLinkStyled to="/register">REGISTER NOW</RegisterLinkStyled>
            <SubscribeButton
              changeVisibility={changeVisibility}
              onClick={changeVisibility}
            >
              SUBSCRIBE
            </SubscribeButton>
          </InfoButtonsInner>
        </Container>
      </InfoSectionStyled>
      {modalVisibility ? <ModalSubscribe changeVisibility={changeVisibility} /> : null}
    </React.Fragment>
  )
}

const InfoSectionStyled = styled.section`
  padding: 65px 0 50px 0;
`

const ContentText = styled.p`
  margin-bottom: 60px;
  font-size: 17px;
  line-height: 1.76;
  text-align-last: center;
`

const InfoInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(450px, auto);
  column-gap: 30px;
  margin-bottom: 40px;
`

const InfoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`

const InfoImgStyles = {
  marginBottom: '25px'
}

const InfoCartTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
`

const InfoText = styled.p`
  margin-bottom: 20px;
  text-align: justify;
  text-align-last: center;
  font-size: 15px;
  line-height: 1.6;
`

const PostLinkStyled = styled(PostLink)`
  margin-bottom: 15px;
`

const RegisterLinkStyled = styled(RegisterLink)`
  margin-right: 15px;
`

const InfoBottomAnnouncer = styled.p`
  color: #919191;
  font-size: 11px;
  font-weight: 400;
`

const InfoButtonsInner = styled.div`
  display: flex;
  justify-content: center;
`

export default InfoSection