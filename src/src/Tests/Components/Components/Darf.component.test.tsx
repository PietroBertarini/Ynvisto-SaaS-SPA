import React from 'react';
import { shallow } from 'enzyme';
import Darf from '../../../Components/Components/Darf/Darf.component';

test('DARF Renders as expected', () => {
  global.window = Object.create(window);

  Object.defineProperty(window, 'location', {
    value: {
      search: '?calcPeriod=31/10/2020&darfValue=340.1&expireDate=30/11/2020&name=Administrador&cpf=61015504191',
    },
  });

  const darfComponent = shallow(<Darf />);
  expect(darfComponent).toMatchSnapshot();
});
