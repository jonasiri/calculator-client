import React from 'react';
import './Memory.css';
import MemoryButton from './MemoryButton';
interface MemoryProps {
  results: string[];
  equationSet: React.Dispatch<React.SetStateAction<string>>;
  equation: string;
}

const Memory: React.FC<MemoryProps> = ({ results, equationSet, equation }) => {
  return (
    <div className="memoryContainer" data-testid="memoryContainer">
      <h4>Memory</h4>
      {results
        .slice(0)
        .reverse()
        .map((result, key) => {
          return (
            <MemoryButton
              value={result}
              key={key}
              equationSet={equationSet}
              equation={equation}
            />
          );
        })}
    </div>
  );
};

export default Memory;
