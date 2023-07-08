import { classNames } from '@/pages/pricing-components';
import { RadioGroup } from '@headlessui/react';
import {
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { FC, useState } from 'react';
import { PriceProps, PricingSectionProps } from './types';

const PricingSections11: FC<PricingSectionProps> = ({
  title,
  description,
  sections = [],
  tiers,
  frequencies,
}) => {
  const [frequency, setFrequency] = useState(
    frequencies[0]
  );
  return (
    <div className='isolate overflow-hidden'>
      <div className='flow-root bg-neutral-900 pb-16 pt-24 sm:pt-32 lg:pb-0'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='relative z-10'>
            <h2 className='mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white'>
              {title}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60'>
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
                        checked ? 'bg-primary-500' : '',
                        'cursor-pointer rounded-full px-2.5 py-1'
                      )
                    }
                  >
                    <span>{option.label}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className='relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3'>
            <svg
              viewBox='0 0 1208 1024'
              aria-hidden='true'
              className='absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0'
            >
              <ellipse
                cx={604}
                cy={512}
                fill='url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)'
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id='d25c25d4-6d43-4bf9-b9ac-1842a30a4867'>
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
            <div
              className='hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-neutral-800/80 lg:ring-1 lg:ring-white/10'
              aria-hidden='true'
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? 'z-10 bg-white shadow-xl ring-1 ring-neutral-900/10'
                    : 'bg-neutral-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                  'relative rounded-2xl'
                )}
              >
                <div className='p-8 lg:pt-12 xl:p-10 xl:pt-14'>
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'text-neutral-900'
                        : 'text-white',
                      'text-sm font-semibold leading-6'
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch'>
                    <div className='mt-2 flex items-center gap-x-4'>
                      <p
                        className={classNames(
                          tier.featured
                            ? 'text-neutral-900'
                            : 'text-white',
                          'text-4xl font-bold tracking-tight'
                        )}
                      >
                        {
                          tier.price[
                            frequency.value as keyof PriceProps
                          ]
                        }
                      </p>
                      <div className='text-sm leading-5'>
                        <p
                          className={
                            tier.featured
                              ? 'text-neutral-900'
                              : 'text-white'
                          }
                        >
                          USD
                        </p>
                        <p
                          className={
                            tier.featured
                              ? 'text-neutral-500'
                              : 'text-neutral-400'
                          }
                        >{`Billed ${frequency.value}`}</p>
                      </div>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.featured
                          ? 'bg-primary-600 shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                          : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                        'rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                      )}
                    >
                      Buy this plan
                    </a>
                  </div>
                  <div className='mt-8 flow-root sm:mt-10'>
                    <ul
                      role='list'
                      className={classNames(
                        tier.featured
                          ? 'divide-neutral-900/5 border-neutral-900/5 text-neutral-600'
                          : 'divide-white/5 border-white/5 text-white',
                        '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0'
                      )}
                    >
                      {tier.features.map((mainFeature) => (
                        <li
                          key={mainFeature}
                          className='flex gap-x-3 py-2'
                        >
                          <CheckIcon
                            className={classNames(
                              tier.featured
                                ? 'text-primary-600'
                                : 'text-neutral-500',
                              'h-6 w-5 flex-none'
                            )}
                            aria-hidden='true'
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative bg-neutral-50 lg:pt-14'>
        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
          {/* Feature comparison (up to lg) */}
          <section
            aria-labelledby='mobile-comparison-heading'
            className='lg:hidden'
          >
            <h2
              id='mobile-comparison-heading'
              className='sr-only'
            >
              Feature comparison
            </h2>

            <div className='mx-auto max-w-2xl space-y-16'>
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className='border-t border-neutral-900/10'
                >
                  <div
                    className={classNames(
                      tier.featured
                        ? 'border-primary-600'
                        : 'border-transparent',
                      '-mt-px w-72 border-t-2 pt-10 md:w-80'
                    )}
                  >
                    <h3
                      className={classNames(
                        tier.featured
                          ? 'text-primary-600'
                          : 'text-neutral-900',
                        'text-sm font-semibold leading-6'
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p className='mt-1 text-sm leading-6 text-neutral-600'>
                      {tier.description}
                    </p>
                  </div>

                  <div className='mt-10 space-y-10'>
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className='text-sm font-semibold leading-6 text-neutral-900'>
                          {section.name}
                        </h4>
                        <div className='relative mt-6'>
                          {/* Fake card background */}
                          <div
                            aria-hidden='true'
                            className='absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block'
                          />

                          <div
                            className={classNames(
                              tier.featured
                                ? 'ring-2 ring-primary-600'
                                : 'ring-1 ring-neutral-900/10',
                              'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0'
                            )}
                          >
                            <dl className='divide-y divide-neutral-200 text-sm leading-6'>
                              {section.features.map(
                                (feature) => (
                                  <div
                                    key={feature.name}
                                    className='flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0'
                                  >
                                    <dt className='pr-4 text-neutral-600'>
                                      {feature.name}
                                    </dt>
                                    <dd className='flex items-center justify-end sm:justify-center sm:px-4'>
                                      {typeof feature.tiers[
                                        tier.name
                                      ] === 'string' ? (
                                        <span
                                          className={
                                            tier.featured
                                              ? 'font-semibold text-primary-600'
                                              : 'text-neutral-900'
                                          }
                                        >
                                          {
                                            feature.tiers[
                                              tier.name
                                            ]
                                          }
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[
                                            tier.name
                                          ] === true ? (
                                            <CheckIcon
                                              className='mx-auto h-5 w-5 text-primary-600'
                                              aria-hidden='true'
                                            />
                                          ) : (
                                            <XMarkIcon
                                              className='mx-auto h-5 w-5 text-neutral-400'
                                              aria-hidden='true'
                                            />
                                          )}

                                          <span className='sr-only'>
                                            {feature.tiers[
                                              tier.name
                                            ] === true
                                              ? 'Yes'
                                              : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </dd>
                                  </div>
                                )
                              )}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden='true'
                            className={classNames(
                              tier.featured
                                ? 'ring-2 ring-primary-600'
                                : 'ring-1 ring-neutral-900/10',
                              'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block'
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section
            aria-labelledby='comparison-heading'
            className='hidden lg:block'
          >
            <h2 id='comparison-heading' className='sr-only'>
              Feature comparison
            </h2>

            <div className='grid grid-cols-4 gap-x-8 border-t border-neutral-900/10 before:block'>
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  aria-hidden='true'
                  className='-mt-px'
                >
                  <div
                    className={classNames(
                      tier.featured
                        ? 'border-primary-600'
                        : 'border-transparent',
                      'border-t-2 pt-10'
                    )}
                  >
                    <p
                      className={classNames(
                        tier.featured
                          ? 'text-primary-600'
                          : 'text-neutral-900',
                        'text-sm font-semibold leading-6'
                      )}
                    >
                      {tier.name}
                    </p>
                    <p className='mt-1 text-sm leading-6 text-neutral-600'>
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='-mt-6 space-y-16'>
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className='text-sm font-semibold leading-6 text-neutral-900'>
                    {section.name}
                  </h3>
                  <div className='relative -mx-8 mt-10'>
                    {/* Fake card backgrounds */}
                    <div
                      className='absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'
                      aria-hidden='true'
                    >
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                      <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                    </div>

                    <table className='relative w-full border-separate border-spacing-x-8'>
                      <thead>
                        <tr className='text-left'>
                          <th scope='col'>
                            <span className='sr-only'>
                              Feature
                            </span>
                          </th>
                          {tiers.map((tier) => (
                            <th key={tier.id} scope='col'>
                              <span className='sr-only'>
                                {tier.name} tier
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map(
                          (feature, featureIdx) => (
                            <tr key={feature.name}>
                              <th
                                scope='row'
                                className='w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-neutral-900'
                              >
                                {feature.name}
                                {featureIdx !==
                                section.features.length -
                                  1 ? (
                                  <div className='absolute inset-x-8 mt-3 h-px bg-neutral-200' />
                                ) : null}
                              </th>
                              {tiers.map((tier) => (
                                <td
                                  key={tier.id}
                                  className='relative w-1/4 px-4 py-0 text-center'
                                >
                                  <span className='relative h-full w-full py-3'>
                                    {typeof feature.tiers[
                                      tier.name
                                    ] === 'string' ? (
                                      <span
                                        className={classNames(
                                          tier.featured
                                            ? 'font-semibold text-primary-600'
                                            : 'text-neutral-900',
                                          'text-sm leading-6'
                                        )}
                                      >
                                        {
                                          feature.tiers[
                                            tier.name
                                          ]
                                        }
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[
                                          tier.name
                                        ] === true ? (
                                          <CheckIcon
                                            className='mx-auto h-5 w-5 text-primary-600'
                                            aria-hidden='true'
                                          />
                                        ) : (
                                          <XMarkIcon
                                            className='mx-auto h-5 w-5 text-neutral-400'
                                            aria-hidden='true'
                                          />
                                        )}

                                        <span className='sr-only'>
                                          {feature.tiers[
                                            tier.name
                                          ] === true
                                            ? 'Yes'
                                            : 'No'}
                                        </span>
                                      </>
                                    )}
                                  </span>
                                </td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div
                      className='pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'
                      aria-hidden='true'
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'ring-2 ring-primary-600'
                              : 'ring-1 ring-neutral-900/10',
                            'rounded-lg'
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export { PricingSections11 };
