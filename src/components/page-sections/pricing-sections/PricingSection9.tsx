import { FC } from 'react';
import { PricingSectionProps } from './types';
import { Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { MinusIcon } from '@heroicons/react/24/outline';
const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description:
      'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$29',
    description:
      'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$59',
    description:
      'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
  },
];
const sections = [
  {
    name: 'Features',
    features: [
      {
        name: 'Integrations',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Shared links',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Importing and exporting',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Team members',
        tiers: {
          Essential: 'Up to 20 users',
          Premium: 'Up to 50 users',
        },
      },
    ],
  },
  {
    name: 'Reporting',
    features: [
      {
        name: 'Advanced analytics',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Basic reports',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Professional reports',
        tiers: { Premium: true },
      },
      {
        name: 'Custom report builder',
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: 'Support',
    features: [
      {
        name: '24/7 online support',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Quarterly product workshops',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Priority phone support',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: '1:1 onboarding tour',
        tiers: { Premium: true },
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const PricingSection9: FC<PricingSectionProps> = ({
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
            Plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className='text-neutral-600 mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>
          Distinctio et nulla eum soluta et neque labore
          quibusdam. Saepe et quasi iusto modi velit ut non
          voluptas in. Explicabo id ut laborum.
        </p>

        {/* xs to lg */}
        <div className='mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden'>
          {tiers.map((tier: any) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-neutral-400/5 ring-neutral-200 rounded-xl ring-1 ring-inset'
                  : '',
                'p-8'
              )}
            >
              <h3
                id={tier.id}
                className='text-neutral-900 text-sm font-semibold leading-6'
              >
                {tier.name}
              </h3>
              <p className='text-neutral-900 mt-2 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold'>
                  {tier.priceMonthly}
                </span>
                <span className='text-sm font-semibold'>
                  /month
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary-600 hover:bg-primary-500 text-white'
                    : 'text-primary-600 ring-primary-200 hover:ring-primary-300 ring-1 ring-inset',
                  'focus-visible:outline-primary-600 mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul
                role='list'
                className='text-neutral-900 mt-10 space-y-4 text-sm leading-6'
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role='list' className='space-y-4'>
                      {section.features.map(
                        (feature: any) =>
                          feature.tiers[tier.name] ? (
                            <li
                              key={feature.name}
                              className='flex gap-x-3'
                            >
                              <CheckIcon
                                className='text-primary-600 h-6 w-5 flex-none'
                                aria-hidden='true'
                              />
                              <span>
                                {feature.name}{' '}
                                {typeof feature.tiers[
                                  tier.name
                                ] === 'string' ? (
                                  <span className='text-neutral-500 text-sm leading-6'>
                                    (
                                    {
                                      feature.tiers[
                                        tier.name
                                      ]
                                    }
                                    )
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className='isolate mt-20 hidden lg:block'>
          <div className='relative -mx-8'>
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className='absolute inset-x-4 inset-y-0 -z-10 flex'>
                <div
                  className='flex w-1/4 px-4'
                  aria-hidden='true'
                  style={{
                    marginLeft: `${
                      (tiers.findIndex(
                        (tier) => tier.mostPopular
                      ) +
                        1) *
                      25
                    }%`,
                  }}
                >
                  <div className='border-neutral-900/10 bg-neutral-400/5 w-full rounded-t-xl border-x border-t' />
                </div>
              </div>
            ) : null}
            <table className='w-full table-fixed border-separate border-spacing-x-8 text-left'>
              <caption className='sr-only'>
                Pricing plan comparison
              </caption>
              <colgroup>
                <col className='w-1/4' />
                <col className='w-1/4' />
                <col className='w-1/4' />
                <col className='w-1/4' />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier: any) => (
                    <th
                      key={tier.id}
                      scope='col'
                      className='px-6 pt-6 xl:px-8 xl:pt-8'
                    >
                      <div className='text-neutral-900 text-sm font-semibold leading-7'>
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    <span className='sr-only'>Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td
                      key={tier.id}
                      className='px-6 pt-2 xl:px-8'
                    >
                      <div className='text-neutral-900 flex items-baseline gap-x-1'>
                        <span className='text-4xl font-bold'>
                          {tier.priceMonthly}
                        </span>
                        <span className='text-sm font-semibold leading-6'>
                          /month
                        </span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-primary-600 hover:bg-primary-500 text-white'
                            : 'text-primary-600 ring-primary-200 hover:ring-primary-300 ring-1 ring-inset',
                          'focus-visible:outline-primary-600 mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map(
                  (section: any, sectionIdx: number) => (
                    <Fragment key={section.name}>
                      <tr>
                        <th
                          scope='colgroup'
                          colSpan={4}
                          className={classNames(
                            sectionIdx === 0
                              ? 'pt-8'
                              : 'pt-16',
                            'text-neutral-900 pb-4 text-sm font-semibold leading-6'
                          )}
                        >
                          {section.name}
                          <div className='bg-neutral-900/10 absolute inset-x-8 mt-4 h-px' />
                        </th>
                      </tr>
                      {section.features.map(
                        (feature: any) => (
                          <tr key={feature.name}>
                            <th
                              scope='row'
                              className='text-neutral-900 py-4 text-sm font-normal leading-6'
                            >
                              {feature.name}
                              <div className='bg-neutral-900/5 absolute inset-x-8 mt-4 h-px' />
                            </th>
                            {tiers.map((tier: any) => (
                              <td
                                key={tier.id}
                                className='px-6 py-4 xl:px-8'
                              >
                                {typeof feature.tiers[
                                  tier.name
                                ] === 'string' ? (
                                  <div className='text-neutral-500 text-center text-sm leading-6'>
                                    {
                                      feature.tiers[
                                        tier.name
                                      ]
                                    }
                                  </div>
                                ) : (
                                  <>
                                    {feature.tiers[
                                      tier.name
                                    ] === true ? (
                                      <CheckIcon
                                        className='text-primary-600 mx-auto h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    ) : (
                                      <MinusIcon
                                        className='text-neutral-400 mx-auto h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    )}

                                    <span className='sr-only'>
                                      {feature.tiers[
                                        tier.name
                                      ] === true
                                        ? 'Included'
                                        : 'Not included'}{' '}
                                      in {tier.name}
                                    </span>
                                  </>
                                )}
                              </td>
                            ))}
                          </tr>
                        )
                      )}
                    </Fragment>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
