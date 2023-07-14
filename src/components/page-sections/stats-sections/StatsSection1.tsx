import { FC } from 'react';
import { StatsSectionProps } from './types';

const stats = [
  {
    id: 1,
    name: 'Transactions every 24 hours',
    value: '44 million',
  },
  {
    id: 2,
    name: 'Assets under holding',
    value: '$119 trillion',
  },
  { id: 3, name: 'New users annually', value: '46,000' },
];
export const StatsSection1: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white py-24 sm:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
              <dt className='text-neutral-600 text-base leading-7'>
                {stat.name}
              </dt>
              <dd className='text-neutral-900 order-first text-3xl font-semibold tracking-tight sm:text-5xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
