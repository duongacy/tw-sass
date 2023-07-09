import { FC } from 'react';
import { HeadersProps } from './types';

export const Headers1: FC<HeadersProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
