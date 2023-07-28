import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FC, ReactNode } from 'react';

interface AlertDialogProps
  extends AlertDialog.AlertDialogProps {
  trigger?: ReactNode;
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  hiddenWhenClickOutside?: boolean;
}

export const RadixAlertDialog: FC<AlertDialogProps> = ({
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
    <AlertDialog.Root {...props}>
      {trigger && (
        <AlertDialog.Trigger asChild>
          {trigger}
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className='data-[state=open]:animate-overlayShow fixed inset-0'
          onClick={() => {
            hiddenWhenClickOutside && onCancel?.();
          }}
        />
        <AlertDialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-lg bg-white p-6 shadow-lg'>
          {title && (
            <AlertDialog.Title className='text-xl font-bold'>
              {title}
            </AlertDialog.Title>
          )}
          {description && (
            <AlertDialog.Description className='text-base leading-6'>
              {description}
            </AlertDialog.Description>
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
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
