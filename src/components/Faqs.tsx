import Image from 'next/image';
import backgroundImage from '@/images/background-faqs.jpg';
import { Container } from './Container';
import { v4 } from 'uuid';
import { Button } from '@material-tailwind/react';

export function Faqs() {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='relative overflow-hidden bg-secondary-50 py-20 sm:py-32'
    >
      <Image
        className='absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]'
        src={backgroundImage}
        alt=''
        width={1558}
        height={946}
        unoptimized
      />
      <Container className='relative'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faq-title'
            className='font-display tracking-tight text-secondary-900'
          >
            Frequently asked questions
          </h2>
          <h4 className='mt-4 tracking-tight text-secondary-700'>
            If you can’t find what you’re looking for, email
            our support team and if you’re lucky someone
            will get back to you.
          </h4>
        </div>
        <div className='mt-16 grid grid-cols-[repeat(auto-fit,minmax(340px,auto))] gap-8'>
          {Array.from({ length: 8 }).map((i) => (
            <div key={v4()}>
              <h4 className='font-display leading-7 text-secondary-900'>
                Does TaxPal handle VAT?
              </h4>
              <small className='mt-3 text-secondary-700'>
                Well no, but if you move your company
                offshore you can probably ignore it.
              </small>
            </div>
          ))}
        </div>
        <button
          data-tooltip-target='tooltip-light'
          data-tooltip-style='light'
          type='button'
          className='rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
          Light tooltip
        </button>
        <div
          id='tooltip-light'
          role='tooltip'
          className='tooltip invisible absolute z-10 inline-block rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-900 opacity-0 shadow-sm'
        >
          Tooltip content
          <div
            className='tooltip-arrow'
            data-popper-arrow
          ></div>
        </div>
      </Container>
    </section>
  );
}
