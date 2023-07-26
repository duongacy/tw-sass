import { RadixAccordion } from '@/radix/components/Accordion';
import React from 'react';

interface IRadixUIProps {}
const radixAccordionItems = [
  {
    value: 'item-1',
    trigger: 'Is it accessible?',
    content:
      'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    trigger: 'Is it accessible 2?',
    content:
      'Yes. It adheres to the WAI-ARIA design pattern.',
  },
];

const RadixUI: React.FunctionComponent<
  IRadixUIProps
> = () => {
  return (
    <>
      <RadixAccordion
        items={radixAccordionItems}
        type='multiple'
        className='w-[300px]'
      />
    </>
  );
};

export default RadixUI;
