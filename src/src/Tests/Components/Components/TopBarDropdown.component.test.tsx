import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactComponent as whiteWallet } from '../../../Assets/Images/WalletIcon/whiteWallet.svg';
import TopBarDropdown from '../../../Components/Components/TopBarDropdown/TopBarDropdown.component';

describe('Dropdown component tests', () => {
  let wrapper: any;
  const mockStore = configureMockStore();
  const store = mockStore({});

  const mockProps = {
    options: ['option1', 'option2', 'option3'],
    iconPath: whiteWallet,
    tooltip: 'toolTipOption',
    activeState: 'activeState',
    actionType: 'CHANGE_ACTIVE_WALLET',
  };
  beforeEach(() => {
    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <TopBarDropdown {...mockProps} />
      </Provider>,
    );
  });

  it('Renders TopBarDropdown component and match to previously snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Check if TopBarDropdown has MenuItem.length equal as options.length ', () => {
    wrapper.find(TopBarDropdown);
    expect(wrapper.find(MenuItem).length).toBe(3);
  });
  it('Should call dispatch(action) when any option was clicked', () => {
    wrapper.find(TopBarDropdown);
    wrapper.find(MenuItem).at(0).simulate('click');
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
