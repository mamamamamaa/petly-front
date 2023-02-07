import { SearchTitle, SearchField } from './styles';

 const SearchForm = ({ children }) => (
  <>
    <SearchTitle>
    {children}
      <SearchField placeholder="Search" />
    </SearchTitle>
  </>
);

export default SearchForm;
