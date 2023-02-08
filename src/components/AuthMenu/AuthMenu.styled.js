import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from "../Layout/Layout.styled";


export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  width: 100%;
  background: #fff;
  :last-child {
    margin-left: 20px;
  }
  ${media.mobile} {
    height: 35px;
    :last-child {
      margin-left: 12px;
    }
  }
`;

export const navLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 28px;
  text-decoration: none;
  ${media.mobile} {
    padding: 8px 28px;
  }
`;

export const Sp = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;