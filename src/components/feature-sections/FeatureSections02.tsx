/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections02: FC<FeatureSectionsProps> = ({
  title,
  subTitle,
  description,
  className = '',
  features,
  // eslint-disable-next-line no-unused-vars
  backgroundImage: pv,
  ...props
}) => {
  return (
    <div
      className={'bg-white py-24 sm:py-32 ' + className}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          {title && (
            <h2 className='text-base font-semibold leading-7 text-primary-600'>
              {title}
            </h2>
          )}
          {subTitle && (
            <p className='mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
              {subTitle}
            </p>
          )}
          {description && (
            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              {description}
            </p>
          )}
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='relative pl-16'
              >
                <dt className='text-base font-semibold leading-7 text-neutral-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-neutral-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export { FeatureSections02 };
