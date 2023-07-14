import { StatsSection1 } from '@/components/page-sections/stats-sections/StatsSection1';
import { StatsSection10 } from '@/components/page-sections/stats-sections/StatsSection10';
import { StatsSection2 } from '@/components/page-sections/stats-sections/StatsSection2';
import { StatsSection3 } from '@/components/page-sections/stats-sections/StatsSection3';
import { StatsSection4 } from '@/components/page-sections/stats-sections/StatsSection4';
import { StatsSection5 } from '@/components/page-sections/stats-sections/StatsSection5';
import { StatsSection6 } from '@/components/page-sections/stats-sections/StatsSection6';
import { StatsSection7 } from '@/components/page-sections/stats-sections/StatsSection7';
import { StatsSection8 } from '@/components/page-sections/stats-sections/StatsSection8';
import { StatsSection9 } from '@/components/page-sections/stats-sections/StatsSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function StatsSectionsPage() {
  return (
    <MainTemplate>
      Stats Sections Simple
      <StatsSection1 />
      Simple on dark
      <StatsSection2 />
      Simple grid
      <StatsSection3 />
      Simple grid on dark
      <StatsSection4 />
      With background image
      <StatsSection5 />
      Split with image
      <StatsSection6 />
      Timeline
      <StatsSection7 />
      Stepped
      <StatsSection8 />
      With two column description on dark
      <StatsSection9 />
      With description
      <StatsSection10 />
    </MainTemplate>
  );
}
