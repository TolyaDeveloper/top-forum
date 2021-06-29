import styled from "styled-components"
import {Link} from "gatsby"

const LinkStyled = styled(Link)`
  padding: 15px 10px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  background-color: ${props => props.$pale ? "#d4c198" : "#c99c47"};
  text-align: center;
  
  ${props => props.$black &&`
    background-color: #323232;
    color: white;
  `}
  
  ${props => props.$fixed &&`
    min-width: 155px;
  `}
`

export default LinkStyled