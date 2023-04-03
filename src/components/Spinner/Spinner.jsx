import ClipLoader from 'react-spinners/ClipLoader';

import { Loader } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Loader>
      <ClipLoader size={80} color="#F59256" />
    </Loader>
  );
};
