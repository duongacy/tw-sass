import { FC } from 'react';
import { ContentSectionProps } from './types';

export const ContentSection2: FC<ContentSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
