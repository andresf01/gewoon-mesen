import React from 'react';

const Tile = ({ title, img }) => {
  return (
    <div className="p-6 rounded bg-blue-100">
      <img src={img} alt={title} />
      <div className="font-bold">{title}</div>
    </div>
  );
};

export { Tile as default };
