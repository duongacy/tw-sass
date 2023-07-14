import { FC } from 'react';
import { TeamSectionProps } from './types';

export const TeamSection5: FC<TeamSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
