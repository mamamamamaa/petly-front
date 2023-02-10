import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";
import { NavLink } from "react-router-dom";

export const UserLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f59256;
    border-radius: 40px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.accentText};
    text-decoration: none;
    :hover,
    :focus {
        text-decoration: underline;
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
    font-family: ${props => props.theme.fonts.body};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
`;
