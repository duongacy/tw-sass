import { Button } from '@/components/forms/Button';
import { Input } from '@/components/forms/Input';
import { Contrast } from '@/components/contrast/Contrast';
import {
  CalendarDaysIcon,
  HandRaisedIcon,
} from '@heroicons/react/20/solid';
import { FC } from 'react';
import { NewsletterProps } from './types';

export const Newsletter1: FC<NewsletterProps> = ({
  className,
  ...props
}) => {
  return (
    <Contrast
      bg='100'
      className={`relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
          <div className='max-w-xl lg:max-w-lg'>
            <Contrast
              as='h2'
              className='text-3xl font-bold tracking-tight sm:text-4xl'
              text='black'
            >
              Subscribe to our newsletter.
            </Contrast>
            <Contrast
              text='700'
              className='mt-4 text-lg leading-8'
              as='p'
            >
              Nostrud amet eu ullamco nisi aute in ad minim
              nostrud adipisicing velit quis. Duis tempor
              incididunt dolore.
            </Contrast>
            <div className='mt-6 flex max-w-md gap-x-4'>
              <label
                htmlFor='email-address'
                className='sr-only'
              >
                Email address
              </label>
              <Input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                placeholder='Enter your email'
                className='flex-auto'
              />
              <Button>Subscribe</Button>
            </div>
          </div>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
            <div className='flex flex-col items-start'>
              <Contrast
                bg='black5'
                ring='black10'
                className='rounded-md p-2 ring-1'
              >
                <CalendarDaysIcon
                  className='h-6 w-6 dark:fill-white dark:text-white'
                  aria-hidden='true'
                />
              </Contrast>
              <Contrast
                as='dt'
                className='mt-4 font-semibold'
                text='black'
              >
                Weekly articles
              </Contrast>
              <Contrast
                text='600'
                as='dd'
                className='mt-2 leading-7'
              >
                Non laboris consequat cupidatat laborum
                magna. Eiusmod non irure cupidatat duis
                commodo amet.
              </Contrast>
            </div>
            <div className='flex flex-col items-start'>
              <Contrast
                bg='black5'
                ring='black10'
                className='rounded-md p-2 ring-1'
              >
                <HandRaisedIcon
                  className='h-6 w-6 dark:fill-white dark:text-white'
                  aria-hidden='true'
                />
              </Contrast>
              <Contrast
                as={'dd'}
                className='mt-4 font-semibold'
                text='black'
              >
                No spam
              </Contrast>
              <Contrast
                text='800'
                className='mt-2 leading-7'
                as='p'
              >
                Officia excepteur ullamco ut sint duis
                proident non adipisicing. Voluptate
                incididunt anim.
              </Contrast>
            </div>
          </dl>
        </div>
      </div>
      <div
        className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
        aria-hidden='true'
      >
        <div
          className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </Contrast>
  );
};
