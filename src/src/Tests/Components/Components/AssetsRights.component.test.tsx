import React from 'react';
import { shallow } from 'enzyme';
import AssetsRights from '../../../Components/Components/AssetsRights/AssetsRights.component';
import { mockStock } from '../../Redux/Components/Pages/IRPF/IRPF.mock';

test('Renders AssetsRights component and match to previous snapshot', () => {
  const component = shallow(<AssetsRights assetsRights={mockStock.assetsRights} />);
  expect(component).toMatchSnapshot();
});
