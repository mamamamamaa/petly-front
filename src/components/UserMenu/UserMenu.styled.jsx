import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";
import { NavLink } from "react-router-dom";

export const UserLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f59256;
    border-radius: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 28px;
    padding-left: 30px;
    /* padding: 10px, 28px; */
    /* width: 100%; */
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.accentText};
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-decoration: none;
    :hover,
    :focus {
        text-decoration: underline;
    }
    ${media.mobile} {
        height: 35px;
        :last-child {
        margin-left: 12px;
        }
    }
`;

export const Text = styled.span`
    margin-left: 14px;
`;
