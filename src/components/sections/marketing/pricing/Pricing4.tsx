import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing4: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
