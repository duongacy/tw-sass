import { FC } from 'react';
import { ContactSectionProps } from './types';

export const ContactSection6: FC<ContactSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
