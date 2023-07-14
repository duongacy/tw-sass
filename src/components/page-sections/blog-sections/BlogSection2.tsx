import { FC } from 'react';
import { BlogSectionProps } from './types';

export const BlogSection2: FC<BlogSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
