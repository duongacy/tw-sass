import Link from 'next/link';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type Variant = 'solid' | 'outline';
type Color = 'secondary' | 'primary' | 'white';
type BaseStyles = Record<Variant, string>;
type VariantStyles = Record<Variant, Record<Color, string>>;

const baseStyles: BaseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles: VariantStyles = {
  solid: {
    secondary:
      'bg-secondary-900 text-white hover:bg-secondary-700 hover:text-secondary-100 active:bg-secondary-800 active:text-secondary-300 focus-visible:outline-secondary-900',
    primary:
      'bg-primary-600 text-white hover:text-secondary-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600',
    white:
      'bg-white text-secondary-900 hover:bg-primary-50 active:bg-primary-200 active:text-secondary-600 focus-visible:outline-white',
  },
  outline: {
    secondary:
      'ring-secondary-200 text-secondary-700 hover:text-secondary-900 hover:ring-secondary-300 active:bg-secondary-100 active:text-secondary-600 focus-visible:outline-primary-600 focus-visible:ring-secondary-300',
    white:
      'ring-secondary-700 text-white hover:ring-secondary-500 active:ring-secondary-700 active:text-secondary-400 focus-visible:outline-white',
    primary: '',
  },
};

export interface ButtonProps extends Record<any, any> {
  variant?: Variant;
  color?: Color;
  className?: string;
  href?: string;
  children?: ReactNode;
}
export const Button: FC<ButtonProps> = ({
  variant = 'solid',
  color = 'secondary',
  className = '',
  href,
  ...props
}) => {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};
