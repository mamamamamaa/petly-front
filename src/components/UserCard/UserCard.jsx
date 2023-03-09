import * as Yup from 'yup';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  Title,
  Wrapper,
  Card,
  DivInput,
  BtnInput,
  BtnLogOut,
  FormLabel,
  LogOutSpan,
  FormAndPhotoWrapper,
  MyInput,
  BirthdayContainer,
  DateInput,
  CalendarIcon,
} from './UserCard.styled';
import { HiPencil } from 'react-icons/hi';
import { FiLogOut, FiCheck } from 'react-icons/fi';
import { logout } from '../../redux/auth/operations';
import { FileUploader } from '../UseAvatar/UserAvatar';
import { getUserData, updateUser } from '../../redux/user/operations';
import { useEffect, useState } from 'react';
import { useUser } from '../../redux/hooks';
import { Modal } from '../Modal/Modal';
import { LogoutModal } from '../LogoutModal/LogoutModal';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';


const phoneRegExp = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;
const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  birthday: Yup.string().required('Required'),
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

export const UserCard = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const {
    user: { user },
  } = useUser();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthday: '',
    mobilePhone: '',
    city: '',
  });

  const [current, setCurrent] = useState('');
  const [isModal, setModal] = useState(false);

  const handleModal = () => setModal(prevState => !prevState);

  const userStateHandler = (e, key) => {
    const data = e.target.value;
    setUserData(prevState => ({ ...prevState, [key]: data }));
  };

  const userStateBirthdayHandler = e => {
    const data = e.target.value;
    const birthdayToDispatch = moment(new Date(data)).format('DD.MM.YYYY');
    if (birthdayToDispatch === userData.birthday) {
      return;
    }
    setUserData(prevState => ({ ...prevState, birthday: birthdayToDispatch }));
  };

  const checkIsSame = () =>
    JSON.stringify({
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      mobilePhone: user.mobilePhone,
      city: user.city,
    }) === JSON.stringify(userData);

  const validate = async (dataForValidation, callback) => {
    let isValid;
    try {
      isValid = await userSchema.validate(dataForValidation);
      if (isValid) {
        callback(dataForValidation);
      }
    } catch {
      toast.error(formatMessage({ id: 'toastUserCardFieldsFil' }));
    }
  };

  const handleCurrent = type => {
    if (current === type) {
      setCurrent('');
      if (checkIsSame()) {
        return;
      }

      validate(userData, data => dispatch(updateUser(data)));
    } else {
      setCurrent(type);
    }
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    setUserData({
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      mobilePhone: user.mobilePhone,
      city: user.city,
    });
  }, [user]);

  return (
    <div>
      <Title><FormattedMessage id="myInfo"/></Title>
      <Toaster />
      <Card>
        <FormAndPhotoWrapper>
          <Wrapper>
            <FileUploader />
          </Wrapper>
          <div>
            <DivInput>
              <FormLabel>
                <FormattedMessage id="name"/>:
                <MyInput
                  name="name"
                  id="name"
                  type="text"
                  value={userData.name}
                  onChange={e => userStateHandler(e, 'name')}
                  disabled={current !== 'name'}
                />
                <BtnInput type="button" onClick={() => handleCurrent('name')}>
                  {current === 'name' ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </FormLabel>
            </DivInput>
            <DivInput>
              <FormLabel>
                <FormattedMessage id="email"/>:
                <MyInput
                  name="email"
                  id="email"
                  type="text"
                  value={userData.email}
                  disabled={current !== 'email'}
                  onChange={e => userStateHandler(e, 'email')}
                />
                <BtnInput type="button" onClick={() => handleCurrent('email')}>
                  {current === 'email' ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </FormLabel>
            </DivInput>
            <DivInput>
              <FormLabel>
                <FormattedMessage id="birthday"/>:
                <BirthdayContainer>
                  {userData.birthday || <FormattedMessage id="date"/>}
                  <DateInput
                    name="birthday"
                    id="birthday"
                    type="date"
                    value={userData.birthday}
                    placeholder={' '}
                    disabled={current !== 'birthday'}
                    onChange={userStateBirthdayHandler}
                  />
                  <CalendarIcon />
                </BirthdayContainer>
                <BtnInput
                  type="button"
                  onClick={() => handleCurrent('birthday')}
                >
                  {current === 'birthday' ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </FormLabel>
            </DivInput>
            <DivInput>
              <FormLabel>
                <FormattedMessage id="phone"/>:
                <MyInput
                  name="mobilePhone"
                  id="mobilePhone"
                  type="text"
                  value={userData.mobilePhone}
                  disabled={current !== 'mobilePhone'}
                  onChange={e => userStateHandler(e, 'mobilePhone')}
                />
                <BtnInput
                  type="button"
                  onClick={() => handleCurrent('mobilePhone')}
                >
                  {current === 'mobilePhone' ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </FormLabel>
            </DivInput>
            <DivInput>
              <FormLabel>
                <FormattedMessage id="cityLabel"/>:
                <MyInput
                  name="city"
                  id="city"
                  type="text"
                  value={userData.city}
                  disabled={current !== 'city'}
                  onChange={e => userStateHandler(e, 'city')}
                />
                <BtnInput type="button" onClick={() => handleCurrent('city')}>
                  {current === 'city' ? (
                    <FiCheck color="#F59256" width="30" heigh="30" />
                  ) : (
                    <HiPencil
                      color="rgba(17, 17, 17, 0.6)"
                      width="30"
                      heigh="30"
                    />
                  )}
                </BtnInput>
              </FormLabel>
            </DivInput>
          </div>
        </FormAndPhotoWrapper>

        <BtnLogOut onClick={handleModal}>
          {<FiLogOut color="#F59256" />}
          <LogOutSpan><FormattedMessage id="logOut"/></LogOutSpan>
        </BtnLogOut>

        {isModal && (
          <Modal onClose={handleModal}>
            <LogoutModal />
          </Modal>
        )}
      </Card>
    </div>
  );
};
