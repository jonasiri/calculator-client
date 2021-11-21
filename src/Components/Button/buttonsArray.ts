import { ButtonData } from '../../Model/ButtonData';

const valueConstants = {};
const buttonsArray: ButtonData[] = [
  { value: 'AC', symbol: 'AC', type: 'clearAll' },
  { value: '', symbol: 'C', type: 'clear' },
  { value: 'BACK', symbol: '&#8592', type: 'delete' },
  { value: '+', symbol: '+', type: 'function' },
  { value: '7', symbol: '7', type: 'value' },
  { value: '8', symbol: '8', type: 'value' },
  { value: '9', symbol: '9', type: 'value' },
  { value: '-', symbol: '-', type: 'function' },
  { value: '4', symbol: '4', type: 'value' },
  { value: '5', symbol: '5', type: 'value' },
  { value: '6', symbol: '6', type: 'value' },
  { value: '*', symbol: 'x', type: 'function' },
  { value: '1', symbol: '1', type: 'value' },
  { value: '2', symbol: '2', type: 'value' },
  { value: '3', symbol: '3', type: 'value' },
  { value: '/', symbol: '&#247;', type: 'function' },
  { value: '.', symbol: '.', type: 'value' },
  { value: '0', symbol: '0', type: 'value' },
  { value: '(', symbol: '(', type: 'value' },
  { value: '=', symbol: '=', type: 'equal' },
  { value: 'ANS', symbol: 'Ans', type: 'answer' },
  { value: ')', symbol: ')', type: 'value' },
];

export default buttonsArray;
