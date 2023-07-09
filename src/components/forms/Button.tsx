/* eslint-disable no-unused-vars */
import * as React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<
  ButtonProps & {
    variant?: 'primary' | 'secondary';
  }
> = ({ className, variant = 'primary', ...props }) => {
  return (
    <button
      className={`rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${className}`}
      {...props}
    />
  );
};
