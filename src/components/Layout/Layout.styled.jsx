import styled from '@emotion/styled';
import { theme } from '../../utils';

const media = {
  mobile: '@media(max-width: 767px)',
  mobileAndTablet: '@media(max-width: 1279px)',
  tablet: '@media (min-width: 768px) and (max-width: 1279px)',
  tabletAndDesktop: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1280px)',
};

export { media };

export const ContainerHeader = styled.div`
  font-family: ${theme.fonts.body};
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
