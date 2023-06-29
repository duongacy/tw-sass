import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { v4 } from 'uuid';
import { Button } from './Button';
import { Container } from './Container';
import { Logo } from './Logo';
import {
  MobileNavLink,
  NavLink,
  NavLinkProps,
} from './NavLink';

interface NavigationProps {
  navLinks?: NavLinkProps[];
  loginLink?: NavLinkProps;
  homeLink?: NavLinkProps;
}

interface HeaderProps {
  navigationProps: NavigationProps;
}

const headerProps: HeaderProps = {
  navigationProps: {
    navLinks: [
      {
        href: '#features',
        children: 'Features',
      },
      {
        href: '#testimonials',
        children: 'Testimonials',
      },
      {
        href: '#pricing',
        children: 'Pricing',
      },
    ],
    loginLink: {
      href: '/login',
      children: 'Sign in',
    },
    homeLink: {
      href: '#',
      children: <Logo className='h-10 w-auto' />,
    },
  },
};

const MobileNavIcon: FC<{ open: boolean }> = ({ open }) => {
  return (
    <svg
      aria-hidden='true'
      className='h-3.5 w-3.5 overflow-visible stroke-secondary-700'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path
        d='M0 1H14M0 7H14M0 13H14'
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d='M2 2L12 12M12 2L2 12'
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  );
};

const MobileNavigation: FC<NavigationProps> = () => {
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 bg-secondary-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-secondary-900 shadow-xl ring-1 ring-secondary-900/5'
          >
            {headerProps?.navigationProps?.navLinks?.map(
              (navLink) => (
                <MobileNavLink key={v4()} {...navLink} />
              )
            )}

            {headerProps?.navigationProps?.loginLink && (
              <>
                <hr className='m-2 border-secondary-300/40' />
                <MobileNavLink
                  {...headerProps.navigationProps.loginLink}
                />
              </>
            )}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

export const Header = () => (
  <header className='py-10'>
    <Container className={undefined}>
      <nav className='relative z-50 flex justify-between'>
        <div className='flex items-center md:gap-x-12'>
          {headerProps?.navigationProps?.homeLink && (
            <Link
              {...headerProps?.navigationProps.homeLink}
            />
          )}
          {headerProps?.navigationProps?.navLinks && (
            <div className='hidden md:flex md:gap-x-6'>
              {headerProps?.navigationProps.navLinks.map(
                (navLink) => (
                  <NavLink key={v4()} {...navLink} />
                )
              )}
            </div>
          )}
        </div>
        <div className='flex items-center gap-x-5 md:gap-x-8'>
          {headerProps?.navigationProps?.loginLink && (
            <div className='hidden md:block'>
              <NavLink
                {...headerProps.navigationProps.loginLink}
              />
            </div>
          )}
          <Button
            href='/register'
            color='primary'
            className={undefined}
          >
            <span>
              Get started{' '}
              <span className='hidden lg:inline'>
                today
              </span>
            </span>
          </Button>
          <div className='-mr-1 md:hidden'>
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </Container>
  </header>
);
