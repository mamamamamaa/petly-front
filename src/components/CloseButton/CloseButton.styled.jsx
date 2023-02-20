import styled from '@emotion/styled';
import { theme } from '../../utils';

export const Close = styled.button`
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  position: absolute;

  width: 34px;
  height: 34px;

  @media (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }

  top: 20px;
  right: 20px;

  background: ${theme.colors.background};
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  :hover,
  :focus {
    transform: rotate(90deg) scale(1.05);
    transition: transform 0.5s; 
  }
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;

  @media (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;
