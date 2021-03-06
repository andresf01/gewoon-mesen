import React from 'react';
import clsx from 'clsx';

const Button = ({ label, action = () => ({}), className }) => {
  return (
    <div
      className={clsx([
        '-lg',
        'text-white',
        'bg-blue-main',
        'py-2',
        'px-4',
        'cursor-pointer',
        'hover:bg-blue-400',
        'transition',
        'duration-500',
        'ease-in-out',
        'transition-colors',
        'text-center',
        'rounded-lg',
        ...className.split(' '),
      ])}
      onClick={action}
    >
      {label}
    </div>
  );
};

export { Button as default };
