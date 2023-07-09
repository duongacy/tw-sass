import { FC } from 'react';
import { HeroProps } from './types';

export const Hero6: FC<HeroProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
