import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing13: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
