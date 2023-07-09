/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { NewsletterProps } from './types';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/forms/Button';

export const Newsletter4: FC<NewsletterProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-primary-700 py-16 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
        <div className='max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7'>
          <h2 className='inline sm:block lg:inline xl:block'>
            Want product news and updates?
          </h2>{' '}
          <p className='inline sm:block lg:inline xl:block'>
            Sign up for our newsletter.
          </p>
        </div>
        <form className='w-full max-w-md lg:col-span-5 lg:pt-2'>
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
              className='flex-auto'
              placeholder='Enter your email'
            />
            <Button
              type='submit'
              className='bg-white !text-primary-600'
            >
              Subscribe
            </Button>
          </div>
          <p className='mt-4 text-sm leading-6 text-neutral-300'>
            We care about your data. Read our{' '}
            <a
              href='#'
              className='font-semibold text-white hover:text-primary-50'
            >
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};
