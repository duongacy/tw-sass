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
export const StatsSection4: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-neutral-900 py-24 sm:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Trusted by creators worldwide
            </h2>
            <p className='text-neutral-300 mt-4 text-lg leading-8'>
              Lorem ipsum dolor sit amet consect adipisicing
              possimus.
            </p>
          </div>
          <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='flex flex-col bg-white/5 p-8'
              >
                <dt className='text-neutral-300 text-sm font-semibold leading-6'>
                  {stat.name}
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-white'>
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
