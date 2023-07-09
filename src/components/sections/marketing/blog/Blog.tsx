import { FC } from 'react';
import { BlogProps } from './types';

export const Blog1: FC<BlogProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
