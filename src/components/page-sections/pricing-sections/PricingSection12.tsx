import { CheckIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';
import { PricingSectionProps } from './types';

const tiers = [
  {
    name: 'Personal',
    id: 'tier-personal',
    href: '#',
    priceMonthly: '$39',
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Audience segmentation',
      'Advanced analytics',
      'Email support',
      'Marketing automations',
    ],
    featured: true,
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$99',
    description:
      'A plan that scales with your rapidly growing business.',
    features: [
      'Priority support',
      'Single sign-on',
      'Enterprise integrations',
      'Custom reporting tools',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const PricingSection12: FC<PricingSectionProps> = ({
  className = '',
  ...props
}) => {
  return (
    <div
      className={
        'relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 ' +
        className
      }
      {...props}
    >
      <div
        className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
        <h2 className='text-primary-600 text-base font-semibold leading-7'>
          Pricing
        </h2>
        <p className='text-neutral-900 mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
          The right price for you, whoever you are
        </p>
      </div>
      <p className='text-neutral-600 mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>
        Qui iusto aut est earum eos quae. Eligendi est at
        nam aliquid ad quo reprehenderit in aliquid fugiat
        dolorum voluptatibus.
      </p>
      <div className='mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2'>
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-white shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'ring-neutral-900/10 rounded-3xl p-8 ring-1 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className='text-primary-600 text-base font-semibold leading-7'
            >
              {tier.name}
            </h3>
            <p className='mt-4 flex items-baseline gap-x-2'>
              <span className='text-neutral-900 text-5xl font-bold tracking-tight'>
                {tier.priceMonthly}
              </span>
              <span className='text-neutral-500 text-base'>
                /month
              </span>
            </p>
            <p className='text-neutral-600 mt-6 text-base leading-7'>
              {tier.description}
            </p>
            <ul
              role='list'
              className='text-neutral-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10'
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className='text-primary-600 h-6 w-5 flex-none'
                    aria-hidden='true'
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-primary-600 hover:bg-primary-500 text-white shadow'
                  : 'text-primary-600 ring-primary-200 hover:ring-primary-300 ring-1 ring-inset',
                'focus-visible:outline-primary-600 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
