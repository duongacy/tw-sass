import { FC } from 'react';
import { StatsSectionProps } from './types';

export const StatsSections2: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
