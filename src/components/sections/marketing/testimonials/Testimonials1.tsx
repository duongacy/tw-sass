import { FC } from 'react';
import { TestimonialsProps } from './types';

export const Testimonials1: FC<TestimonialsProps> = ({
  className,
  ...props
}) => {
  return <div className={` ${className}`} {...props}></div>;
};
