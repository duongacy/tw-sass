import { LogoCloudSection1 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection1';
import { LogoCloudSection10 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection10';
import { LogoCloudSection11 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection11';
import { LogoCloudSection12 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection12';
import { LogoCloudSection2 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection2';
import { LogoCloudSection3 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection3';
import { LogoCloudSection4 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection4';
import { LogoCloudSection5 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection5';
import { LogoCloudSection6 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection6';
import { LogoCloudSection7 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection7';
import { LogoCloudSection8 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection8';
import { LogoCloudSection9 } from '@/components/page-sections/logo-cloud-sections/LogoCloudSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function LogoCloudSectionsPage() {
  return (
    <MainTemplate>
      Simple with heading
      <LogoCloudSection1 />
      Simple with heading on dark
      <LogoCloudSection2 />
      Simple with call-to-action
      <LogoCloudSection3 />
      Simple with call-to-action on dark
      <LogoCloudSection4 />
      Simple left-aligned
      <LogoCloudSection5 />
      Simple left-aligned on dark
      <LogoCloudSection6 />
      Split with logos on right
      <LogoCloudSection7 />
      Split with logos on right on dark
      <LogoCloudSection8 />
      Simple
      <LogoCloudSection9 />
      Simple on dark
      <LogoCloudSection10 />
      Grid
      <LogoCloudSection11 />
      Grid on dark
      <LogoCloudSection12 />
    </MainTemplate>
  );
}
