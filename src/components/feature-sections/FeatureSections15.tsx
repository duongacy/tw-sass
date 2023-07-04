/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections15: FC<FeatureSectionsProps> = ({
  title,
  subTitle,
  description,
  className = '',
  features,
  backgroundImage,
  ...props
}) => {
  return (
    <div
      className={
        'overflow-hidden bg-white py-24 sm:py-32 ' +
        className
      }
      {...props}
    >
      <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='px-6 md:px-0 lg:pr-4 lg:pt-4'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-primary-600'>
                Deploy faster
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
                A better workflow
              </p>
              <p className='mt-6 text-lg leading-8 text-neutral-600'>
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className='relative pl-9'
                  >
                    <dt className='inline font-semibold text-neutral-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-primary-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='sm:px-6 lg:px-0'>
            <div className='relative isolate overflow-hidden bg-primary-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none'>
              <div
                className='absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-primary-100 opacity-20 ring-1 ring-inset ring-white'
                aria-hidden='true'
              />
              <div className='mx-auto max-w-2xl sm:mx-0 sm:max-w-none'>
                x
                <div className='w-screen overflow-hidden rounded-tl-xl bg-neutral-900 ring-1 ring-white/10'>
                  <div className='flex bg-neutral-800/40 ring-1 ring-white/5'>
                    <div className='-mb-px flex text-sm font-medium leading-6 text-neutral-400'>
                      <div className='border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white'>
                        NotificationSetting.jsx
                      </div>
                      <div className='border-r border-neutral-600/10 px-4 py-2'>
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className='px-6 pb-14 pt-6'>
                    {/* Your code example */}
                  </div>
                </div>
              </div>
              <div
                className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { FeatureSections15 };