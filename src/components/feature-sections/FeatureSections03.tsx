/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FeatureSectionsProps } from './types';

const FeatureSections03: FC<FeatureSectionsProps> = ({
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
        <div className='mx-auto max-w-2xl sm:text-center'>
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
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <img
            alt='App screenshot'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
            width={2432}
            height={1442}
            {...backgroundImage}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-neutral-900 pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-neutral-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
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
export { FeatureSections03 };
