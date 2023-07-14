import { FC } from 'react';
import { FAQsSectionProps } from './types';

export const FAQsSection4: FC<FAQsSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
