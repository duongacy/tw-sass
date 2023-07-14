import { FC } from 'react';
import { FooterSectionProps } from './types';

export const FooterSection6: FC<FooterSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
