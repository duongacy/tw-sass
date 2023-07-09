import { FC } from 'react';
import { BannersProps } from './types';

export const Banners1: FC<BannersProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
