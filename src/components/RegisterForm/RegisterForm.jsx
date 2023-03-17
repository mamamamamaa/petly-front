import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { object, string, ref } from 'yup';
import { Spinner } from '../Spinner/Spinner';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { useAuth } from '../../redux/hooks';
import { register } from '../../redux/auth/operations';
import { GoogleAuth } from 'components/LoginForm/LoginForm.styled';
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
  Background,
} from './RegisterForm.styled';

const registerSchema = object().shape({
  password: string()
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/^\S*$/, 'Must not contain spaces')
    .required('Password is required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: string()
    .email('Invalid email address')
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Invalid email'
    )
    .required('Email is required'),
  name: string()
    .min(2, 'Min 2 symbols')
    .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters')
    .required('Name is required'),
  mobilePhone: string()
    .matches(/^\+380\d{2}\d{3}\d{2}\d{2}$/, 'Bad phone number')
    .required('Phone is required'),
  city: string()
    .matches(
      /^(([a-zA-Zа-яА-Я]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
      'Error. Example: Brovary, Kyiv'
    )
    .required('City is required'),
});

const { REACT_APP_SERVER_HOST } = process.env;

export const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const isLoading = useAuth().isRefreshing;
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
    formik.values.confirmPassword === '';

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormContainer>
          <Formik validationSchema={registerSchema}>
            <Form1 onSubmit={formik.handleSubmit} autoComplete="off">
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
              <GoogleAuth href={`${REACT_APP_SERVER_HOST}/api/auth/google`}>
                Login with Google
              </GoogleAuth>
              <Text>
                <span>Already have an account?</span>{' '}
                <StyledLink to="/login">Login</StyledLink>
              </Text>
            </Form1>
          </Formik>
          <Background></Background>
        </FormContainer>
      )}
    </>
  );
};
