import {
  CheckIcon,
  //   CheckIcon,
} from '@heroicons/react/20/solid';
import { FC, useState } from 'react';
import { PriceProps, PricingSectionProps } from './types';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '@/pages/pricing-components';

const PricingSections06: FC<PricingSectionProps> = ({
  subTitle,
  title,
  frequencies,
  description,
  tiers,
}) => {
  const [frequency, setFrequency] = useState(
    frequencies[0]
  );

  return (
    <div className='bg-neutral-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-primary-600'>
            {subTitle}
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            {title}
          </p>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-300'>
          {description}
        </p>
        <div className='mt-16 flex justify-center'>
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className='grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white'
          >
            <RadioGroup.Label className='sr-only'>
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-indigo-500 bg-white/5 ring-2'
                  : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className='flex items-center justify-between gap-x-4'>
                <h3
                  id={tier.id}
                  className={
                    'text-lg font-semibold leading-8 text-white'
                  }
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className='rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-500'>
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className='mt-4 text-sm leading-6 text-neutral-300'>
                {tier.description}
              </p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight text-white'>
                  {
                    tier.price[
                      frequency.value as keyof PriceProps
                    ]
                  }
                </span>
                <span className='text-sm font-semibold leading-6 text-neutral-300'>
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary-500 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-primary-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul
                role='list'
                className='mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10'
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex gap-x-3'
                  >
                    <CheckIcon
                      className='h-6 w-5 flex-none text-white'
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
  );
};

export { PricingSections06 };
