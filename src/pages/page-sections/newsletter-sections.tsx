import { NewsletterSection1 } from '@/components/page-sections/newsletter-sections/NewsletterSection1';
import { NewsletterSection2 } from '@/components/page-sections/newsletter-sections/NewsletterSection2';
import { NewsletterSection3 } from '@/components/page-sections/newsletter-sections/NewsletterSection3';
import { NewsletterSection4 } from '@/components/page-sections/newsletter-sections/NewsletterSection4';
import { NewsletterSection5 } from '@/components/page-sections/newsletter-sections/NewsletterSection5';
import { NewsletterSection6 } from '@/components/page-sections/newsletter-sections/NewsletterSection6';
import { NewsletterSection7 } from '@/components/page-sections/newsletter-sections/NewsletterSection7';
import MainTemplate from '@/templates/MainTemplate';

export default function HeroSectionsPage() {
  return (
    <>
      <MainTemplate>
        Side-by-side with details
        <NewsletterSection1 />
        Simple side-by-side
        <NewsletterSection2 />
        Simple side-by-side on dark
        <NewsletterSection3 />
        Simple side-by-side on brand
        <NewsletterSection4 />
        Simple stacked
        <NewsletterSection5 />
        Centered card
        <NewsletterSection6 />
        Side-by-side on card
        <NewsletterSection7 />
      </MainTemplate>
    </>
  );
}
