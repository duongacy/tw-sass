import { HeaderSection1 } from '@/components/page-sections/header-sections/HeaderSection1';
import { HeaderSection10 } from '@/components/page-sections/header-sections/HeaderSection10';
import { HeaderSection2 } from '@/components/page-sections/header-sections/HeaderSection2';
import { HeaderSection3 } from '@/components/page-sections/header-sections/HeaderSection3';
import { HeaderSection4 } from '@/components/page-sections/header-sections/HeaderSection4';
import { HeaderSection5 } from '@/components/page-sections/header-sections/HeaderSection5';
import { HeaderSection6 } from '@/components/page-sections/header-sections/HeaderSection6';
import { HeaderSection7 } from '@/components/page-sections/header-sections/HeaderSection7';
import { HeaderSection8 } from '@/components/page-sections/header-sections/HeaderSection8';
import { HeaderSection9 } from '@/components/page-sections/header-sections/HeaderSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function HeaderSectionsPage() {
  return (
    <MainTemplate>
      Header Sections With stats
      <HeaderSection1 />
      Centered
      <HeaderSection2 />
      Centered with eyebrow
      <HeaderSection3 />
      Simple with eyebrow
      <HeaderSection4 />
      Centered on dark
      <HeaderSection5 />
      With cards
      <HeaderSection6 />
      Simple
      <HeaderSection7 />
      Simple on dark
      <HeaderSection8 />
      Simple with background image
      <HeaderSection9 />
      Centered with background image
      <HeaderSection10 />
    </MainTemplate>
  );
}
