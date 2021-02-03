import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../src/Redux/store';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/Theme/theme';

addDecorator(story =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </ThemeProvider>
  </Provider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
