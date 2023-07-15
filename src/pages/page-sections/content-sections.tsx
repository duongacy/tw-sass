import { ContentSection1 } from '@/components/page-sections/content-sections/ContentSection1';
import { ContentSection2 } from '@/components/page-sections/content-sections/ContentSection2';
import { ContentSection3 } from '@/components/page-sections/content-sections/ContentSection3';
import { ContentSection4 } from '@/components/page-sections/content-sections/ContentSection4';
import { ContentSection5 } from '@/components/page-sections/content-sections/ContentSection5';
import { ContentSection6 } from '@/components/page-sections/content-sections/ContentSection6';
import MainTemplate from '@/templates/MainTemplate';

export default function ContentSectionsPage() {
  return (
    <MainTemplate>
      Content Sections
      <ContentSection1 />
      With sticky product screenshot
      <ContentSection2 />
      With testimonial
      <ContentSection3 />
      Two columns with screenshot
      <ContentSection4 />
      With testimonial and stats
      <ContentSection5 />
      Split with image
      <ContentSection6 />
      Centered
    </MainTemplate>
  );
}
