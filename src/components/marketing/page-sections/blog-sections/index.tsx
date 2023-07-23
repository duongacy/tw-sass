import * as React from 'react';
import { BlogSection1 } from './BlogSection1';
import { BlogSection2 } from './BlogSection2';
import { BlogSection3 } from './BlogSection3';
import { BlogSection4 } from './BlogSection4';
import { BlogSection5 } from './BlogSection5';
import { BlogSection6 } from './BlogSection6';
import { BlogSection7 } from './BlogSection7';

export const BlogSections: React.FC = () => {
  return (
    <>
      <BlogSection1 />
      <BlogSection2 />
      <BlogSection3 />
      <BlogSection4 />
      <BlogSection5 />
      <BlogSection6 />
      <BlogSection7 />
    </>
  );
};
