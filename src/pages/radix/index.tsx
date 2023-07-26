import { RadixAccordion } from '@/radix/components/Accordion';
import { RadixAlertDialog } from '@/radix/components/AlertDialog';
import { useState } from 'react';

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const turnOffDialog = () => {
    setDialogOpen(false);
  };
  const toggleDialog = () => {
    setDialogOpen((prev) => !prev);
  };

  return (
    <>
      <RadixAccordion
        items={radixAccordionItems}
        type='multiple'
        className='w-[300px]'
      />
      <button onClick={toggleDialog}>Toggle dialog</button>
      <RadixAlertDialog
        open={dialogOpen}
        onOk={turnOffDialog}
        onCancel={turnOffDialog}
        okText='OK'
        cancelText='Cancel'
        title='Are you absolutely sure?'
        description='This action cannot be undone. This will permanently delete your account and remove your
        data from our servers.'
      />
    </>
  );
};

export default RadixUI;
