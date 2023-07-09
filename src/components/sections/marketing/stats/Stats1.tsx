import { FC } from 'react';
import { StatsProps } from './types';

export const Stats1: FC<StatsProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
