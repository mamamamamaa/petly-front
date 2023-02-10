import styled from '@emotion/styled';
import { theme } from '../utils/theme';
// import { ReactComponent as AddIcon } from '../../../src/utils/svg/add.svg';

export const Container = styled.div`
  font-family: ${theme.fonts.body};
  background: ${theme.colors.mainBg};
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const Badge = styled.div`
  padding: 8px 28px;
  display: inline;
  height: 35px;
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 14px;
  line-height: ${theme.lineHeights.body};
  letter-spacing: 0.04em;
  cursor: pointer;
  :hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.accentText};
  }
  @media (min-width: 768px) {
    padding: 10px 28px;
    height: 35px;
    font-size: 20px;
    line-height: ${theme.lineHeights.body};
  }
`;

export const Card = styled.div`
  /* width: 280px; */
  height: 606px;
  background: ${theme.colors.accentText};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    border-radius: 0px 0px 40px 40px;
    height: 246px;
    /* width: 336px; */
  }
  @media (min-width: 1280px) {
    /* width: 288px; */
    height: 606px;
  }
`;

export const FriendsCard = styled.div`
  /* display: flex; */
  /* width: 100%; */
  padding: 12px 4px;
  width: 280px;
  height: 192px;
  background: ${theme.colors.accentText};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  gap: 12px;
  cursor: pointer;
  @media (min-width: 768px) {
    border-radius: 40px;
    width: 336px;
    height: 246px;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 287px;
  }
`;

export const Button = styled.div`
  display: inline;
  padding: 8px 28px;
  height: 38px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${theme.lineHeights.body};
  letter-spacing: 0.04em;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
`;

export const AddPet = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background: ${theme.colors.primary};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  cursor: pointer;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Add = styled.div`
  font-family: 'Manrope';
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  line-height: ${theme.lineHeights.body};
  color: #ffffff;
`;
