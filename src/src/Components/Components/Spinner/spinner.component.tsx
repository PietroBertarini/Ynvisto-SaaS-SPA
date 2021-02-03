import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

/**
 * Basic Spinner component that is render when something is loading.
 */
const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
