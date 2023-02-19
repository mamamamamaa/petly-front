import {
  NoticesCategoriesList,
  NoticeCategoryItem,
  NoticesCategoriesNav,
} from './NoticesContainer.styled';
import noPoster from 'noPoster.jpg';
import { NoticeCategoryItemTemplate } from 'components/NoticeCategoryItemTemplate/NoticeCategoryItemTemplate';
import { useEffect, useRef, useState } from 'react';
import { usePaginate } from '../../hooks/usePaginate';
import { useNotices } from '../../redux/hooks';
import { useDispatch } from 'react-redux';

const LIMIT = 20;

export const NoticesContainer = ({ type }) => {
  const dispatch = useDispatch();
  const { totalCount, items, update, page } = usePaginate(type);
  const { isLoading } = useNotices();
  const [next, setNext] = useState(true);
  const [lastElement, setLastElement] = useState(null);
  const TOTAL_PAGES = Math.ceil(totalCount / LIMIT);

  const observer = useRef(
    new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        setNext(true);
      }
    })
  );

  useEffect(() => {
    setNext(true);
  }, [type]);

  useEffect(() => {
    if (page <= TOTAL_PAGES && !isLoading && next) {
      dispatch(update(page));
    }
    setNext(false);
  }, [next]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      <NoticesCategoriesNav>
        {items.length > 0 && (
          <NoticesCategoriesList>
            {items.map(
              (
                {
                  _id,
                  photoUrl = noPoster,
                  title,
                  type,
                  breed,
                  place,
                  dateOfBirth,
                  owner,
                  price,
                },
                idx
              ) =>
                idx === items.length - 1 && !isLoading ? (
                  <div ref={setLastElement} key={_id}>
                    <NoticeCategoryItem>
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
                          price,
                        }}
                      />
                    </NoticeCategoryItem>
                  </div>
                ) : (
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
                        price,
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
