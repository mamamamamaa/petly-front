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

  const dispatch = useDispatch();
  const { currentNews } = useNews();
  // console.log(currentNews);
  // const { value } = currentNews;

  useEffect(() => {
    dispatch(getNews(query));
  }, [dispatch, query]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

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

  return (
    <Container>
      <MainHeader>News</MainHeader>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <h2>... is loading</h2>}
      {currentNews && currentNews.length > 0 && <ListNews news={currentNews} />}
      {(!currentNews || currentNews.length === 0) && (
        <NothingFound>Nothing found for this query</NothingFound>
      )}
      <Toaster />
    </Container>
  );
}
// ======== second way for news ========= up

// currentNews && articles && <ListNews news={articles} />

// ======= old ========
// ================= запрос
// export async function fetchSearchNews(query) {
//   if (query === '') {
//     query = 'dog';
//   }
//   const { data } = await axios.get(
//     http://localhost:3001/api/news?query=${query}
//   );
//   return data;
// }
// =================
// console.log(searchParams);
// useEffect(() => {
//   async function fetchNews(query) {
//     try {
//         setIsLoading(true);
//         // const response = await selectNews(query);
//         const response = await fetchSearchNews(query);
//         const news = response.data.result.value;
//         const total = response.data.result.totalCount;
//         if (total === 0) {
//           toast.error(
//             'Sorry, there are no news matching your query. Please try again.'
//           );
//           return;
//         }
//       setSearchNews(query);
//     } catch {
//       setError('Can`t load news!');
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   fetchNews(query);
// }, [query]);
