import styled from '@emotion/styled';
import { theme } from '../../../utils';

export const Title = styled.a`
  display: block;
  font-weight: ${theme.fontWeights.bold};
  font-size: 12px;
  line-height: 1.33;
  color: ${theme.colors.primary};
  text-decoration-line: underline;

  text-align: center;
  @media (min-width: 768px) {
    line-height: 1.375;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    line-height: 1.35;
    font-size: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  @media (min-width: 768px) {
    gap: 14px;
    margin-top: 16px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 110px;
  /* height: 78px; */

  margin-bottom: 74px;
  margin-left: 4px;
  @media (min-width: 768px) {
    width: 120px;
    /* height: 85px; */

    margin-bottom: 107px;
  }
  @media (min-width: 1280px) {
    width: 158px;
    /* height: 112px; */
    margin-bottom: 116px;
  }
`;

export const DescList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const AdressLink = styled.a`
  text-decoration-line: underline;
  color: #000000;
  :hover,
  :focus {
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
  line-height: 1.33;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${theme.colors.black};
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

export const Item = styled.li`
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  color: ${theme.colors.black};
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.4;
  }
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
