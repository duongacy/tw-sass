import { FC } from 'react';
import { TestimonialsSectionProps } from './types';

export const TestimonialsSection8: FC<
  TestimonialsSectionProps
> = ({ className, ...props }) => {
  return <div className={` ${className}`} {...props}></div>;
};
