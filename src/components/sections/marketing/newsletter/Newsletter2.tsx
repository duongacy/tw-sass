/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { NewsletterProps } from './types';
import { Button } from '@/components/forms/Button';
import { Input } from '@/components/forms/Input';
import { Contrast } from '@/components/contrast/Contrast';

export const Newsletter2: FC<NewsletterProps> = ({
  className,
  ...props
}) => {
  return (
    <Contrast
      bg='100'
      className={`sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
        <Contrast
          as={'div'}
          text='900'
          className='max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:col-span-7'
        >
          <h2 className='inline sm:block lg:inline xl:block'>
            Want product news and updates?
          </h2>
          <p className='inline sm:block lg:inline xl:block'>
            Sign up for our newsletter.
          </p>
        </Contrast>
        <form className='w-full max-w-md lg:col-span-5 lg:pt-2'>
          <div className='flex gap-x-4'>
            <Input
              label='Email address'
              labelClassName='sr-only'
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='flex-auto'
              placeholder='Enter your email'
            />
            <Button>Subscribe</Button>
          </div>
          <Contrast
            as='p'
            text='900'
            className='mt-4 text-sm leading-6'
          >
            We care about your data. Read our{' '}
            <a
              href='#'
              className='font-semibold text-primary-600 hover:text-primary-500'
            >
              privacy&nbsp;policy
            </a>
            .
          </Contrast>
        </form>
      </div>
    </Contrast>
  );
};
