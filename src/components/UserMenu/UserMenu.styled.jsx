import styled from '@emotion/styled'

import { theme } from '../../utils/theme';

export const Card = styled.div`
   width: 280px;
  height: 537px;
  background: ${theme.colors.accentText};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius:  20px;
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


export const UserPhoto = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
`;