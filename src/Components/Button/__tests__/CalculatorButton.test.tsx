import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ButtonData } from '../../../Model/ButtonData';
import CalculatorButton from '../CalculatorButton';

const mockHandleButtonClick = jest.fn();
const setup = (button: ButtonData) => {
  render(
    <CalculatorButton
      buttonData={button}
      handleButtonClick={mockHandleButtonClick}
    />
  );
};

describe('<CalculatorButton />', () => {
  test.each`
    button                                                 | label
    ${{ value: '4', symbol: '4', type: 'value' }}          | ${'4'}
    ${{ value: '=', symbol: '=', type: 'equal' }}          | ${'='}
    ${{ value: 'BACK', symbol: '&#8592', type: 'delete' }} | ${'←'}
    ${{ value: 'ANS', symbol: 'Ans', type: 'answer' }}     | ${'Ans'}
  `('returns the correct button label for each button', ({ button, label }) => {
    setup(button);
    expect(screen.getByRole('button', { name: label })).toBeVisible();
  });

  test.each`
    button                                                 | label
    ${{ value: '4', symbol: '4', type: 'value' }}          | ${'4'}
    ${{ value: '=', symbol: '=', type: 'equal' }}          | ${'='}
    ${{ value: 'BACK', symbol: '&#8592', type: 'delete' }} | ${'←'}
    ${{ value: 'ANS', symbol: 'Ans', type: 'answer' }}     | ${'Ans'}
  `('returns the correct button label for each button', ({ button, label }) => {
    setup(button);
    const buttonElement = screen.getByRole('button', { name: label });
    fireEvent.click(buttonElement);
    expect(mockHandleButtonClick).toHaveBeenCalledWith(button.value);
  });
});
