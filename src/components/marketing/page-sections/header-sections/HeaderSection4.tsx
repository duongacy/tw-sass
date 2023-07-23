import { FC } from 'react';
import { HeaderSectionProps } from './types';

export const HeaderSection4: FC<HeaderSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white py-24 sm:py-32 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <p className='text-pimary-600 text-base font-semibold leading-7'>
            Get the help you need
          </p>
          <h2 className='mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl'>
            Support center
          </h2>
          <p className='mt-6 text-lg leading-8 text-neutral-600'>
            Anim aute id magna aliqua ad ad non deserunt
            sunt. Qui irure qui lorem cupidatat commodo.
            Elit sunt amet fugiat veniam occaecat fugiat
            aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
