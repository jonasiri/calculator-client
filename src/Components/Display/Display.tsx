import React from 'react';
import './Display.css';

interface DisplayProps {
  equation: string;
  results: string[];
}
const Display: React.FC<DisplayProps> = ({ equation, results }) => {
  return (
    <div className="display">
      <div className="equationDisplay" data-testid="equationDisplay">
        {equation}
      </div>
      <div className="resultDisplay" data-testid="resultDisplay">
        {results[results.length - 1]}
      </div>
    </div>
  );
};

export default Display;
