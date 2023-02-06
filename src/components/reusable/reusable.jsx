import styled from '@emotion/styled';

import { theme } from '../../helpers/theme';

export const Container = styled.div`
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 320px) {
    width: 320px;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  :hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.accentText};
  }
  @media (min-width: 768px) {
    padding: 10px 28px;
    height: 35px;
  }
`;

export const Card = styled.div`
  height: 606px;
  left: 20px;
  top: 388px;

  background: #ffffff;
  /* Тень для карточек */

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  @media (min-width: 420px) {
    border-radius: 0px 0px 20px 20px;
  }
`;

export const Button = styled.div`
  display: inline;
  padding: 8px 28px;
  height: 38px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  :hover {
    border: 2px solid #ff6101;
    :hover {
      color: #ff6101;
    }
  }
`;
