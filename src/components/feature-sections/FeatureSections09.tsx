/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections09: FC<FeatureSectionsProps> = ({
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
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {title}
            </h2>
          )}
          {description && (
            <p className='mt-6 text-lg leading-8 text-neutral-300'>
              {description}
            </p>
          )}
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col'
              >
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-300'>
                  <p className='flex-auto'>
                    {feature.description}
                  </p>
                  <p className='mt-6'>
                    <a
                      href={feature.href}
                      className='text-sm font-semibold leading-6 text-primary-400'
                    >
                      Learn more{' '}
                      <span aria-hidden='true'>→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export { FeatureSections09 };
