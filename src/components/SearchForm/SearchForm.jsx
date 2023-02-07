import { SearchTitle, SearchField } from './SearchForm.styled';

const SearchForm = ({ children }) => (
  <SearchTitle>
    {children}
    <SearchField placeholder="Search" />
  </SearchTitle>
);

export default SearchForm;
