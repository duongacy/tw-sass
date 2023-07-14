import { FC } from 'react';
import { FooterSectionProps } from './types';

export const FooterSection4: FC<FooterSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
