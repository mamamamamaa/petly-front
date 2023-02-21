import {
  PhotoPet,
  Title,
  BoxPetDetails,
  WraperPetDetails,
  Ul,
  Li,
  PetDetailsButton,
  PetDetailsButtonText,
  PhotoPetWrapper,
  AddToFavImg,
  AddToFavBtn,
  AdvWrapper,
  AdvTitle,
  PetDeleteButton,
  PetDeleteButtonDiv,
  PetDeleteButtonImg,
  PetDeleteButtonText,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';
import strokeHeart from 'utils/svg/strokeHeart.svg';
import recycleBin from 'utils/svg/recycleBin.svg';
import { useAuth, useNotices } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import {
  addNoticeToFav,
  deleteNotice,
  deleteNoticeFromFav,
  getNoticeById,
} from '../../redux/notices/operations';
import { useState, useEffect } from 'react';
import CardNewDate from '../../utils/CardNewDate/cardNewDate';
import { Modal } from '../Modal/Modal';
import { ListModalCardNotice } from '../ListModalCardNotice/ListModalCardNotice.jsx';
import toast from 'react-hot-toast';
import { addFav, delFav } from '../../redux/auth/authSlice';
import noPoster from 'noPoster.jpg';
import { clearCurrentNotice } from '../../redux/notices/noticeSlice';

export const NoticeCategoryItemTemplate = ({
  _id,
  photoUrl = noPoster,
  title,
  breed = 'unknown',
  type = 'unknown',
  place = 'unknown',
  dateOfBirth = 'unknown',
  owner = 'unknown',
  price,
}) => {
  // состояние модального окна
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const { currentNotice } = useNotices();

  const { user, isLoggedIn } = useAuth();

  const isFavorite = user.favorite.includes(_id);

  const isOwn =
    typeof owner === 'object' && '_id' in owner ? true : owner === user.id;

  const [fav, setFav] = useState(isFavorite);

  // открытие и закрытие модального окна =======
  const modalHandler = () => setModal(prevState => !prevState);
  useEffect(() => {
    if (!modal) {
      dispatch(clearCurrentNotice());
      return;
    }
    dispatch(getNoticeById(_id));
  }, [modal]);
  // ===========================================

  const favoriteHandler = () => {
    if (!isLoggedIn) {
      return toast.error('You should log in/sign up your account!');
    }

    if (fav) {
      dispatch(deleteNoticeFromFav(_id));
      dispatch(delFav(_id));
      toast.success('Removed from favorite!');
    } else {
      dispatch(addNoticeToFav({ id: _id, type }));
      dispatch(addFav(_id));
      toast.success('Successfully added to favorite!');
    }
    setFav(prevState => !prevState);
  };

  const changeTitle = type => {
    if (type === 'good-hands') {
      const newType = 'in good hands';
      return newType;
    } else {
      const newType = type;
      return newType;
    }
  };
  const getNewType = changeTitle(type);

  return (
    <>
      {modal && currentNotice && (
        <Modal onClose={modalHandler}>
          <ListModalCardNotice
            date={currentNotice}
            setFav={setFav}
            fav={fav}
            isFavorite={isFavorite}
          />
        </Modal>
      )}
      <PhotoPetWrapper>
        <PhotoPet src={photoUrl} alt="Pet" />
        <AdvWrapper>
          <AdvTitle>{getNewType}</AdvTitle>
        </AdvWrapper>
        <AddToFavBtn to="" onClick={favoriteHandler}>
          {fav ? (
            <AddToFavImg src={strokeHeart} alt="Remove from favorites" />
          ) : (
            <AddToFavImg src={heart} alt="Add to favorites" />
          )}
        </AddToFavBtn>
      </PhotoPetWrapper>
      <BoxPetDetails>
        <Title>{title}</Title>
        <WraperPetDetails>
          <Ul>
            <Li>Breed:</Li>
            <Li>Place:</Li>
            <Li>Age:</Li>
            {price !== undefined && type === 'sell' && <Li>Price:</Li>}
          </Ul>
          <Ul>
            <Li>{breed}</Li>
            <Li>{place}</Li>
            <Li>
              <CardNewDate date={dateOfBirth} />
            </Li>
            {price !== undefined && type === 'sell' && <Li>{price}$</Li>}
          </Ul>
        </WraperPetDetails>
        <PetDetailsButton onClick={modalHandler}>
          <PetDetailsButtonText>Learn More</PetDetailsButtonText>
        </PetDetailsButton>
        {isOwn && (
          <PetDeleteButton
            onClick={() => {
              dispatch(deleteNotice({ id: _id, type }));
            }}
          >
            <PetDeleteButtonDiv>
              <PetDeleteButtonText>Delete</PetDeleteButtonText>
              <PetDeleteButtonImg
                src={recycleBin}
                alt="Recycle bin"
              ></PetDeleteButtonImg>
            </PetDeleteButtonDiv>
          </PetDeleteButton>
        )}
      </BoxPetDetails>
    </>
  );
};
