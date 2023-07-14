import { FC } from 'react';
import { FeatureSectionProps } from './types';

export const FeatureSections16: FC<FeatureSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
