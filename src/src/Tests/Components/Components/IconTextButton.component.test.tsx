import React from 'react';
import { shallow } from 'enzyme';
import IconTextButton from '../../../Components/Components/IconTextButton/IconTextButton.component';
import { ReactComponent as whiteWallet } from '../../../Assets/Images/WalletIcon/whiteWallet.svg';

test('Renders IconTextButton component and match to previously snapshot', () => {
  const mockProps = {
    label: 'Resumo',
    svgIconPath: whiteWallet,
    path: '/resumo',
  };

  const component = shallow(
    <IconTextButton
      label={mockProps.label}
      iconPath={mockProps.svgIconPath}
      path={mockProps.path}
    />,
  );
  expect(component).toMatchSnapshot();
});
