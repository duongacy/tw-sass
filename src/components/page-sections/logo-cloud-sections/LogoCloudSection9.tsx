import { FC } from 'react';
import { LogoCloudSectionProps } from './types';

export const LogoCloudSection9: FC<
  LogoCloudSectionProps
> = ({ className, ...props }) => {
  return <div className={` ${className}`} {...props}></div>;
};
