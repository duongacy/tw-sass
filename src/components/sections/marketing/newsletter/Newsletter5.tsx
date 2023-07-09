/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { NewsletterProps } from './types';
import { Contrast } from '@/components/contrast/Contrast';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/forms/Button';

export const Newsletter5: FC<NewsletterProps> = ({
  className,
  ...props
}) => {
  return (
    <Contrast
      bg='100'
      className={`py-16 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <Contrast
          text='900'
          className='max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl'
        >
          <h2 className='inline sm:block'>
            Want product news and updates?
          </h2>{' '}
          <p className='inline sm:block'>
            Sign up for our newsletter.
          </p>
        </Contrast>
        <form className='mt-10 max-w-md'>
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
