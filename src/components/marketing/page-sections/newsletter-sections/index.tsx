import * as React from 'react';
import { NewsletterSection1 } from './NewsletterSection1';
import { NewsletterSection2 } from './NewsletterSection2';
import { NewsletterSection3 } from './NewsletterSection3';
import { NewsletterSection4 } from './NewsletterSection4';
import { NewsletterSection5 } from './NewsletterSection5';
import { NewsletterSection6 } from './NewsletterSection6';
import { NewsletterSection7 } from './NewsletterSection7';

export const NewsletterSections: React.FC = () => {
  return (
    <>
      <NewsletterSection1 />
      <NewsletterSection2 />
      <NewsletterSection3 />
      <NewsletterSection4 />
      <NewsletterSection5 />
      <NewsletterSection6 />
      <NewsletterSection7 />
    </>
  );
};
