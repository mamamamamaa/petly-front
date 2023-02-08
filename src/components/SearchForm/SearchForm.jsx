import { SearchTitle, SearchField } from './SearchForm.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const SearchForm = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [option, setOption] = useState('all');
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const { data } = await instance.get(
        `/api/notices/searchManyTitles?title=${firstName}`
      );
      console.log(data);
      return data;
    };
    const getStrict = async () => {
      const { data } = await instance.get(
        `/api/notices/searchOneTitle?title=${firstName}`
      );
      console.log(data);
      return data;
    };
    const getTrendingHttp = async () => {
      if (option === 'one') {
        try {
          const response = await getStrict().then(responseHttp => {
            return responseHttp;
          });
          setPets([...response]);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await getAll().then(responseHttp => {
            return responseHttp;
          });
          setPets([...response]);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getTrendingHttp();
  }, [firstName, option]);

  return (
    <>
      <SearchTitle>
        {children}
        <SearchField
          placeholder="Search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        Use strict search:
        <input
          type="radio"
          name="myRadio"
          value="one"
          onChange={e => {
            console.log(e.target.value);
            return setOption(e.target.value);
          }}
        />
        Show all notices
        <input
          defaultChecked={true}
          type="radio"
          name="myRadio"
          value="all"
          onChange={e => setOption(e.target.value)}
        />
      </SearchTitle>
      {pets.length > 0 ? (
        <ul>
          {pets.map(({ _id, title }) => (
            <li key={_id}>{title}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
export default SearchForm;
