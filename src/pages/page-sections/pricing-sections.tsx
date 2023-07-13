import { PricingSection1 } from '@/components/page-sections/pricing-sections/PricingSection1';
import { PricingSection10 } from '@/components/page-sections/pricing-sections/PricingSection10';
import { PricingSection11 } from '@/components/page-sections/pricing-sections/PricingSection11';
import { PricingSection12 } from '@/components/page-sections/pricing-sections/PricingSection12';
import { PricingSection13 } from '@/components/page-sections/pricing-sections/PricingSection13';
import { PricingSection2 } from '@/components/page-sections/pricing-sections/PricingSection2';
import { PricingSection3 } from '@/components/page-sections/pricing-sections/PricingSection3';
import { PricingSection4 } from '@/components/page-sections/pricing-sections/PricingSection4';
import { PricingSection5 } from '@/components/page-sections/pricing-sections/PricingSection5';
import { PricingSection6 } from '@/components/page-sections/pricing-sections/PricingSection6';
import { PricingSection7 } from '@/components/page-sections/pricing-sections/PricingSection7';
import { PricingSection8 } from '@/components/page-sections/pricing-sections/PricingSection8';
import { PricingSection9 } from '@/components/page-sections/pricing-sections/PricingSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function PricingSectionsPage() {
  return (
    <MainTemplate>
      Single price with details
      <PricingSection1 />
      Three tiers
      <PricingSection2 />
      Three tiers with dividers
      <PricingSection3 />
      Three tiers with emphasized tier
      <PricingSection4 />
      Three tiers with toggle
      <PricingSection5 />
      Three tiers with toggle on dark
      <PricingSection6 />
      Four tiers with toggle
      <PricingSection7 />
      Two tiers with extra tier
      <PricingSection8 />
      With comparison table
      <PricingSection9 />
      With comparison table on dark
      <PricingSection10 />
      Three tiers with feature comparison
      <PricingSection11 />
      Two tiers
      <PricingSection12 />
      Two tiers with emphasized tier
      <PricingSection13 />
    </MainTemplate>
  );
}
