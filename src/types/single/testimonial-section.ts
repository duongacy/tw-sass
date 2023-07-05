import { Testimonial } from '../collection/testimonial';
import { DataCover } from '../common';

export type TestimonialSection = DataCover<{
  title: string;
  description: string;
  testimonials: Testimonial[];
}>;

export type GetAllTestimonialParams = any;
