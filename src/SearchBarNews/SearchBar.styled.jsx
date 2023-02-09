import styled from '@emotion/styled';

import { Form, Field } from 'formik';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const FormEl = styled(Form)`
  position: relative;
  width: 200px;
  align-self: center;
`;

export const Input = styled(Field)`
  width: 400px;
  height: 40px;
  outline: none;
  font-size: 24px;
  color: #0e0f69;
  padding: 8px;
  border-radius: 4px;
  background-color: #9bb9f4;
  border: 2px solid #0e0f69;

  &::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    display: flex;
    align-items: center;

    color: #0e0f69;
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #9bb9f4;
  color: white;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 2px solid #0e0f69;
  &:hover {
    background-color: #0e0f69;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
