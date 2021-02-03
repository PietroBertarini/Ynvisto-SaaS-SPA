import React from 'react';
import Spinner from './spinner.component';

// eslint-disable-next-line react/prop-types
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (isLoading
  ? <Spinner /> : <WrappedComponent {...otherProps} />);

export default WithSpinner;
