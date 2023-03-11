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
import { FormattedMessage } from 'react-intl'; 
import { useIntl } from 'react-intl';  

const securityEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
//   /^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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

// const FormError = ({ name }) => {
//     return (
//         <ErrorMessage
//             name={name}            
//             render={message => <ErrorText>{message}</ErrorText>}
//         />
//     )
// }


const LoginForm = () => {
    const { formatMessage } = useIntl();
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


export default LoginForm 