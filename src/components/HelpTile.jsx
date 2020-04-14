import React from 'react';
import clsx from 'clsx';

const HelpTile = ({
  id,
  title,
  description,
  isChecked = false,
  handleClickType,
}) => {
  return (
    <div
      className={clsx([
        'rounded-lg',
        'flex',
        'flex-column',
        'border',
        'p-4',
        'cursor-pointer',
        'hover:border-blue-400',
        isChecked && 'border-blue-main',
      ])}
      onClick={handleClickType}
    >
      <div className="w-8 text-center">{isChecked ? '(X)' : '()'}</div>
      <div>
        <div className="text-md">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export { HelpTile as default };
