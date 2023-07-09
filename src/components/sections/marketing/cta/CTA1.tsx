import { FC } from 'react';
import { CTAProps } from './types';

export const CTA1: FC<CTAProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
