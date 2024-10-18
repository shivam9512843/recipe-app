// src/components/ui/Button.js

import React from 'react';

export function Button({ variant = 'default', size = 'md', className = '', children, ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition duration-300';
  
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  };

  const sizeStyles = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base',
    lg: 'text-lg px-6 py-3',
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
