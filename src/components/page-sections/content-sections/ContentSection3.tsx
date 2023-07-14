import { FC } from 'react';
import { ContentSectionProps } from './types';

export const ContentSection3: FC<ContentSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
