import { FC } from 'react';
import { LogoProps } from './types';

export const Logo1: FC<LogoProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
