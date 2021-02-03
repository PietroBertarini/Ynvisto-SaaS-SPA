import React from 'react';
import { shallow } from 'enzyme';
import History from '../../../Components/Components/History/History.component';
import { ParsedOperationsHistoryNovember } from '../../../Mocks/MonthlyTaxReport.mock';

test('Renders History component and match to previous snapshot', () => {
  const component = shallow(<History data={ParsedOperationsHistoryNovember} />);
  expect(component).toMatchSnapshot();
});
