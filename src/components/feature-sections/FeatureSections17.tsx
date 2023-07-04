/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */

import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections17: FC<FeatureSectionsProps> = ({
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
        <div className='mx-auto max-w-2xl lg:mx-0'>
          {title && (
            <h2 className='text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
              {title}
            </h2>
          )}
          {description && (
            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              {description}
            </p>
          )}
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className='font-semibold text-neutral-900'>
                {feature.name}
              </dt>
              <dd className='mt-1 text-neutral-600'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
export { FeatureSections17 };
