import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CurrentPosition from '../../../Components/Pages/CurrentPosition/CurrentPosition.component';
import { store } from '../../../Redux/store';
import { fetchTaxReportsSuccess } from '../../../Redux/Services/TaxReports/TaxReports.actions';
import {
  mockCurrentPositionsLong, mockChartDataMoreLongOp, mockChartDataMoreShortOp, mockCurrentPositionsShort,
} from '../../../Mocks/CurrentPosition.mock';
import { extractDataToChart, getTotalPrice } from '../../../Components/Pages/CurrentPosition/CurrentPosition.utils';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

describe('CurrentPosition tests', () => {
  let wrapper: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    mockStore.dispatch(fetchTaxReportsSuccess(mockCurrentPositionsLong));
    mockStore.dispatch = jest.fn();
    wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore}>
          <CurrentPosition />
        </Provider>
      </BrowserRouter>,
    );
  });
  it('Renders CurrentPosition page and match to previously snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Returns CurrentPosition Chart Data when there are more long operations than short operations', () => {
    const chartData = extractDataToChart(mockCurrentPositionsLong.currentPositions);
    expect(chartData).toEqual(mockChartDataMoreLongOp);
  });

  it('Returns CurrentPosition Chart Data when there are more short operations than long operations', () => {
    const chartData = extractDataToChart(mockCurrentPositionsShort.currentPositions);
    expect(chartData).toEqual(mockChartDataMoreShortOp);
  });

  it('Tests getTotalPrice of current positions', () => {
    const chartData = getTotalPrice(mockCurrentPositionsShort.currentPositions);
    expect(chartData).toBe(-4267.52);
  });
});
