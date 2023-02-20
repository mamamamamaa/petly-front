import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';
import { useState } from 'react';
import {
  Title,
  Wrapper,
  Card,
  Form1,
  DivInput,
  Input,
  BtnInput,
  BtnLogOut,
  FormLabel,
  LogOutSpan,
  FormAndPhotoWrapper,
} from './UserCard.styled';
import { Container } from '../../utils/reusable';
import { HiCamera } from 'react-icons/hi2';
import { HiPencil } from 'react-icons/hi';
import { FiLogOut, FiCheck } from 'react-icons/fi';
import { logout } from '../../redux/auth/operations';
import { FileUploader } from '../UseAvatar/UserAvatar';
import {
  updateUser,
  getUserData,
  updateAvatar,
} from '../../redux/user/operations';
import { Formik, useFormik, ErrorMessage } from 'formik';
//import avatar from "../../images/avatart.jpg";
import { useEffect } from 'react';
import * as Yup from 'yup';

const UserCard = ({ handleDragEmpty, handleDrop }) => {
  //========================================
  const phoneRegExp = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    birthday: Yup.date().required('Required'),
    mobilePhone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .notRequired(),
    city: Yup.string()
      .matches(
        /^(([a-zA-Zа-яА-Я]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
        'Error. Example: Brovary, Kyiv'
      )
      .required('City is required'),
  });
  //==========================================

  const [active, setActive] = useState('');

  //=========for avatar============
  const [changeBtn, setChangeBtn] = useState(false);

  const handleClick = () => {
    // e.preventDefault();
    setChangeBtn(!changeBtn);
    setActive(!active);
  };

  const dispatch = useDispatch();

  const { user } = useUser();
  //console.log(user)

  const onChangeHandler = e => {
    console.log('1111');
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    console.log(e.target.files);
    dispatch(updateAvatar(formData));
  };
  ///////////////////////////////

  //////формик
  // const onSubmit = (value) => {

  let formik = useFormik({
    initialValues: {
      name: user.user.name || '',
      email: user.user.email || '',
      birthday: user.user.birthday || '',
      mobilePhone: user.user.mobilePhone || '',
      city: user.user.city || '',
    },
    validationSchema: userSchema,
    onSubmit: values => {
      const { name, email, birthday, mobilePhone, city } = values;

      dispatch(
        updateUser({
          name,
          email,
          birthday: birthday.trim(),
          mobilePhone,
          city,
        })
      );
    },
    enableReinitialize: true,
  });
  //console.log(formik);

  useEffect(() => {
    dispatch(getUserData());
    console.log('getUserData');
  }, [dispatch]);

  //============================================
  // code Yulya
  const handleLogout = () => {
    dispatch(logout());
  };

  //validationSchema={userSchema}
  return (
    // do NOT remove this div, reusable Container moved upper to UserPage
    <div>
      <Title>My information:</Title>

      <Card>
        <FormAndPhotoWrapper>
          <Wrapper>
            <FileUploader />
          </Wrapper>
          <Formik>
            <Form1 onSubmit={formik.handleSubmit}>
              <DivInput>
                <FormLabel>
                  Name:
                  <Input
                    name="name"
                    type="name"
                    placeholder="name"
                    onChange={formik.handleChange}
                    onSubmit={handleClick}
                    value={formik.values.name}
                  />
                  <ErrorMessage name="name" component="span" />
                </FormLabel>

                <BtnInput name="name" type="button" onClick={handleClick}>
                  {changeBtn === true ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </DivInput>

              <DivInput>
                <FormLabel>
                  Email:
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onSubmit={handleClick}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="email" component="span" />
                </FormLabel>

                <BtnInput type="button" onClick={handleClick}>
                  {changeBtn === true || Input.name === active ? (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  ) : (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  )}
                </BtnInput>
              </DivInput>

              <DivInput>
                <FormLabel>
                  Birthday:
                  <Input
                    name="birthday"
                    id="birthday"
                    type="text"
                    placeholder="00.00.0000"
                    onChange={formik.handleChange}
                    onClick={handleClick}
                    value={formik.values.birthday}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="birthday" component="span" />
                </FormLabel>


                <BtnInput type="button" onClick={handleClick}>
                  {changeBtn === true ? (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  ) : (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  )}
                </BtnInput>
              </DivInput>

              <DivInput>
                <FormLabel>
                  Phone:
                  <Input
                    name="mobilePhone"
                    id="mobilePhone"
                    type="text"
                    placeholder="+38000000000"
                    onChange={formik.handleChange}
                    onSubmit={handleClick}
                    value={formik.values.mobilePhone}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="mobilePhone" component="span" />
                </FormLabel>


                <BtnInput type="button" onClick={handleClick}>
                  {Input.name === active || changeBtn === true ? (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  ) : (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  )}
                </BtnInput>
              </DivInput>

              <DivInput>
                <FormLabel>
                  City:
                  <Input
                    name="city"
                    id="city"
                    type="text"
                    placeholder="City, region"
                    onChange={formik.handleChange}
                    onSubmit={handleClick}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="city" component="span" />
                </FormLabel>


                <BtnInput type="button" onClick={handleClick}>
                  {Input.name === active || changeBtn === true ? (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  ) : (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  )}
                </BtnInput>
              </DivInput>

              <BtnInput type="submit">
                {Input === active || changeBtn === true ? (
                  <FiCheck color="#F59256" width="30" heigh="30" />
                ) : (
                  <HiPencil
                    color="rgba(17, 17, 17, 0.6)"
                    width="30"
                    heigh="30"
                  />
                )}
              </BtnInput>
            </Form1>
          </Formik>
        </FormAndPhotoWrapper>

        <BtnLogOut onClick={() => handleLogout()}>
          {<FiLogOut color="#F59256" />}
          <LogOutSpan>Log Out</LogOutSpan>
        </BtnLogOut>
      </Card>
    </div>
  );
};

export default UserCard;
