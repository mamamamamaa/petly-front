import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const PetUl = styled.ul`
  width: 100%;
  background: #fdf7f2;
  padding-bottom: 80px;
  margin-top: 26px;  
  ${media.tablet} {   
    padding-bottom: 100px;
    margin-top: 22px;
  }
  ${media.desktop} {    
    padding-bottom: 40px;
    margin-top: 25px;
  }
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
  ${media.tabletAndDesktop} {
    position: relative;
  }
`;
