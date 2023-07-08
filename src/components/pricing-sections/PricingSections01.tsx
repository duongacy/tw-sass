import { CheckIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';
import { PricingSectionProps } from './types';

const PricingSections01: FC<PricingSectionProps> = ({
  title,
  description,
  tiers,
}) => {
  const tier = tiers[0];
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mt-6 text-lg leading-8 text-neutral-600'>
            {description}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-neutral-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className='p-8 sm:p-10 lg:flex-auto'>
            <h3 className='text-2xl font-bold tracking-tight text-neutral-900'>
              {tier.name}
            </h3>
            <p className='mt-6 text-base leading-7 text-neutral-600'>
              {tier.description}
            </p>
            <div className='mt-10 flex items-center gap-x-4'>
              <h4 className='flex-none text-sm font-semibold leading-6 text-primary-600'>
                What’s included
              </h4>
              <div className='h-px flex-auto bg-neutral-100' />
            </div>
            <ul
              role='list'
              className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-neutral-600 sm:grid-cols-2 sm:gap-6'
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className='h-6 w-5 flex-none text-primary-600'
                    aria-hidden='true'
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
            <div className='rounded-2xl bg-neutral-50 py-10 text-center ring-1 ring-inset ring-neutral-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
              <div className='mx-auto max-w-xs px-8'>
                <p className='text-base font-semibold text-neutral-600'>
                  {tier.slogan}
                </p>
                <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                  <span className='text-5xl font-bold tracking-tight text-neutral-900'>
                    {tier.price.monthly}
                  </span>
                  <span className='text-sm font-semibold leading-6 tracking-wide text-neutral-600'>
                    USD
                  </span>
                </p>
                <a
                  href='#'
                  className='mt-10 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                >
                  {tier.cto}
                </a>
                <p className='mt-6 text-xs leading-5 text-neutral-600'>
                  Invoices and receipts available for easy
                  company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PricingSections01 };
