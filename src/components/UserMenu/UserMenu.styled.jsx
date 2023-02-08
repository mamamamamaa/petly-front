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

export const Btn = styled.button`
  display: flex;
  align-items: center;
  border: ;
  background: none;
  position: absolute;
  fill: #F59256 ;
  @media (max-width: 479px) {
    top: 228px;
    right: -25px;
  }
`
export const Span = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ;
`;
export const Wrap = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;