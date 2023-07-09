import { FC } from 'react';
import { PricingProps } from './types';

export const Pricing11: FC<PricingProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
