import React from 'react';
import { shallow } from 'enzyme';
import { mockCalendarData } from '../../../Mocks/ProfitCalendar.mock';
import ProfitActualMonth from '../../../Components/Components/ProfitActualMonth/ProfitActualMonth.component';

test('Renders ProfitActualMonth component and match to previously snapshot', () => {
  const component = shallow(<ProfitActualMonth month={mockCalendarData[5]} />);
  expect(component).toMatchSnapshot();
});
