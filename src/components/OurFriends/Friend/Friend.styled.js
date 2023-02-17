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
  }
`;

export const DescList = styled.ul`
  justify-content: center;
`;

export const Item = styled.li`
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  color: ${theme.colors.titleText};
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.3;
  &:hover,
  &:focus {
    color: ${theme.colors.primary};
  }
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

export const AdressLink = styled.a`
  text-decoration-line: underline;
  color: #000000;
  &:hover,
  &:focus {
    color: ${theme.colors.primary};
  }
`;
export const WorkingModal = styled.div`
  position: absolute;
  /* max-width: 120px; */
  max-height: 160px;

  background: ${theme.colors.accentText};
  border: 1px solid ${theme.colors.primary};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  line-height: ${theme.lineHeights.body};
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  background-color: ${theme.colors.accentText};
`;

export const Day = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const DayOfWeek = styled.span`
  margin-right: 4px;
`;

export const HoursBtn = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: ${theme.lineHeights.body};
  font-weight: ${theme.fontWeights.normal};
  padding: 0;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
