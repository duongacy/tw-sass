import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing10: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
