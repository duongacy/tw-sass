/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections18: FC<FeatureSectionsProps> = ({
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
        'bg-neutral-900 py-24 sm:py-32 ' + className
      }
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          {title && (
            <h2 className='text-base font-semibold leading-7 text-primary-400'>
              {title}
            </h2>
          )}
          {subTitle && (
            <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {subTitle}
            </p>
          )}
          {description && (
            <p className='mt-6 text-lg leading-8 text-neutral-300'>
              {description}
            </p>
          )}
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-neutral-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='relative pl-9'
            >
              <dt className='inline font-semibold text-white'>
                <feature.icon
                  className='absolute left-1 top-1 h-5 w-5 text-primary-500'
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
  );
};
export { FeatureSections18 };
