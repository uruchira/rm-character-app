import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Character from './Character';

test('Character page rendering/navigating', () => {
  render(<Character />, { wrapper: MemoryRouter });

  expect(screen.getByTestId('character-details')).toBeInTheDocument();
});
