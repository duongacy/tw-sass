import { FC } from 'react';
import { HeaderSectionProps } from './types';

export const HeaderSection6: FC<HeaderSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
