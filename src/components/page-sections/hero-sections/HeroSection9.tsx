import { FC } from 'react';
import { HeroSectionProps } from './types';

export const HeroSection9: FC<HeroSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
