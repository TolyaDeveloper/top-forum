import React from "react"
import Title from "../UI/Title"
import styled from "styled-components"

const PageTopDescription = ({title, paragraph}) => (
  <React.Fragment>
    <PageTopTitle>{title}</PageTopTitle>
    <PageTopParagraph>{paragraph}</PageTopParagraph>
  </React.Fragment>
)

const PageTopTitle = styled(Title)`
  margin-bottom: 20px;
`

const PageTopParagraph = styled.p`
  margin-bottom: 40px;
  text-align: justify;
  text-align-last: center;
  font-size: 17px;
  line-height: 1.76;
`

export default PageTopDescription