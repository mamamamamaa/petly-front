import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const PetUl = styled.ul`
  background: #fdf7f2;
`;
export const PetLi = styled.li`
  width: 100%;
  padding-top: 16px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  ${media.tablet} {
    position: relative;
  }
  ${media.desktop} {
  }
`;
