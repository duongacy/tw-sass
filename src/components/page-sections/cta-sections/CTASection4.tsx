import { FC } from 'react';
import { CTASectionProps } from './types';

export const CTASection4: FC<CTASectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={`bg-white ${className}`} {...props}>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600'>
            Incididunt sint fugiat pariatur cupidatat
            consectetur sit cillum anim id veniam aliqua
            proident excepteur commodo do ea.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
            >
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-neutral-900'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
