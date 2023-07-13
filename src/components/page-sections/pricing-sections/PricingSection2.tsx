import { FC } from 'react';
import { PricingSectionProps } from './types';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
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
    priceMonthly: '$32',
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
    priceMonthly: '$48',
    description:
      'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export const PricingSection2: FC<PricingSectionProps> = ({
  className = '',
  ...props
}) => {
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
          Distinctio et nulla eum soluta et neque labore
          quibusdam. Saepe et quasi iusto modi velit ut non
          voluptas in. Explicabo id ut laborum.
        </p>
        <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'lg:z-10 lg:rounded-b-none'
                  : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1
                  ? 'lg:rounded-l-none'
                  : '',
                'ring-neutral-200 flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 xl:p-10'
              )}
            >
              <div>
                <div className='flex items-center justify-between gap-x-4'>
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
                  {tier.mostPopular ? (
                    <p className='bg-primary-600/10 text-primary-600 rounded-full px-2.5 py-1 text-xs font-semibold leading-5'>
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className='text-neutral-600 mt-4 text-sm leading-6'>
                  {tier.description}
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-neutral-900 text-4xl font-bold tracking-tight'>
                    {tier.priceMonthly}
                  </span>
                  <span className='text-neutral-600 text-sm font-semibold leading-6'>
                    /month
                  </span>
                </p>
                <ul
                  role='list'
                  className='text-neutral-600 mt-8 space-y-3 text-sm leading-6'
                >
                  {tier.features.map((feature) => (
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
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-sm'
                    : 'text-primary-600 ring-primary-200 hover:ring-primary-300 ring-1 ring-inset',
                  'focus-visible:outline-primary-600 mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
