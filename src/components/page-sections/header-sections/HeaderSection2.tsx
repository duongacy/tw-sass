import { FC } from 'react';
import { HeaderSectionProps } from './types';

export const HeaderSection2: FC<HeaderSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white px-6 py-24 sm:py-32 lg:px-8 ${className}`}
      {...props}
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl'>
          Support center
        </h2>
        <p className='mt-6 text-lg leading-8 text-neutral-600'>
          Anim aute id magna aliqua ad ad non deserunt sunt.
          Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>
  );
};
