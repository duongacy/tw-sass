import { FC } from 'react';
import { FeatureProps } from './types';

export const Feature1: FC<FeatureProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
