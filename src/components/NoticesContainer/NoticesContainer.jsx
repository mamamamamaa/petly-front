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
                photoUrl = noPoster,
                title,
                type,
                breed,
                place,
                dateOfBirth,
                owner,
              }) => (
                <NoticeCategoryItem key={_id}>
                  <NoticeCategoryItemTemplate
                    {...{
                      _id,
                      photoUrl,
                      title,
                      breed,
                      type,
                      place,
                      dateOfBirth,
                      owner,
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
