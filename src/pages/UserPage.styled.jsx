import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
export const UserPageContainer = styled.div`
${media.tablet} {
    margin-top: 88px;
}
${media.desktop} {
    display: flex;
    margin-top: 58px;
  }
`;
export const PetsDataWrapper = styled.div`
  margin-left: 32px;
  margin-top: 40px;
  ${media.tablet} {
    margin-top: 20px;
  }
  ${media.desktop} {
    margin-top: 0;
  }
`;
