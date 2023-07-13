import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { FC, useState } from 'react';
import { PricingSectionProps } from './types';

const frequencies = [
  {
    value: 'monthly',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    value: 'annually',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description:
      'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
    ],
    mostPopular: false,
  },
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description:
      'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$60', annually: '$576' },
    description:
      'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$90', annually: '$864' },
    description:
      'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const PricingSection7: FC<PricingSectionProps> = ({
  className = '',
  ...props
}) => {
  const [frequency, setFrequency] = useState(
    frequencies[0]
  );
  return (
    <div
      className={'bg-white py-24 sm:py-32 ' + className}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-primary-600 text-base font-semibold leading-7'>
            Pricing
          </h2>
          <p className='text-neutral-900 mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className='text-neutral-600 mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>
          Choose an affordable plan that’s packed with the
          best features for engaging your audience, creating
          customer loyalty, and driving sales.
        </p>
        <div className='mt-16 flex justify-center'>
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className='ring-neutral-200 grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset'
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
        <div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4'>
          {tiers.map((tier: any) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-primary-600 ring-2'
                  : 'ring-neutral-200 ring-1',
                'rounded-3xl p-8'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'text-primary-600'
                    : 'text-neutral-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className='text-neutral-600 mt-4 text-sm leading-6'>
                {tier.description}
              </p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-neutral-900 text-4xl font-bold tracking-tight'>
                  {tier.price[frequency.value]}
                </span>
                <span className='text-neutral-600 text-sm font-semibold leading-6'>
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-sm'
                    : 'text-primary-600 ring-primary-200 hover:ring-primary-300 ring-1 ring-inset',
                  'focus-visible:outline-primary-600 mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul
                role='list'
                className='text-neutral-600 mt-8 space-y-3 text-sm leading-6'
              >
                {tier.features.map((feature: any) => (
                  <li
                    key={feature}
                    className='flex gap-x-3'
                  >
                    <CheckIcon
                      className='text-primary-600 h-6 w-5 flex-none'
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
