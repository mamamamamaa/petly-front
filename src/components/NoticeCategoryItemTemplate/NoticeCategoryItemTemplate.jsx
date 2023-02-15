import {
  PhotoPet,
  Title,
  PetSpanWrapper,
  PetSpan,
  PetDetails,
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
  AddPetToNotTextMob,
  AddPetToNotImgMob,
  AddPetToNotBtnMob,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';
import strokeHeart from 'utils/svg/strokeHeart.svg';
import cross from 'utils/svg/cross.svg';
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

export const NoticeCategoryItemTemplate = ({
  _id,
  photoUrl,
  title,
  breed,
  type,
  place,
  dateOfBirth,
  owner,
}) => {
  // состояние модального окна
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const { currentNotice } = useNotices();

  const { user, isLoggedIn } = useAuth();

  const isFavorite = user.favorite.includes(_id);
  const isOwn = owner === user.id;

  const [fav, setFav] = useState(isFavorite);

  // открытие и закрытие модального окна =======
  const modalHandler = () => setModal(prevState => !prevState);
  useEffect(() => {
    if (!modal) {
      return;
    }
    dispatch(getNoticeById(_id));
  }, [_id, dispatch, modal]);
  // ===========================================

  const favoriteHandler = () => {
    if (!isLoggedIn) {
      return toast.error('You should log in/sign up your account!');
    }

    if (fav) {
      dispatch(deleteNoticeFromFav(_id));
      dispatch(delFav(_id));
    } else {
      dispatch(addNoticeToFav(_id));
      dispatch(addFav(_id));
    }
    setFav(prevState => !prevState);
  };

  return (
    <>
      {modal && currentNotice && (
        <Modal onClose={modalHandler}>
          <ListModalCardNotice date={currentNotice} />
        </Modal>
      )}
      <PhotoPetWrapper>
        <PhotoPet src={photoUrl} alt="Pet" />
        <AdvWrapper>
          <AdvTitle>{type}</AdvTitle>
        </AdvWrapper>
        <AddToFavBtn to="" onClick={favoriteHandler}>
          {fav ? (
            <AddToFavImg src={strokeHeart} alt="Remove from favorites" />
          ) : (
            <AddToFavImg src={heart} alt="Add to favorites" />
          )}
        </AddToFavBtn>
        {/* <AddPetToNotBtnMob to="">
          <AddPetToNotImgMob src={cross} alt="Add pet to notices" />
          <AddPetToNotTextMob>Add pet</AddPetToNotTextMob>
        </AddPetToNotBtnMob> */}
      </PhotoPetWrapper>
      <PetDetails>
        <Title>{title}</Title>
        <PetSpanWrapper>
          <PetSpan>Breed:</PetSpan>
          <PetSpan>{breed}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Place:</PetSpan>
          <PetSpan>{place}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Age:</PetSpan>
          <PetSpan>
            <CardNewDate date={dateOfBirth} />
          </PetSpan>
        </PetSpanWrapper>
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
      </PetDetails>
    </>
  );
};
