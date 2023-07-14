import { FC } from 'react';
import { BlogSectionProps } from './types';

export const BlogSection3: FC<BlogSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
