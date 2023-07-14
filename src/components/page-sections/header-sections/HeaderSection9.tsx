import { FC } from 'react';
import { HeaderSectionProps } from './types';

export const HeaderSection9: FC<HeaderSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
