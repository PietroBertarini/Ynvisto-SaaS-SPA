import React from 'react';
import { shallow } from 'enzyme';
import YnvistoButton from '../../../Components/Components/YnvistoButton/YnvistoButton.component';

test('Renders YnvistoButton without status prop component and match to previously snapshot', () => {
  // Empty function, according by ESlint documentation, to avoid empty arrow functions
  function emptyFunc() {
    // do nothing
  }

  const component = shallow(
    <YnvistoButton title="" isLoading={false} onClick={emptyFunc} />,
  );
  expect(component).toMatchSnapshot();
});

test('Renders YnvistoButton with status prop component and match to previously snapshot', () => {
  // Empty function, according by ESlint documentation, to avoid empty arrow functions
  function emptyFunc() {
    // do nothing
  }

  const component = shallow(
    <YnvistoButton title="" status="DANGER" isLoading={false} onClick={emptyFunc} />,
  );
  expect(component).toMatchSnapshot();
});
