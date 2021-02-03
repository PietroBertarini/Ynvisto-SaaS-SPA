import React from 'react';
import { shallow } from 'enzyme';
import { allTabs } from '../../../Components/Pages/TaxReport/TaxReport.utils';
import ScrollTabs from '../../../Components/Components/ScrollTabs/ScrollTabs.component';

test('Renders ScrollTabs component and match to previously snapshot', () => {
  const component = shallow(<ScrollTabs initialTabValue={0} tabsLabel={allTabs} />);
  expect(component).toMatchSnapshot();
});
