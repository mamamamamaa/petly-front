import styled from '@emotion/styled';

export const StyledFriend = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 14px 4px 12px 4px;
  overflow: hidden;

  h3 {
    min-height: 38px;
  }
  h3 > a {
    text-decoration-line: underline;
  }
  > div {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
  dl {
    text-align: left;
    > div {
      margin-bottom: 4px;

      &:has(button:hover) {
      }
      &:has(a:hover) {
      }
      button {
        border: none;
        background-color: transparent;
      }
    }
    a {
      text-decoration-line: underline;
    }
  }
  dd {
    margin: 0;
  }
  img {
    width: 110px;
    height: 78px;
  }
`;
