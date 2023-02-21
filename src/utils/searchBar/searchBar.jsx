import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// ============= styled ===============
import { GoSearch, GoTrashcan } from 'react-icons/go';
import { Formik } from 'formik';
import {
  Search,
  FormEl,
  Input,
  SearchFormButton,
  InputBox,
} from './searchBar.styled';
// ====================================

export default function SearchBar({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const [isDelete, setDelete] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (values, actions) => {
    if (!isDelete && values.query) {
      setDelete(true);
      await onSubmit(values);
      actions.setSubmitting(false);
    } else {
      setDelete(false);
      actions.setValues({ query: '' });
      inputRef.current.focus();
    }
  };

  return (
    <Search as="main">
      <Formik
        initialValues={{ query: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormEl>
            <InputBox>
              <Input
                innerRef={inputRef}
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search"
              />

              <SearchFormButton type="submit" disabled={isSubmitting}>
                {!isDelete ? <GoSearch /> : <GoTrashcan />}
              </SearchFormButton>
            </InputBox>
          </FormEl>
        )}
      </Formik>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Search>
  );
}
// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
