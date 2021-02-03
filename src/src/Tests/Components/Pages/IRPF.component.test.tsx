import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import IRPF from '../../../Components/Pages/IRPF/IRPF.component';
import { store } from '../../../Redux/store';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});

describe('IRPF component tests', () => {
  let wrapper: any;
  const mockStore = createMockStore();

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore}>
          <IRPF />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Renders IRPF page and match to previously snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
