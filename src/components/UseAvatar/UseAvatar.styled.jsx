import styled from '@emotion/styled';
import { Form, Field } from 'formik';


export const Formav = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    /* z-index: 20; */
` 
export const Inputav = styled(Field)`

 opacity: 0;
  position: absolute;
  z-index: -1;
` 
export const Labelav = styled.label`
  /* border: 1px solid black;
  border-radius: 12px;
  padding: 20px;

  display: flex;
  align-items: center;
  cursor: pointer; */
` 
export const Imgav = styled.img`
  /* border: 1px dashed gray; */
  width: 233px;
  height: 233px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`
// ======================== for avatar