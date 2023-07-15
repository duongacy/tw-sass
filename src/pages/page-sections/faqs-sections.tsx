import { FAQsSection1 } from '@/components/page-sections/faqs-sections/FAQsSection1';
import { FAQsSection10 } from '@/components/page-sections/faqs-sections/FAQsSection10';
import { FAQsSection2 } from '@/components/page-sections/faqs-sections/FAQsSection2';
import { FAQsSection3 } from '@/components/page-sections/faqs-sections/FAQsSection3';
import { FAQsSection4 } from '@/components/page-sections/faqs-sections/FAQsSection4';
import { FAQsSection5 } from '@/components/page-sections/faqs-sections/FAQsSection5';
import { FAQsSection6 } from '@/components/page-sections/faqs-sections/FAQsSection6';
import { FAQsSection7 } from '@/components/page-sections/faqs-sections/FAQsSection7';
import { FAQsSection8 } from '@/components/page-sections/faqs-sections/FAQsSection8';
import { FAQsSection9 } from '@/components/page-sections/faqs-sections/FAQsSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function FAQsSectionsPage() {
  return (
    <MainTemplate>
      Offset with supporting text
      <FAQsSection1 />
      Centered accordion
      <FAQsSection2 />
      Centered accordion on dark
      <FAQsSection3 />
      Side-by-side
      <FAQsSection4 />
      Three columns
      <FAQsSection5 />
      Three columns on dark
      <FAQsSection6 />
      Three columns with centered introduction
      <FAQsSection7 />
      Two columns
      <FAQsSection8 />
      Two columns on dark
      <FAQsSection9 />
      Two columns with centered introduction
      <FAQsSection10 />
    </MainTemplate>
  );
}
