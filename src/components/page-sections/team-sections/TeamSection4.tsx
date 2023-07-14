import { FC } from 'react';
import { TeamSectionProps } from './types';

export const TeamSection4: FC<TeamSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
