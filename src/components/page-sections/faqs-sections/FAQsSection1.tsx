import { FC } from 'react';
import { FAQsSectionProps } from './types';

export const FAQsSection1: FC<FAQsSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
