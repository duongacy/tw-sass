/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections05: FC<FeatureSectionsProps> = ({
  title,
  subTitle,
  description,
  className = '',
  features,
  // eslint-disable-next-line no-unused-vars
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
        <div className='mx-auto max-w-2xl lg:text-center'>
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
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col'
              >
                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-white'>
                  <feature.icon
                    className='h-5 w-5 flex-none text-primary-400'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-300'>
                  <p className='flex-auto'>
                    {feature.description}
                  </p>
                  <p className='mt-6'>
                    <a
                      href={feature?.href}
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
export { FeatureSections05 };
