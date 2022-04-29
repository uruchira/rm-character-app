import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './Header';

afterEach(cleanup);

describe('Testing Header  Component', () => {
  test('should have a logo text called Rick', () => {
    const { getByTestId } = render(<Header />, { wrapper: BrowserRouter });
    expect(getByTestId('appNameOne')).toHaveTextContent('Rick');
  });

  test('should have a logo text called Morty', () => {
    const { getByTestId } = render(<Header />, { wrapper: BrowserRouter });
    expect(getByTestId('appNameTwo')).toHaveTextContent('Morty');
  });
});
