import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useAuth } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Spinner } from '../Spinner/Spinner';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
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
import { FormattedMessage } from 'react-intl'; 
import { useIntl } from 'react-intl';  

const securityEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const securityPassword = /^\S*$/;

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(securityEmail, 'Email must contain symbol @')
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(securityPassword, 'Must not contain spaces')
    .required('Password is required'),
});

const { REACT_APP_SERVER_HOST } = process.env;

export const LoginForm = () => {
    const { formatMessage } = useIntl();
    const [showPass, setShowPass] = useState(false);
    const isLoading = useAuth().isRefreshing;
    const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const { resetForm } = actions;
    const form = { email: values.email, password: values.password };
    const { error } = dispatch(login(form));

    if (!error) {
      resetForm();
    }
  };

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
                <Title><FormattedMessage id="login"/></Title>
                    <FieldLogin>
                        <label htmlFor="email">  
                            <Input 
                            id="loginEmail" 
                            type="email" 
                            name="email" 
                            placeholder={formatMessage({ id: 'email' })} 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur} 
                            />
                        {formik.errors.email || formik.touched.email ? (
                    <ErrorText>{formik.errors.email}</ErrorText>
                         ) : null}
                            {/* <FormError name="email" /> */}
                        </label>                     
                    </FieldLogin>

                    <FieldPass>
                        <label htmlFor="password">
                        <FieldWrap>
                            <Input 
                            id="password" 
                            type={showPass ? 'text' : 'password'}
                            name="password" 
                            placeholder={formatMessage({ id: 'password' })}
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

                            {/* <FormError name="password" /> */}
                        </label>
                    </FieldPass>
                                  
                    <Button type="submit"><FormattedMessage id="login"/></Button>
                    <GoogleAuth href={`${REACT_APP_SERVER_HOST}/api/auth/google`}>
                    <FormattedMessage id="loginGoogle"/>
                    </GoogleAuth>
                    <Text>
                        <span><FormattedMessage id="doYouHaveAnAccount"/></span>{' '}
                        <StyledLink to='/register'><FormattedMessage id="registration"/></StyledLink>                
                    </Text>
                </FormLogin>
            </Formik>
            <Background></Background>
        </Container>)}
        </>
    )
 }




