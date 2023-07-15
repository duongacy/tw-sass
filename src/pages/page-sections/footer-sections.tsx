import { FooterSection1 } from '@/components/page-sections/footer-sections/FooterSection1';
import { FooterSection10 } from '@/components/page-sections/footer-sections/FooterSection10';
import { FooterSection2 } from '@/components/page-sections/footer-sections/FooterSection2';
import { FooterSection3 } from '@/components/page-sections/footer-sections/FooterSection3';
import { FooterSection4 } from '@/components/page-sections/footer-sections/FooterSection4';
import { FooterSection5 } from '@/components/page-sections/footer-sections/FooterSection5';
import { FooterSection6 } from '@/components/page-sections/footer-sections/FooterSection6';
import { FooterSection7 } from '@/components/page-sections/footer-sections/FooterSection7';
import { FooterSection8 } from '@/components/page-sections/footer-sections/FooterSection8';
import { FooterSection9 } from '@/components/page-sections/footer-sections/FooterSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function FooterSectionsPage() {
  return (
    <MainTemplate>
      4-column with company mission on dark
      <FooterSection1 />
      4-column with company mission
      <FooterSection2 />
      4-column simple dark
      <FooterSection3 />
      4-column simple
      <FooterSection4 />
      4-column with newsletter dark
      <FooterSection5 />
      4-column with newsletter
      <FooterSection6 />
      4-column with newsletter below dark
      <FooterSection7 />
      4-column with newsletter below
      <FooterSection8 />
      Simple centered
      <FooterSection9 />
      Social links only
      <FooterSection10 />
    </MainTemplate>
  );
}
