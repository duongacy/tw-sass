import {
  CheckCircleIcon,
  //   CheckIcon,
} from '@heroicons/react/20/solid';
import { FC } from 'react';
import { PricingSectionProps } from './types';

const PricingSections03: FC<PricingSectionProps> = ({
  subTitle,
  title,
  description,
  tiers,
}) => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-primary-600'>
            {subTitle}
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl'>
            {title}
          </p>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-center'>
          {description}
        </p>
        <div className='mt-20 flow-root'>
          <div className='isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-neutral-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4'>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className='pt-16 lg:px-8 lg:pt-0 xl:px-14'
              >
                <h3
                  id={tier.id}
                  className='text-base font-semibold leading-7 text-neutral-900'
                >
                  {tier.name}
                </h3>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-5xl font-bold tracking-tight text-neutral-900'>
                    {tier.price.monthly}
                  </span>
                  <span className='text-sm font-semibold leading-6 text-neutral-600'>
                    /month
                  </span>
                </p>
                <p className='mt-3 text-sm leading-6 text-neutral-500'>
                  {tier.price.anually} per month if paid
                  annually
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className='mt-10 block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                >
                  {tier.cto}
                </a>
                <p className='mt-10 text-sm font-semibold leading-6 text-neutral-900'>
                  {tier.description}
                </p>
                <ul
                  role='list'
                  className='mt-6 space-y-3 text-sm leading-6 text-neutral-600'
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex gap-x-3'
                    >
                      <CheckCircleIcon
                        className='h-6 w-5 flex-none text-primary-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PricingSections03 };
