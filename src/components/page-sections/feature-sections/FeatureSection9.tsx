import { FC } from 'react';
import { FeatureSectionProps } from './types';

export const FeatureSections9: FC<FeatureSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
