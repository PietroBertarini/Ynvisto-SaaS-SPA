import React from 'react';
import { shallow } from 'enzyme';
import ValuesBar from '../../../Components/Components/ValuesBar/ValuesBar.component';
import { getProfitDataNegativeAndPositive } from '../../../Mocks/MonthlyCardReport.mock';

test('Renders ValuesBar component and match to previously snapshot', () => {
  const component = shallow(<ValuesBar
    data={getProfitDataNegativeAndPositive}
  />);
  expect(component).toMatchSnapshot();
});
