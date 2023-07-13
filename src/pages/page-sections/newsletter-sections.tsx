import { NewsletterSections1 } from '@/components/page-sections/newsletter-sections/NewsletterSections1';
import { NewsletterSections2 } from '@/components/page-sections/newsletter-sections/NewsletterSections2';
import { NewsletterSections3 } from '@/components/page-sections/newsletter-sections/NewsletterSections3';
import { NewsletterSections4 } from '@/components/page-sections/newsletter-sections/NewsletterSections4';
import { NewsletterSections5 } from '@/components/page-sections/newsletter-sections/NewsletterSections5';
import { NewsletterSections6 } from '@/components/page-sections/newsletter-sections/NewsletterSections6';
import { NewsletterSections7 } from '@/components/page-sections/newsletter-sections/NewsletterSections7';
import MainTemplate from '@/templates/MainTemplate';

export default function HeroSectionsPage() {
  return (
    <>
      <MainTemplate>
        Side-by-side with details
        <NewsletterSections1 />
        Simple side-by-side
        <NewsletterSections2 />
        Simple side-by-side on dark
        <NewsletterSections3 />
        Simple side-by-side on brand
        <NewsletterSections4 />
        Simple stacked
        <NewsletterSections5 />
        Centered card
        <NewsletterSections6 />
        Side-by-side on card
        <NewsletterSections7 />
      </MainTemplate>
    </>
  );
}
