import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing2: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
