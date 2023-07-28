import * as React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import {
  RowSpacingIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';

interface RadixCollapsibleProps
  extends Collapsible.CollapsibleProps {
  hardedContent?: React.ReactNode;
  title?: string;
}

export const RadixCollapsible = React.forwardRef<
  HTMLDivElement,
  RadixCollapsibleProps
>(
  (
    {
      className = '',
      hardedContent,
      children,
      title,
      ...props
    },
    ref
  ) => {
    return (
      <Collapsible.Root
        className={className}
        ref={ref}
        {...props}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {title && (
            <span className='text-[15px] leading-[25px] text-violet11'>
              {title}
            </span>
          )}
          <Collapsible.Trigger asChild>
            <button className='shadow-blackA7 inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3'>
              {props.open ? (
                <Cross2Icon />
              ) : (
                <RowSpacingIcon />
              )}
            </button>
          </Collapsible.Trigger>
        </div>
        {hardedContent}
        {children && (
          <Collapsible.Content>
            {children}
          </Collapsible.Content>
        )}
      </Collapsible.Root>
    );
  }
);
