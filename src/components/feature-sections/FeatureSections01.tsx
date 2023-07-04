/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections01: FC<FeatureSectionsProps> = ({
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
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              {title && (
                <h2 className='text-base font-semibold leading-7 text-primary-600'>
                  {title}
                </h2>
              )}
              {subTitle && (
                <p className='mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl'>
                  {subTitle}
                </p>
              )}
              {description && (
                <p className='mt-6 text-lg leading-8 text-neutral-600'>
                  {description}
                </p>
              )}
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className='relative pl-9'
                  >
                    <dt className='inline font-semibold text-secondary-900'>
                      {feature.icon && (
                        <feature.icon
                          className='absolute left-1 top-1 h-5 w-5 text-primary-600'
                          aria-hidden='true'
                        />
                      )}

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
          {backgroundImage && (
            <img
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-secondary-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
              width={2432}
              height={1442}
              {...backgroundImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export { FeatureSections01 };
