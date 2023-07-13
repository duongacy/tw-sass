import { HeroSection1 } from '@/components/page-sections/hero-sections/HeroSection1';
import { HeroSection10 } from '@/components/page-sections/hero-sections/HeroSection10';
import { HeroSection11 } from '@/components/page-sections/hero-sections/HeroSection11';
import { HeroSection12 } from '@/components/page-sections/hero-sections/HeroSection12';
import { HeroSection2 } from '@/components/page-sections/hero-sections/HeroSection2';
import { HeroSection3 } from '@/components/page-sections/hero-sections/HeroSection3';
import { HeroSection4 } from '@/components/page-sections/hero-sections/HeroSection4';
import { HeroSection5 } from '@/components/page-sections/hero-sections/HeroSection5';
import { HeroSection6 } from '@/components/page-sections/hero-sections/HeroSection6';
import { HeroSection7 } from '@/components/page-sections/hero-sections/HeroSection7';
import { HeroSection8 } from '@/components/page-sections/hero-sections/HeroSection8';
import { HeroSection9 } from '@/components/page-sections/hero-sections/HeroSection9';
import MainTemplate from '@/templates/MainTemplate';

export default function HeroSectionsPage() {
  return (
    <>
      <MainTemplate>
        Simple centered
        <HeroSection1 />
        Split with screenshot on dark
        <HeroSection2 />
        Split with screenshot
        <HeroSection3 />
        Split with code example
        <HeroSection4 />
        Simple centered with background image
        <HeroSection5 />
        With app screenshot
        <HeroSection6 />
        With app screenshot on dark
        <HeroSection7 />
        With phone mockup
        <HeroSection8 />
        Split with image
        <HeroSection9 />
        With angled image on right
        <HeroSection10 />
        With image tiles
        <HeroSection11 />
        With offset image
        <HeroSection12 />
      </MainTemplate>
    </>
  );
}
