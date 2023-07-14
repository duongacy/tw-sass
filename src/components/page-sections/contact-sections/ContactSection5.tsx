import { FC } from 'react';
import { ContactSectionProps } from './types';

export const ContactSection5: FC<ContactSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
