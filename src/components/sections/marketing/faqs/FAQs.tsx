import { FC } from 'react';
import { FAQsProps } from './types';

export const FAQs1: FC<FAQsProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
