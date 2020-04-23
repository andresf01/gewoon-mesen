import React from 'react';
import clsx from 'clsx';
import CheckedIcon from '../assets/CheckedIcon';

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
      <div className="mr-5">
        {isChecked ? (
          <div className="fill-current text-blue-main">
            <CheckedIcon />
          </div>
        ) : (
          <div className="border border-solid border-blue-main w-5 h-5 rounded"></div>
        )}
      </div>
      <div className="flex-grow">
        <div className="text-md border-b border-solid border-gray-300 text-blue-main font-medium text-sm">
          {title}
        </div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export { HelpTile as default };
