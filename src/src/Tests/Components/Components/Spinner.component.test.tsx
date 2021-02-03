import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../Components/Components/Spinner/spinner.component';

test('Renders Spinner component and match to previously snapshot', () => {
  const component = shallow(
    <Spinner />,
  );
  expect(component).toMatchSnapshot();
});
