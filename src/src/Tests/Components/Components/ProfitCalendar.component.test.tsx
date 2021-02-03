import React from 'react';
import { shallow } from 'enzyme';
import ProfitCalendar from '../../../Components/Components/ProfitCalendar/ProfitCalendar.component';
import { mockCalendarData } from '../../../Mocks/ProfitCalendar.mock';

test('Renders ProfitCalendar component and match to previously snapshot', () => {
  const component = shallow(<ProfitCalendar monthArray={mockCalendarData} />);
  expect(component).toMatchSnapshot();
});
