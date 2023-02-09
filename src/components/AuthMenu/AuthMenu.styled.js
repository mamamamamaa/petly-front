import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from "../Layout/Layout.styled";


export const User = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
`;
export const Button = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  /* width: 100%; */
  background: #fff;
  color: ${props => props.theme.colors.titleText};
  :last-child {
    margin-left: 20px;
  }
  :hover,
  :focus {
    /* border: 2px solid #ff6101; */
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.accentText};
  }
  ${media.mobile} {
    height: 35px;
    :last-child {
      margin-left: 12px;
    }
  }
`;

export const NavigLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  padding: 10px 28px;
  text-decoration: none;
  
  ${media.mobile} {
    padding: 8px 28px;
  }
`;

export const Sp = styled.span`
  font-family: Manrope;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;
