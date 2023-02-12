import styled from '@emotion/styled';
import adver from 'utils/svg/adv.svg';
import { theme } from '../../utils';
import { media } from 'components/Layout/Layout.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 540px;
  width: 704px;
`;

export const WraperMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wraper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 288px;
  width: 100%;
  display: block;
  cursor: pointer;
  ${media.tablet} {
    width: 336px;
  }
  ${media.desktop} {
    width: 288px;
  }
`;

export const AdvWrapper = styled.div`
  position: absolute;
  background-size: 158px 28px;
  background-image: url(${adver});
  background-repeat: no-repeat;
  width: 158px;
  height: 28px;
  top: 60px;
  left: 20;
`;

export const AdvTitle = styled.span`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.titleText};
  margin-left: 20px;
  margin-top: 6px;
`;

export const BoxSecond = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
`;

export const BoxList = styled.div`
  display: flex;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  display: flex;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleProperty = styled.h3`
  margin-right: 50px;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
`;

export const Box = styled.div`
  margin-top: 28px;
  display: flex;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 38px;
  gap: 12px;
`;

export const ButtonModal = styled.button`
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
