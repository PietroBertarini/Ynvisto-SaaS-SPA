import React from 'react';
import { shallow } from 'enzyme';
import BuildingYnvisto from '../../../Components/Pages/BuildingYnvisto/BuildingYnvisto.component';

test('Renders BuildingYnvisto component and match to previous snapshot', () => {
  const component = shallow(<BuildingYnvisto />);
  expect(component).toMatchSnapshot();
});
