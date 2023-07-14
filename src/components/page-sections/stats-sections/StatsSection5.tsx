import { FC } from 'react';
import { StatsSectionProps } from './types';

export const StatsSections5: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
