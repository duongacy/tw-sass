import { TestimonialsSection1 } from '@/components/page-sections/testimonials-sections/TestimonialsSection1';
import { TestimonialsSection2 } from '@/components/page-sections/testimonials-sections/TestimonialsSection2';
import { TestimonialsSection3 } from '@/components/page-sections/testimonials-sections/TestimonialsSection3';
import { TestimonialsSection4 } from '@/components/page-sections/testimonials-sections/TestimonialsSection4';
import { TestimonialsSection5 } from '@/components/page-sections/testimonials-sections/TestimonialsSection5';
import { TestimonialsSection6 } from '@/components/page-sections/testimonials-sections/TestimonialsSection6';
import { TestimonialsSection7 } from '@/components/page-sections/testimonials-sections/TestimonialsSection7';
import { TestimonialsSection8 } from '@/components/page-sections/testimonials-sections/TestimonialsSection8';
import { TestimonialsSection9 } from '@/components/page-sections/testimonials-sections/TestimonialsSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function TestimonialSectionsPage() {
  return (
    <MainTemplate>
      Simple centered
      <TestimonialsSection1 />
      With large avatar
      <TestimonialsSection2 />
      With overlapping image
      <TestimonialsSection3 />
      With background image
      <TestimonialsSection4 />
      Side-by-side
      <TestimonialsSection5 />
      Side-by-side on dark
      <TestimonialsSection6 />
      With star rating
      <TestimonialsSection7 />
      Grid
      <TestimonialsSection8 />
      Off-white grid
      <TestimonialsSection9 />
    </MainTemplate>
  );
}
