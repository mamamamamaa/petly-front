import styled from '@emotion/styled';
import { theme } from '../../../utils/theme';

export const Title = styled.h3`
  font-weight: ${theme.fontWeights.bold};
  font-size: 12px;
  line-height: ${theme.lineHeights.body};

  line-height: 27px;

  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Link = styled.a`
  color: ${theme.colors.primary};
  text-decoration-line: underline;
`;

export const Description = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const Image = styled.img`
  width: 110px;
  height: 78px;
  margin-top: 12px;
  margin-right: 12px;
  margin-bottom: 74px;
  margin-left: 4px;
  @media (min-width: 768px) {
    width: 120px;
    height: 85px;
    margin-top: 13px;
    margin-right: 14px;
    margin-bottom: 107px;
  }
  @media (min-width: 1280px) {
    width: 158px;
    height: 112px;
    margin-top: 16px;
    margin-right: 16px;
    margin-bottom: 1116px;
  }
`;

// export const DescList = styled.ul`
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
// `;

export const Item = styled.li`
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;

  color: ${theme.colors.titleText};

  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.4;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
