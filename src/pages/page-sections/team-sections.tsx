import { TeamSection1 } from '@/components/page-sections/team-sections/TeamSection1';
import { TeamSection2 } from '@/components/page-sections/team-sections/TeamSection2';
import { TeamSection3 } from '@/components/page-sections/team-sections/TeamSection3';
import { TeamSection4 } from '@/components/page-sections/team-sections/TeamSection4';
import { TeamSection5 } from '@/components/page-sections/team-sections/TeamSection5';
import { TeamSection6 } from '@/components/page-sections/team-sections/TeamSection6';
import { TeamSection7 } from '@/components/page-sections/team-sections/TeamSection7';
import { TeamSection8 } from '@/components/page-sections/team-sections/TeamSection8';
import MainTemplate from '@/templates/MainTemplate';

export default function TeamSectionsPage() {
  return (
    <MainTemplate>
      Team Sections With small images
      <TeamSection1 />
      With large images
      <TeamSection2 />
      Grid with round images
      <TeamSection3 />
      Dark version with large images
      <TeamSection4 />
      With image and short paragraph
      <TeamSection5 />
      With vertical images
      <TeamSection6 />
      Full width with vertical images
      <TeamSection7 />
      Grid with large round images
      <TeamSection8 />
      With medium images on dark
    </MainTemplate>
  );
}
