import { FC } from 'react';
import { TeamProps } from './types';

export const Team1: FC<TeamProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
