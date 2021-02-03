import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StockGradientCard from '../../../Components/Components/StockGradientCard/StockGradientCard.component';
import { store } from '../../../Redux/store';
import { mockStock } from '../../Redux/Components/Pages/MyStocks/MyStocks.mock';
import { changeActivePeriod } from '../../../Redux/Components/TopBar/TopBar.actions';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

describe('MyStocks component tests', () => {
  const mockStore = createMockStore();
  let wrapper: any;
  beforeEach(() => {
    // The default activePeriod is Daily
    wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore}>
          <StockGradientCard
            key={mockStock.ticker}
            stock={mockStock}
            period={store.getState().topBar.activePeriod}
          />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Renders Daily StockGradientCard component and match to previously snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders Weekly StockGradientCard component and match to previously snapshot', () => {
    mockStore.dispatch(changeActivePeriod('Semana'));
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders Monthly StockGradientCard component and match to previously snapshot', () => {
    mockStore.dispatch(changeActivePeriod('Mês'));
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders Yearly StockGradientCard component and match to previously snapshot', () => {
    mockStore.dispatch(changeActivePeriod('Ano'));
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders Yearly StockGradientCard component and match to previously snapshot', () => {
    mockStore.dispatch(changeActivePeriod('Error'));
    expect(wrapper).toMatchSnapshot();
  });
});
