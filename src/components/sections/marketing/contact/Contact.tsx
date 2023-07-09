import { FC } from 'react';
import { ContactProps } from './types';

export const Contact1: FC<ContactProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
