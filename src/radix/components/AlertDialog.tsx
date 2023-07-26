import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FC, ReactNode, useRef, useEffect } from 'react';

interface AlertDialogProps
  extends AlertDialog.AlertDialogProps {
  trigger?: ReactNode;
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  title?: ReactNode;
  description?: ReactNode;
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
        <AlertDialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
        <AlertDialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          {title && (
            <AlertDialog.Title className='m-0 text-[17px] font-medium text-mauve12'>
              {title}
            </AlertDialog.Title>
          )}
          {description && (
            <AlertDialog.Description className='mb-5 mt-4 text-[15px] leading-normal text-mauve11'>
              {description}
            </AlertDialog.Description>
          )}
          {children}
          {(!!cancelText || !!okText) && (
            <div className='flex justify-end gap-[25px]'>
              {cancelText && (
                <AlertDialog.Cancel asChild>
                  <button
                    onClick={onCancel}
                    className='inline-flex h-[35px] items-center justify-center rounded-[4px] bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none hover:bg-mauve5 focus:shadow-[0_0_0_2px] focus:shadow-mauve7'
                  >
                    {cancelText}
                  </button>
                </AlertDialog.Cancel>
              )}

              {okText && (
                <AlertDialog.Action asChild>
                  <button
                    onClick={onOk}
                    className='text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'
                  >
                    {okText}
                  </button>
                </AlertDialog.Action>
              )}
            </div>
          )}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
