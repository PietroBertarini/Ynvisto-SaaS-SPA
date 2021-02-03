import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LeftMenu from '../../../Components/Components/LeftMenu/LeftMenu.component';
import { fetchStocksSuccess } from '../../../Redux/Services/MyStocks/MyStocks.actions';
import { mockStock, mockStockTwo } from '../../Redux/Components/Pages/MyStocks/MyStocks.mock';
import { store } from '../../../Redux/store';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

test('Renders LeftMenu component and match to previously snapshot', () => {
  const mockStore = createMockStore();

  mockStore.dispatch(fetchStocksSuccess([mockStock, mockStockTwo]));
  mockStore.dispatch = jest.fn();
  const component = mount(
    <BrowserRouter>
      <Provider store={mockStore}>
        <LeftMenu />
      </Provider>
    </BrowserRouter>,
  );
  expect(component).toMatchSnapshot();
});
