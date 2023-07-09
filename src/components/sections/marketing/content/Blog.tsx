import { FC } from 'react';
import { ContentProps } from './types';

export const Content1: FC<ContentProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
