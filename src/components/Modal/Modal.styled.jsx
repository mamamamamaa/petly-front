import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import { theme } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  overscroll-behavior: none;
  overflow: scroll;
  top: 0px;
  left: 0px;
  z-index: 30;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Window = styled.div`
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  height: auto;
  width: auto;
  border-radius: 40px;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f59256;
    border-radius: 50px;
  }
  ${media.mobile} {
    &.OurTeam,
    &.addNotice,
    &.AddPet {
    align-self: flex-start;
  }
  }
`;

export const Container = styled.div``;

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
  height: 336px;
  width: 288px;
`;

export const BoxSecond = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.h2``;

export const Ul = styled.ul``;

export const Li = styled.li``;

export const TitleProperty = styled.h3``;

export const Text = styled.p``;

export const Box = styled.div`
  margin-top: 28px;
  display: flex;
`;

export const TitleComment = styled.h3`
  margin-bottom: 130px;
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