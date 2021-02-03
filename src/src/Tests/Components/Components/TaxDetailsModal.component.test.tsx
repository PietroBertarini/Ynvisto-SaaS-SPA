import React from 'react';
import { shallow } from 'enzyme';
import TaxDetailsModal from '../../../Components/Components/TaxDetailsModal/TaxDetailsModal.component';
import {
  taxDetailsModalInfoAllData,
  taxDetailsModalInfoWithoutCommonOps,
  taxDetailsModalInfoWithoutData,
  taxDetailsModalInfoOnlyDayTrade,
} from '../../../Mocks/TaxDetailsModal.mock';

test('Renders TaxDetailsModal with full data components and match to previously snapshot', () => {
  const component = shallow(
    <TaxDetailsModal data={taxDetailsModalInfoAllData} />,
  );
  expect(component).toMatchSnapshot();
});

test('Renders TaxDetailsModal without one field components and match to previously snapshot', () => {
  const component = shallow(
    <TaxDetailsModal data={taxDetailsModalInfoWithoutCommonOps} />,
  );
  expect(component).toMatchSnapshot();
});

test('Renders TaxDetailsModal only with final results components and match to previously snapshot', () => {
  const component = shallow(
    <TaxDetailsModal data={taxDetailsModalInfoWithoutData} />,
  );
  expect(component).toMatchSnapshot();
});

test('Renders TaxDetailsModal with only one field components and match to previously snapshot', () => {
  const component = shallow(
    <TaxDetailsModal data={taxDetailsModalInfoOnlyDayTrade} />,
  );
  expect(component).toMatchSnapshot();
});
