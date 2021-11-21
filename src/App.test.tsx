import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator container', () => {
  render(<App />);
  const calculatorContainer = screen.getByTestId(/calculatorContainer/i);
  expect(calculatorContainer).toBeInTheDocument();
});
