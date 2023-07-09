/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { NewsletterProps } from './types';
import { Contrast } from '@/components/contrast/Contrast';
import { contrastRing } from '@/components/contrast/configure/contrastRing';
import { contrastText } from '@/components/contrast/configure/contrastText';
import { contrastBg } from '@/components/contrast/configure/contrastBg';
import { Input } from '@/components/forms/Input';

export const Newsletter7: FC<NewsletterProps> = ({
  className,
  ...props
}) => {
  return (
    <Contrast
      bg='white'
      className={`py-16 sm:py-24 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <Contrast
          bg='900'
          className='relative isolate flex flex-col gap-10 overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32'
        >
          <Contrast
            text='white'
            className='max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl xl:max-w-none xl:flex-auto'
          >
            Get notified when we’re launching.
          </Contrast>
          <form className='w-full max-w-md'>
            <div className='flex gap-x-4'>
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
                className={'flex-auto'}
                placeholder='Enter your email'
              />
              <Contrast
                as='button'
                bg='white'
                text='900'
                className='flex-none rounded-md  px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Notify me
              </Contrast>
            </div>
            <Contrast
              as='p'
              text='300'
              className='mt-4 text-sm leading-6'
            >
              We care about your data. Read our{' '}
              <Contrast
                as='a'
                text='white'
                href='#'
                className='font-semibold'
              >
                privacy&nbsp;policy
              </Contrast>
              .
            </Contrast>
          </form>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#7775D6' />
                <stop
                  offset={1}
                  stopColor='#E935C1'
                  stopOpacity={0}
                />
              </radialGradient>
            </defs>
          </svg>
        </Contrast>
      </div>
    </Contrast>
  );
};
