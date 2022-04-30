import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Characters from './Characters';

test('Characters page rendering/navigating', () => {
  render(<Characters />, { wrapper: MemoryRouter });

  expect(screen.getByTestId('character-list')).toBeInTheDocument();
});
