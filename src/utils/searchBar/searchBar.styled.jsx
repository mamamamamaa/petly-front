import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import {css} from '@emotion/react'
import { AiOutlineCloseCircle } from "react-icons/ai";

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
  border: 1px solid #fff;
  font-weight: 500px;
   padding-right: 12px;
  &:active {    
    border: 2px solid #F59256;
  }
  :hover {
   border: 2px solid #F59256;
  }
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
  background-color: transparent;
  border: 1px solid #fff;
  color: black;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  padding: 0px;

  &:hover {
    background-color: transparent;
     > .IconBtn {
  transform: translateY(-4px);
  }
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

export const IconBtn = styled(AiOutlineCloseCircle)`
margin: 0;
padding: 0;
border: 0; 
outline: none; 
background-color: transparent;
width: 30px;


background-color: #fff;
color: #111111;
:hover {
  width: 34px;
}

`
 