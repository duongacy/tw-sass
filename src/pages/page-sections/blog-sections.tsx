import { BlogSection1 } from '@/components/page-sections/blog-sections/BlogSection1';
import { BlogSection2 } from '@/components/page-sections/blog-sections/BlogSection2';
import { BlogSection3 } from '@/components/page-sections/blog-sections/BlogSection3';
import { BlogSection4 } from '@/components/page-sections/blog-sections/BlogSection4';
import { BlogSection5 } from '@/components/page-sections/blog-sections/BlogSection5';
import { BlogSection6 } from '@/components/page-sections/blog-sections/BlogSection6';
import { BlogSection7 } from '@/components/page-sections/blog-sections/BlogSection7';
import MainTemplate from '@/templates/MainTemplate';

export default function BlogSectionsPage() {
  return (
    <MainTemplate>
      Three-column
      <BlogSection1 />
      Three-column with images
      <BlogSection2 />
      Three-column with background images
      <BlogSection3 />
      Single-column
      <BlogSection4 />
      Single-column with images
      <BlogSection5 />
      With featured post
      <BlogSection6 />
      With photo and list
      <BlogSection7 />
    </MainTemplate>
  );
}
