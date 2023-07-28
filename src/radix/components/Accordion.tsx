import * as React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionItemProps &
    React.RefAttributes<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  Accordion.AccordionTriggerProps &
    React.RefAttributes<HTMLButtonElement>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className='flex'>
    <Accordion.Trigger
      className={classNames(
        'group flex h-11 flex-1 cursor-default items-center justify-between px-5 leading-none shadow outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className='transition-transform duration-300 group-data-[state=open]:rotate-180'
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionContentProps &
    React.RefAttributes<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className='px-5 py-[15px]'>{children}</div>
  </Accordion.Content>
));

type AccordionItemType = {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

type RadixAccordionProps = {
  items?: AccordionItemType[];
  className?: string;
} & (
  | Accordion.AccordionSingleProps
  | Accordion.AccordionMultipleProps
) &
  React.RefAttributes<HTMLDivElement>;

export const RadixAccordion: React.FC<
  RadixAccordionProps
> = ({ items = [], className = '', ...props }) => {
  return (
    <Accordion.Root
      className={'rounded-md shadow ' + className}
      {...props}
    >
      {items.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
};
