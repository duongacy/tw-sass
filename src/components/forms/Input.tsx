/* eslint-disable no-unused-vars */
import * as React from 'react';
import { InputProps } from '../types';
import { contrastRing } from '../contrast/configure/contrastRing';
import { contrastText } from '../contrast/configure/contrastText';
import { contrastBg } from '../contrast/configure/contrastBg';

export const Input: React.FC<
  InputProps & {
    label?: React.ReactNode;
    labelClassName?: string;
  }
> = ({
  className = '',
  label,
  labelClassName = '',
  ...props
}) => {
  const id = React.useId();

  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={id} className={`${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
        ${contrastText.default[900]}
        min-h-[44px] w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6`}
        {...props}
      />
    </div>
  );
};
