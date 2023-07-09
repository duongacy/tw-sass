import { FC } from 'react';
import { FlyoutMenusProps } from './types';

export const FlyoutMenus1: FC<FlyoutMenusProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
