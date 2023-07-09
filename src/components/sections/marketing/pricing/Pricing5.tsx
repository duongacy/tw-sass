import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing5: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
