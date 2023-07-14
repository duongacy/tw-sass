import { FC } from 'react';
import { FAQsSectionProps } from './types';

export const FAQsSection7: FC<FAQsSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
