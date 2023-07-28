import { RadixAccordion } from '@/radix/components/Accordion';
import { RadixAlertDialog } from '@/radix/components/AlertDialog';
import { RadixAvatar } from '@/radix/components/Avatar';
import { RadixCheckbox } from '@/radix/components/Checkbox';
import { RadixCollapsible } from '@/radix/components/Collapsible';
import { RadixContextMenu } from '@/radix/components/ContextMenu';
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

  const [showCollapse, setShowCollapse] = useState(false);

  return (
    <>
      <RadixAccordion
        items={radixAccordionItems}
        type='multiple'
        className='w-[300px]'
      />
      {/* <button onClick={toggleDialog}>Toggle dialog</button>
      <RadixAlertDialog
        open={dialogOpen}
        onOk={turnOffDialog}
        onCancel={turnOffDialog}
        hiddenWhenClickOutside
        okText='OK'
        cancelText='Cancel'
        title='Are you absolutely sure?'
        description='This action cannot be undone. This will permanently delete your account and remove your
        data from our servers.'
      /> */}
      <button onClick={toggleDialog}>Toggle dialog</button>
      <RadixAlertDialog
        open={dialogOpen}
        onOk={turnOffDialog}
        onCancel={turnOffDialog}
        hiddenWhenClickOutside
        okText='OK'
        cancelText='Cancel'
        title='Are you absolutely sure?'
        description='This action cannot be undone. This will permanently delete your account and remove your
        data from our servers.'
      />
      <RadixAvatar
        falbackText='s'
        src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
      />
      <RadixCheckbox label='label' />
      <RadixCollapsible
        open={showCollapse}
        onOpenChange={setShowCollapse}
        className='w-80'
        title='title'
      >
        xin chao
      </RadixCollapsible>
      <RadixContextMenu />
    </>
  );
};

export default RadixUI;
