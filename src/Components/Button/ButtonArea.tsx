import React from 'react';
import CalculatorButton from './CalculatorButton';
import buttonsArray from './buttonsArray';
import './Button.css';
import { ButtonData } from '../../Model/ButtonData';
import { calculateEquation } from '../../Services/calculator';
import { toast } from 'react-toastify';

interface ButtonAreaProps {
  equation: string;
  equationSet: React.Dispatch<React.SetStateAction<string>>;
  results: string[];
  resultsSet: React.Dispatch<React.SetStateAction<string[]>>;
}

const ButtonArea: React.FC<ButtonAreaProps> = ({
  equation,
  equationSet,
  results,
  resultsSet,
}) => {
  const handleSubmit = async () => {
    const response = await calculateEquation(equation);
    if (response?.status === 200) {
      resultsSet([...results, response?.data]);
    } else {
      toast.error(
        response?.data.length > 1 ? response.data : 'Error with equation',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );
    }
  };

  const buttonTypeSwitch = (button: ButtonData) => {
    switch (button?.type) {
      case 'value':
      case 'function':
        return function (value: string) {
          equationSet(`${equation}${value}`);
        };
      case 'delete':
        return function (value: string) {
          equationSet(equation.substring(0, equation.length - 1));
        };
      case 'clear':
        return function (value: string) {
          equationSet(value);
        };
      case 'clearAll':
        return function (value: string) {
          resultsSet([]);
          equationSet('');
        };
      case 'equal':
        return function (value: string) {
          handleSubmit();
        };
      case 'answer':
        return function () {
          if (results.length > 0)
            equationSet(`${equation}${results[results.length - 1]}`);
        };
      default:
        return function (value: string) {
          console.log('error');
        };
    }
  };

  return (
    <div className="buttonArea">
      {buttonsArray.map((button) => {
        return (
          <CalculatorButton
            key={button.value}
            handleButtonClick={buttonTypeSwitch(button)}
            buttonData={button}
          />
        );
      })}
    </div>
  );
};

export default ButtonArea;
