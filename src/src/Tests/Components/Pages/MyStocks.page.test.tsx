import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MyStocks from '../../../Components/Pages/MyStocks/MyStocks.component';
import { store } from '../../../Redux/store';
import StockGradientCard from '../../../Components/Components/StockGradientCard/StockGradientCard.component';
import { fetchStocksSuccess } from '../../../Redux/Services/MyStocks/MyStocks.actions';
import { mockStock, mockStockTwo } from '../../Redux/Components/Pages/MyStocks/MyStocks.mock';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

describe('MyStocks component tests', () => {
  let wrapper: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    mockStore.dispatch(fetchStocksSuccess([mockStock, mockStockTwo]));
    mockStore.dispatch = jest.fn();
    wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore}>
          <MyStocks />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Renders MyStocks page and match to previously snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should check dispatch was called after Mount (check if fetchStocks was called)', () => {
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
  it('Check if MyStocks has StockGradientCard.lenght equal as state.mystocks.stocks.lenght ', () => {
    wrapper.find(MyStocks);
    expect(wrapper.find(StockGradientCard).length).toBe(2);
  });
});
