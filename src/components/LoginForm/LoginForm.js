import { useState } from "react";
import { Formik,  useFormik } from "formik"
import * as yup from "yup";
import { useDispatch } from "react-redux";

import {login}  from "../../redux/auth/operations";

// import Spinner from '../Spinner';
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
    ErrorText
    } from "./LoginForm.styled";

const securityEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const securityPassword = /^\S*$/;

const loginSchema = yup.object().shape({
    email: yup
    .string()
    .matches(securityEmail, 'Email must contain symbol @')
    .email('Invalid email adress')
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
    const [showPass, setShowPass] = useState(false);

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
        {/* {isLoading ? (
          <Spinner />
        ) : ( */}
        <Container>
            <Formik
                initialValues={formik.initialValues}
                validationSchema={loginSchema}
            >               
                <FormLogin onSubmit={formik.handleSubmit} autoComplete="on">
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
                            {/* <FormError name="password" /> */}
                        </label>
                    </FieldPass>
                                  
                    <Button type="submit">Login</Button>
                    <Text>
                        <span>Don't have an account?</span>{' '}
                        <StyledLink to='/register'>Register</StyledLink>                
                    </Text>
                </FormLogin>
            </Formik>
        </Container>
        </>
    )
 }


export default LoginForm 