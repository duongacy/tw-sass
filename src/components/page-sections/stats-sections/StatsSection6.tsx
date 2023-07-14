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
export const StatsSection6: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`relative bg-white ${className}`}
      {...props}
    >
      <img
        className='bg-neutral-50 h-56 w-full object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2'
        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80'
        alt=''
      />
      <div className='mx-auto grid max-w-7xl lg:grid-cols-2'>
        <div className='px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl lg:mr-0 lg:max-w-lg'>
            <h2 className='text-primary-600 text-base font-semibold leading-8'>
              Our track record
            </h2>
            <p className='text-neutral-900 mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
              Trusted by thousands of
              creators&nbsp;worldwide
            </p>
            <p className='text-neutral-600 mt-6 text-lg leading-8'>
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className='mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16'>
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className='border-neutral-900/10 flex flex-col gap-y-3 border-l pl-6'
                >
                  <dt className='text-neutral-600 text-sm leading-6'>
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
    </div>
  );
};
