import React from 'react';
import { shallow } from 'enzyme';
import MonthlyCardReport, { ETitleStatus }
  from '../../../Components/Components/MonthlyCardReport/MonthlyCardReport.component';
import { getProfitData2Vale } from '../../../Mocks/MonthlyCardReport.mock';

test('Renders MonthlyCardReport component and match to previously snapshot', () => {
  const component = shallow(<MonthlyCardReport
    status={ETitleStatus.GOOD}
    title="Volume isento em operações comuns"
    headerMonetaryValue={10.000}
    data={getProfitData2Vale}
  />);
  expect(component).toMatchSnapshot();
});
