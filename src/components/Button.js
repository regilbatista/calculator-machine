import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button 
      className="button" 
      id={value} 
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
