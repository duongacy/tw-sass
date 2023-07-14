import { FC } from 'react';
import { StatsSectionProps } from './types';

const stats = [
  {
    id: 1,
    name: 'Creators on the platform',
    value: '8,000+',
  },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
];
export const StatsSection3: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white py-24 sm:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='text-center'>
            <h2 className='text-neutral-900 text-3xl font-bold tracking-tight sm:text-4xl'>
              Trusted by creators worldwide
            </h2>
            <p className='text-neutral-600 mt-4 text-lg leading-8'>
              Lorem ipsum dolor sit amet consect adipisicing
              possimus.
            </p>
          </div>
          <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='bg-neutral-400/5 flex flex-col p-8'
              >
                <dt className='text-neutral-600 text-sm font-semibold leading-6'>
                  {stat.name}
                </dt>
                <dd className='text-neutral-900 order-first text-3xl font-semibold tracking-tight'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
