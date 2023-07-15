import { CTASection1 } from '@/components/page-sections/cta-sections/CTASection1';
import { CTASection10 } from '@/components/page-sections/cta-sections/CTASection10';
import { CTASection11 } from '@/components/page-sections/cta-sections/CTASection11';
import { CTASection2 } from '@/components/page-sections/cta-sections/CTASection2';
import { CTASection3 } from '@/components/page-sections/cta-sections/CTASection3';
import { CTASection4 } from '@/components/page-sections/cta-sections/CTASection4';
import { CTASection5 } from '@/components/page-sections/cta-sections/CTASection5';
import { CTASection6 } from '@/components/page-sections/cta-sections/CTASection6';
import { CTASection7 } from '@/components/page-sections/cta-sections/CTASection7';
import { CTASection8 } from '@/components/page-sections/cta-sections/CTASection8';
import { CTASection9 } from '@/components/page-sections/cta-sections/CTASection9';
import MainTemplate from '@/templates/MainTemplate';

export default function CTASectionsPage() {
  return (
    <MainTemplate>
      Dark panel with app screenshot
      <CTASection1 />
      Simple stacked
      <CTASection2 />
      Centered on dark panel
      <CTASection3 />
      Simple centered
      <CTASection4 />
      Simple centered on dark
      <CTASection5 />
      Simple centered on brand
      <CTASection6 />
      Simple justified
      <CTASection7 />
      Simple justified on light brand
      <CTASection8 />
      Split with image
      <CTASection9 />
      Two columns with photo on dark
      <CTASection10 />
      With image tiles
      <CTASection11 />
    </MainTemplate>
  );
}
