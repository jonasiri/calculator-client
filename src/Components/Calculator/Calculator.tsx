import React, { useState } from 'react';
import Display from '../Display/Display';
import './Calculator.css';
import ButtonArea from '../Button/ButtonArea';
import Memory from '../Memory/Memory';

const Calculator: React.FC = () => {
  const [equation, equationSet] = useState('');
  const [results, resultsSet] = useState<string[]>([]);

  return (
    <>
      <div className="calculatorContainer" data-testid="calculatorContainer">
        <Display equation={equation} results={results} />
        <ButtonArea
          equationSet={equationSet}
          equation={equation}
          results={results}
          resultsSet={resultsSet}
        />
      </div>
      <Memory results={results} equationSet={equationSet} equation={equation} />
    </>
  );
};

export default Calculator;
