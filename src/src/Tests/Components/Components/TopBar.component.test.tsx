import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../../../Components/Components/TopBar/TopBar.component';
import { store } from '../../../Redux/store';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

describe('Renders TopBar component and match to previously snapshot', () => {
  let wrapper: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore}>
          <TopBar />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('should render TopBar component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
