import { FC } from 'react';
import { TeamSectionProps } from './types';

export const TeamSection3: FC<TeamSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
