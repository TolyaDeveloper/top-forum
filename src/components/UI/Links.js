import styled from "styled-components"
import { Link } from "gatsby"

const PostLink = styled(Link)`
  padding: 0 10px;
  min-width: 120px;
  height: 38px;
  font-size: 13px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-weight: 400;
  background-color: #d4c198;
  transition: background-color .2s ease-out;
  
  &:hover {
    background-color: #c99c47;
  }
`

const RegisterLink = styled(Link)`
  padding: 0 10px;
  min-width: 153px;
  height: 42px;
  font-size: 13px;
  text-align: center;
  line-height: 42px;
  color: #fff;
  font-weight: 400;
  background-color: #c99c47;
  transition: opacity .2s ease-out;
  
  &:hover {
    opacity: 0.8;
  }
`

const HeaderTopLink = styled(RegisterLink)`
  color: #323232;
  background-color: #e8d8b6;
`

export {
  PostLink,
  RegisterLink,
  HeaderTopLink
}