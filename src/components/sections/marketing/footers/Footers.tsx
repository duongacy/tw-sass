import { FC } from 'react';
import { FootersProps } from './types';

export const Footers1: FC<FootersProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
