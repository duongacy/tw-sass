import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';
import { ReactNode } from 'react';

interface RadixDialogProps extends Dialog.DialogProps {
  trigger?: ReactNode;
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  hiddenWhenClickOutside?: boolean;
}

export const RadixDialog: React.FC<RadixDialogProps> = ({
  trigger,
  okText,
  cancelText,
  onCancel,
  onOk,
  title,
  description,
  children,
  hiddenWhenClickOutside,
  ...props
}) => {
  return (
    <Dialog.Root {...props}>
      {trigger && (
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay
          className='data-[state=open]:animate-overlayShow fixed inset-0'
          onClick={() => {
            hiddenWhenClickOutside && onCancel?.();
          }}
        />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-lg bg-white p-6 shadow-lg'>
          {title && (
            <Dialog.Title className='text-xl font-bold'>
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description className='text-base leading-6'>
              {description}
            </Dialog.Description>
          )}

          {children}
          {(!!cancelText || !!okText) && (
            <div className='flex items-end justify-end gap-4'>
              {cancelText && (
                <button onClick={onCancel}>
                  {cancelText}
                </button>
              )}

              {okText && (
                <button onClick={onOk}>{okText}</button>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
