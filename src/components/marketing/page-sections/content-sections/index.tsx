import * as React from 'react';
import { ContentSection1 } from './ContentSection1';
import { ContentSection2 } from './ContentSection2';
import { ContentSection3 } from './ContentSection3';
import { ContentSection4 } from './ContentSection4';
import { ContentSection5 } from './ContentSection5';
import { ContentSection6 } from './ContentSection6';

export const ContentSections: React.FC = () => {
  return (
    <>
      <ContentSection1 />
      <ContentSection2 />
      <ContentSection3 />
      <ContentSection4 />
      <ContentSection5 />
      <ContentSection6 />
    </>
  );
};
