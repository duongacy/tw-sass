import { FC } from 'react';
import { ContentSectionProps } from './types';

export const ContentSection4: FC<ContentSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
