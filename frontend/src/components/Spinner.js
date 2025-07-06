import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="flex justify-center mt-6">
      <Circles
        height="40"
        width="40"
        color="#3b82f6" 
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Spinner;
