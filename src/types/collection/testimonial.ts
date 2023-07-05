import { DataCover } from '../common';
import { Author } from './author';

export type Testimonial = DataCover<{
  content: string;
  author: {
    data: Author;
  };
}>;

export type GetAllTestimonialParams = any;
