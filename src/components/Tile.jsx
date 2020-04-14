import React from 'react';

const Tile = ({ title, children }) => {
  return (
    <div
      className="p-6 rounded-lg bg-blue-main"
      style={{ width: '217px', height: '132px' }}
    >
      <div className="flex justify-center fill-current text-white">
        {children}
      </div>
      <div className="font-medium mt-2 text-white">{title}</div>
    </div>
  );
};

export { Tile as default };
