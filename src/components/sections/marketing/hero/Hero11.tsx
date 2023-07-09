import { FC } from 'react';
import { HeroProps } from './types';

export const Hero11: FC<HeroProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
