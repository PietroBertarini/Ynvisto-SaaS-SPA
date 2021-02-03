import React from 'react';
import { shallow } from 'enzyme';
import { getProfitData2Vale } from '../../../Mocks/MonthlyCardReport.mock';
import MonthlyCardReportLegend from
  '../../../Components/Components/MonthlyCardReportLegend/MonthlyCardReportLegend.component';

test('Renders MonthlyCardReportLegend  component and match to previously snapshot', () => {
  const component = shallow(<MonthlyCardReportLegend legendData={getProfitData2Vale} />);
  expect(component).toMatchSnapshot();
});
