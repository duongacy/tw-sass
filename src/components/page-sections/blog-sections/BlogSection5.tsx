import { FC } from 'react';
import { BlogSectionProps } from './types';

export const BlogSection5: FC<BlogSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
