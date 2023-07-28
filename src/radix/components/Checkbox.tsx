import * as React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { v4 } from 'uuid';

interface RadixCheckboxProps
  extends Checkbox.CheckboxProps {
  label?: string;
}

export const RadixCheckbox = React.forwardRef<
  HTMLButtonElement,
  RadixCheckboxProps
>(({ label, ...props }, ref) => {
  const id = v4();
  return (
    <div className='flex items-center gap-2'>
      <Checkbox.Root
        className='flex h-6 w-6 appearance-none items-center justify-center rounded bg-white shadow outline-none hover:bg-primary-100/20 focus:shadow-lg'
        id={id}
        ref={ref}
        {...props}
      >
        <Checkbox.Indicator className='text-primary-500'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label className='leading-none ' htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});
