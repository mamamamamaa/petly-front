import { useState, useEffect } from 'react';
// import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// =======
import { useNews } from '../redux/hooks';
import { getNews } from '../redux/news/operations';
import SearchBar from '../utils/searchBar/searchBar';
import ListNews from '../components/ListNews/ListNews';
import { Container, MainHeader, NothingFound } from './NewsPage.styled';
// =======

export default function NewsPage() {
  const [query, setQuery] = useState('pets');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [setSearchParams] = useSearchParams();
  const [pageNews, setPageNews] = useState(1);
  const [lastPageNews, setLastPageNews] = useState();

  const dispatch = useDispatch();
  const getDataNews = useNews();
  const currentNews = getDataNews.currentNews.articles;

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  // ========= take VALUE =============
  const handlerFormSubmit = values => {
    if (values.query.trim() === '') {
      setQuery('pets');
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: 'pets' });
    }
    if (query !== values.query.trim()) {
      setQuery(values.query.trim());
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: values.query });
    }
  };

  // ========= PAGINATION =============
  const totalPage = getDataNews.currentNews.totalResults;

  useEffect(() => {
    if (currentNews) {
      const totalCountPage = Math.ceil(totalPage / currentNews.length);
      setLastPageNews(totalCountPage);
    }
  }, [currentNews, totalPage]);

  useEffect(() => {
    const newsData = { query, pageNews };
    dispatch(getNews(newsData));
  }, [dispatch, query, pageNews]);

  function onePege() {
    if (pageNews > 1) {
      setPageNews(1);
    }
  }
  function prevPage() {
    if (pageNews > 1) {
      const newPage = pageNews - 1;
      setPageNews(newPage);
    }
  }
  function nextPage() {
    const lastPage = totalPage + 1;
    if (pageNews < lastPage) {
      const newPage = pageNews + 1;
      setPageNews(newPage);
    }
  }

  return (
    <Container>
      <MainHeader>News</MainHeader>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <h2>... is loading</h2>}
      <div>
        {pageNews !== 1 && (
          <>
            <button onClick={onePege}>1 Page</button>
            <button onClick={prevPage}>Prev</button>
          </>
        )}
        <span>{pageNews}</span>
        {pageNews !== lastPageNews && <button onClick={nextPage}>Next</button>}
      </div>
      {currentNews && currentNews.length > 0 && <ListNews news={currentNews} />}
      {(!currentNews || currentNews.length === 0) && (
        <NothingFound>Nothing found for this query</NothingFound>
      )}
      <Toaster />
    </Container>
  );
}

// ====================
// ====================
// ========= PAGINATION =============
// window.onload = function () {
//   setPageNews(1);
//   const currPage = 1;
//   console.log(`window ${pageNews}`);
//   changeBtn(currPage);
// };
// ==================================
// function changeBtn(currPage) {
//   let btn_zero = document.getElementById('btn_zero');
//   let btn_prev = document.getElementById('btn_prev');
//   let btn_next = document.getElementById('btn_next');

//   if (currPage === 1) {
//     btn_zero.style.visibility = 'hidden';
//     btn_prev.style.visibility = 'hidden';
//   } else {
//     btn_zero.style.visibility = 'visible';
//     btn_prev.style.visibility = 'visible';
//   }

//   const lastPage = currPage + 1;
//   if (lastPage === totalPage) {
//     btn_next.style.visibility = 'hidden';
//   } else {
//     btn_next.style.visibility = 'visible';
//   }
//   console.log('changeBtn run');
// }
// ==================================
