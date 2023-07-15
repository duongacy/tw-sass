import { ContactSection1 } from '@/components/page-sections/contact-sections/ContactSection1';
import { ContactSection2 } from '@/components/page-sections/contact-sections/ContactSection2';
import { ContactSection3 } from '@/components/page-sections/contact-sections/ContactSection3';
import { ContactSection4 } from '@/components/page-sections/contact-sections/ContactSection4';
import { ContactSection5 } from '@/components/page-sections/contact-sections/ContactSection5';
import { ContactSection6 } from '@/components/page-sections/contact-sections/ContactSection6';
import { ContactSection7 } from '@/components/page-sections/contact-sections/ContactSection7';
import { ContactSection8 } from '@/components/page-sections/contact-sections/ContactSection8';
import MainTemplate from '@/templates/MainTemplate';

export default function ContactSectionsPage() {
  return (
    <MainTemplate>
      Contact Sections Centered
      <ContactSection1 />
      Side-by-side grid
      <ContactSection2 />
      Consequat sunt cillum cillum elit sint. Qui occaecat
      nisi in ipsum commodo.
      <ContactSection3 />
      Split with pattern
      <ContactSection4 />
      Split with pattern on dark
      <ContactSection5 />
      Simple four-column
      <ContactSection6 />
      Simple centered
      <ContactSection7 />
      With testimonial
      <ContactSection8 />
      Split with image
    </MainTemplate>
  );
}
