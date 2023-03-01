import { useState } from "react";
import { Formik,  useFormik } from "formik"
import * as yup from "yup";
import  { useAuth }  from "redux/hooks";
import { useDispatch} from "react-redux";
import toast from 'react-hot-toast';
import {login}  from "../../redux/auth/operations";

import Spinner from '../Spinner';
import { ImEye, ImEyeBlocked } from "react-icons/im";
import {
    Container,
    FormLogin,
    FieldLogin,
    FieldPass,
    FieldWrap,
    Title,
    Input,
    ShowPassword,
    Button,
    Text,
    StyledLink,
    ErrorText,
    Background,
    } from "./LoginForm.styled";

const securityEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
//   /^(([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}))$/;
//   /^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const securityPassword =
//  /^\S*$/;
 /^(?=.{7,32})([\S])*$/;

const loginSchema = yup.object().shape({
    email: yup
    .string()
    .min(10)
    .max(63)
    .matches(securityEmail, 'Contain only latin letters, numbers and symbols')
    .email('Invalid email address')
    .required('Email is required'),
   password: yup
   .string()
   .min(7, 'Password must be at least 7 characters')
   .max(32, 'Password must be at most 32 characters')
   .matches(securityPassword, 'Must not contain spaces')
   .required('Password is required'),
});

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    const isLoading = useAuth().isRefreshing;
    const dispatch = useDispatch();

    const onSubmit = async (values, actions) => {
        const { resetForm } = actions; 
        const form = ({ 'email': values.email, 'password': values.password }); 
        const { error } = await dispatch(login(form));

        if (!error) {
        resetForm() 
        }        
     }

    
     const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit,
      });

     const showPassword = () => {
        setShowPass(!showPass);
      };

    return (
        <>
        {isLoading ? (
          <Spinner />
        ) : (
        <Container>
            <Formik
                initialValues={formik.initialValues}
                validationSchema={loginSchema}
            >               
                <FormLogin onSubmit={formik.handleSubmit} autoComplete="off">
                <Title>Login</Title>
                    <FieldLogin>
                        <label htmlFor="email">  
                            <Input 
                            id="loginEmail" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur} 
                            />
                        {formik.errors.email || formik.touched.email ? (
                    <ErrorText>{formik.errors.email}</ErrorText>
                         ) : null}
                        </label>                     
                    </FieldLogin>

                    <FieldPass>
                        <label htmlFor="password">
                        <FieldWrap>
                            <Input 
                            id="password" 
                            type={showPass ? 'text' : 'password'}
                            name="password" 
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur} 
                            />
                            <ShowPassword onClick={showPassword}>
                      {!showPass ? <ImEyeBlocked /> : <ImEye />}
                    </ShowPassword>
                  </FieldWrap>
                  {formik.errors.password && formik.touched.password ? (
                    <ErrorText>{formik.errors.password}</ErrorText>
                  ) : null}
                        </label>
                    </FieldPass>
                                  
                    <Button type="submit">Login</Button>
                    <Text>
                        <span>Don't have an account?</span>{' '}
                        <StyledLink to='/register'>Register</StyledLink>                
                    </Text>
                </FormLogin>
            </Formik>
            <Background></Background>
        </Container>)}
        </>
    )
 }


export default LoginForm 