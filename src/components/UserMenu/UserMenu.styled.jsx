import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";
import { theme } from '../../utils';
import { NavLink } from "react-router-dom";

export const UserLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${theme.colors.primary};
    border-radius: 40px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.accentText};
    text-decoration: none;
    &.active {
        text-decoration: none;
    }
    :hover,
    :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
    ${media.mobile} {
        min-height: 35px;
        padding-right: 37px;
        padding-left: 37px;
    };
    ${media.tablet} {
        min-height: 44px;
        padding-right: 28px;
        padding-left: 30px;
    }
    ${media.desktop} {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 28px;
        padding-left: 30px;
    }
`;

export const Text = styled.span`
    margin-left: 14px;
    font-family: ${theme.fonts.body};
    font-style: normal;
    font-weight: ${theme.fontWeights.normal};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
`;