import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
// =======
import SearchBar from '../SearchBarNews/SearchBarNews';
// =======

export async function fetchSearchNews(query) {
  const { data } = await axios.get(
    `http://localhost:3001/api/news?query=${query}`
  );
  return data;
}

export default function NewsPage() {
  const [searchNews, setSearchNews] = useState([]);
  const [query, setQuery] = useState('animals');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchNews(query) {
      try {
        setIsLoading(true);

        const response = await fetchSearchNews(query);
        const news = response.data.result.value;
        const total = response.data.result.totalCount;

        if (total === 0) {
          toast.error(
            'Sorry, there are no news matching your query. Please try again.'
          );
          return;
        }

        setSearchNews(news);
      } catch {
        setError('Can`t load news!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews(query);
  }, [query]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  const handlerFormSubmit = values => {
    if (query !== values.query.trim()) {
      setSearchNews([]);
      setQuery(values.query.trim());
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: values.query });
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <h2>... Загрузка</h2>}
      <ListNews news={searchNews} />
      <Toaster />
    </div>
  );
}

// ================= разметка

function ListNews({ news }) {
  return (
    <ul>
      {news.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
