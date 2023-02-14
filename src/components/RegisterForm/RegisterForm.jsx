import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { object, string, ref } from 'yup';
// import Spinner from "../Spinner";
import { ImEye, ImEyeBlocked } from 'react-icons/im';

// import { useAuth } from "../../redux/hooks";
import { register } from '../../redux/auth/operations';

import {
  Form1,
  FormContainer,
  Input,
  Button,
  Text,
  Title,
  ErrBox,
  BackButton,
  PhoneInput,
  ShowPassword,
  StyledLink,
} from './RegisterForm.styled';

const registerSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Password is required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: string()
    .matches(
      // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email'
    )
    .required('Email is required'),
  name: string()
    .min(2, 'min 2 symbols')
    .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters')
    .required('Name is required'),
  mobilePhone: string()
    .matches(/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/, 'Bad phone number')
    .required('Phone is required'),
  city: string()
    .matches(
      /^(([a-zA-Zа-яА-Я]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
      'Error. Example: Brovary, Kyiv'
    )
    .required('City is required'),
});

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();

  const showForm = () => {
    setIsShown(false);
  };
  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    const { name, email, password, mobilePhone, city } = values;
    dispatch(
      register({
        name,
        email,
        password,
        mobilePhone,
        city,
      }),
      hideForm()
    );
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobilePhone: '',
      city: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
    ? true
    : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <FormContainer>
        <Formik validationSchema={registerSchema}>
          <Form1 onSubmit={formik.handleSubmit}  autoComplete="off">
            <Title>Registration</Title>
            {isShown && (
              <>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.email || formik.touched.email ? (
                    <ErrBox>{formik.errors.email}</ErrBox>
                  ) : null}
                </div>
              </>
            )}

            {isShown && (
              <>
                <div>
                  <Input
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />

                  <ShowPassword onClick={showPassword}>
                    {!showPass ? <ImEyeBlocked /> : <ImEye />}
                  </ShowPassword>
                  {formik.errors.password && formik.touched.password ? (
                    <ErrBox>{formik.errors.password}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {isShown && (
              <>
                <div>
                  <Input
                    name="confirmPassword"
                    type={showConfirmPass ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                  />
                  <ShowPassword onClick={showConfirmPassword}>
                    {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                  </ShowPassword>
                  {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                    <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {isShown && (
              <Button type="button" onClick={showForm} disabled={isValid}>
                Next
              </Button>
            )}
            {!isShown && (
              <>
                <div>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.name && formik.touched.name ? (
                    <ErrBox>{formik.errors.name}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && (
              <>
                <div>
                  <Input
                    name="city"
                    type="text"
                    placeholder="City, region"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.city && formik.touched.city ? (
                    <ErrBox>{formik.errors.city}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && (
              <>
                <div>
                  <PhoneInput
                    type="text"
                    placeholder="Mobile phone"
                    onChange={formik.handleChange}
                    value={formik.values.mobilePhone}
                    onBlur={formik.handleBlur}
                    name="mobilePhone"
                  />

                  {formik.errors.mobilePhone && formik.touched.mobilePhone ? (
                    <ErrBox>{formik.errors.mobilePhone}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && <Button type="submit">Registration</Button>}
            {!isShown && (
              <BackButton type="button" onClick={hideForm}>
                Back
              </BackButton>
            )}
            <Text>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/login">Login</StyledLink>
            </Text>
          </Form1>
        </Formik>
      </FormContainer>
      {/* )} */}
    </>
  );
};

export default RegisterForm;
