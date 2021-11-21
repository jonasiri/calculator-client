import React from 'react';
import { ButtonData } from '../../Model/ButtonData';
import './Button.css';
import he from 'he';

interface ButtonProps {
  buttonData: ButtonData;
  handleButtonClick: (value: string) => void;
}
const CalculatorButton: React.FC<ButtonProps> = ({
  buttonData,
  handleButtonClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLTextAreaElement;
    handleButtonClick(target.value);
  };

  return (
    <button
      className={`button ${buttonData.type}`}
      onClick={handleClick}
      value={buttonData.value}
    >
      {he.decode(buttonData.symbol)}
    </button>
  );
};

export default CalculatorButton;
