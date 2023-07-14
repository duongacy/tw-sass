import { FC } from 'react';
import { StatsSectionProps } from './types';

const stats = [
  {
    label: 'Transactions every 24 hours',
    value: '44 million',
  },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
];
export const StatsSection10: FC<StatsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <h2 className='text-neutral-900 text-3xl font-bold tracking-tight sm:text-4xl'>
            Our mission
          </h2>
          <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
            <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
              <p className='text-neutral-600 text-xl leading-8'>
                Aliquet nec orci mattis amet quisque
                ullamcorper neque, nibh sem. At arcu, sit
                dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla
                orci at in viverra scelerisque eget.
                Eleifend egestas fringilla sapien.
              </p>
              <p className='text-neutral-700 mt-10 max-w-xl text-base leading-7'>
                Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id. Id
                dolor praesent donec est. Odio penatibus
                risus viverra tellus varius sit neque erat
                velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim.
                Mattis mauris semper sed amet vitae sed
                turpis id.
              </p>
            </div>
            <div className='lg:flex lg:flex-auto lg:justify-center'>
              <dl className='w-64 space-y-8 xl:w-80'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='flex flex-col-reverse gap-y-4'
                  >
                    <dt className='text-neutral-600 text-base leading-7'>
                      {stat.label}
                    </dt>
                    <dd className='text-neutral-900 text-5xl font-semibold tracking-tight'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
