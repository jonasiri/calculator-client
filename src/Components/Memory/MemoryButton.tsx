import React from 'react';
interface MemoryButtonProps {
  value: string;
  equationSet: React.Dispatch<React.SetStateAction<string>>;
  equation: string;
}

const MemoryButton: React.FC<MemoryButtonProps> = ({
  value,
  equationSet,
  equation,
}) => {
  const handleClick = () => {
    equationSet(`${equation}${value}`);
  };
  return (
    <>
      <button className="memoryButton" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export default MemoryButton;
