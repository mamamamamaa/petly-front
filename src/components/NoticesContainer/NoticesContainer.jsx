import {
  NoticesCategoriesList,
  NoticeCategoryItem,
  NoticesCategoriesNav,
} from './NoticesContainer.styled';
import noPoster from 'noPoster.jpg';
import { NoticeCategoryItemTemplate } from 'components/NoticeCategoryItemTemplate/NoticeCategoryItemTemplate';

export const NoticesContainer = ({ pets = [] }) => {
  // console.log(pets);
  return (
    <>
      <NoticesCategoriesNav>
        {pets.length > 0 && (
          <NoticesCategoriesList>
            {pets.map(
              ({
                _id,
                name = 'unknown',
                photoUrl = noPoster,
                title,
                breed = 'unknown',
                type = 'unknown',
                place = 'unknown',
                dateOfBirth = 'unknown',
                owner = 'unknown',
                sex = 'unknown',
                email = 'unknown',
                phone = 'unknown',
                price,
                comments = 'unknown',
              }) => (
                <NoticeCategoryItem key={_id}>
                  <NoticeCategoryItemTemplate
                    {...{
                      _id,
                      name,
                      photoUrl,
                      title,
                      breed,
                      type,
                      place,
                      dateOfBirth,
                      owner,
                      sex,
                      email,
                      phone,
                      price,
                      comments,
                    }}
                  />
                </NoticeCategoryItem>
              )
            )}
          </NoticesCategoriesList>
        )}
      </NoticesCategoriesNav>
    </>
  );
};
export default NoticesContainer;
