/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';
import { CheckIcon } from '@heroicons/react/20/solid';

const FeatureSections16: FC<FeatureSectionsProps> = ({
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
      className={'bg-white py-24 sm:py-32 ' + className}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <div>
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
              <p className='mt-6 text-base leading-7 text-neutral-600'>
                {description}
              </p>
            )}
          </div>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-neutral-600 sm:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='relative pl-9'
              >
                <dt className='font-semibold text-neutral-900'>
                  <CheckIcon
                    className='absolute left-0 top-1 h-5 w-5 text-primary-500'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-2'>
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
export { FeatureSections16 };
