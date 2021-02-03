import React from 'react';
import { shallow } from 'enzyme';
import ProfitCalendarLegend from '../../../Components/Components/ProfitCalendarLegend/ProfitCalendarLegend.component';
import { mockCalendarLegend } from '../../../Mocks/ProfitCalendarLegend.mock';

test('Renders ProfitCalendarLegend component and match to previously snapshot', () => {
  const component = shallow(<ProfitCalendarLegend legendData={mockCalendarLegend} />);
  expect(component).toMatchSnapshot();
});
