import { HeroSectionProps } from '@/components/marketing/page-sections/hero-sections/types';
import { FC } from 'react';

export const HeroSection1: FC<HeroSectionProps> = ({
  className,
  ...props
}) => {
  return <div className={`` + className} {...props}></div>;
};
