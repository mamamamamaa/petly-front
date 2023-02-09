import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Search = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormEl = styled(Form)`
  display: flex;
  justify-content: center;
`;

export const Input = styled(Field)`
  outline: none;
  border-radius: 24px;
  color: #535353;
  background-color: #fff;
  border: 1px solid red;
  font-weight: 500px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.4;
    width: 280px;
    padding-left: 12px;
    height: 36px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    width: 584px;
    padding-left: 20px;
    height: 40px;
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid green;
  color: black;
  cursor: pointer;
  outline: none;
  border-radius: 50%;

  &:hover {
    background-color: #d4d1d1;
  }
  @media screen and (max-width: 767px) {
    height: 38px;
    width: 38px;
    left: 86%;
  }
  @media screen and (min-width: 768px) {
    height: 42px;
    width: 42px;
    left: 93.5%;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

