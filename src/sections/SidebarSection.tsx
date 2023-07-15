import { ToggleMode } from '@/components/common/ToggleMode';
import { DivProps } from '@/components/types';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const SidebarSection: FC<DivProps> = ({
  className,
  ...props
}) => {
  const { pathname } = useRouter();
  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Page Sections',
      icon: FolderIcon,

      children: [
        // {
        //   name: 'Hero Sections',
        //   href: '/page-sections/hero-sections',
        // },
        {
          name: 'Feature Sections',
          href: '/page-sections/feature-sections',
        },
        {
          name: 'CTA Sections',
          href: '/page-sections/cta-sections',
        },
        {
          name: 'Pricing Sections',
          href: '/page-sections/pricing-sections',
        },
        {
          name: 'Header Sections',
          href: '/page-sections/header-sections',
        },
        {
          name: 'Newsletter Sections',
          href: '/page-sections/newsletter-sections',
        },
        {
          name: 'Stats',
          href: '/page-sections/stats-sections',
        },
        {
          name: 'Testimonials',
          href: '/page-sections/testimonials-sections',
        },
        {
          name: 'Blog Sections',
          href: '/page-sections/blog-sections',
        },
        {
          name: 'Contact Sections',
          href: '/page-sections/contact-sections',
        },
        {
          name: 'Team Sections',
          href: '/page-sections/team-sections',
        },
        {
          name: 'Content Sections',
          href: '/page-sections/content-sections',
        },
        {
          name: 'Logo Cloud',
          href: '/page-sections/logo-cloud-sections',
        },
        {
          name: 'FAQs',
          href: '/page-sections/faqs-sections',
        },
        {
          name: 'Footer',
          href: '/page-sections/footer-sections',
        },
      ].map((item) => ({
        ...item,
        current: item.href === pathname,
      })),
    },
    {
      name: 'Elements',
      icon: FolderIcon,
      current: false,
      children: [
        { name: 'Headers', href: '#' },
        { name: 'Flyout Menus', href: '#' },
        { name: 'Banners', href: '#' },
      ],
    },
    {
      name: 'Calendar',
      href: '#',
      icon: CalendarIcon,
      current: false,
    },
    {
      name: 'Documents',
      href: '#',
      icon: DocumentDuplicateIcon,
      current: false,
    },
    {
      name: 'Reports',
      href: '#',
      icon: ChartPieIcon,
      current: false,
    },
  ];

  return (
    <div
      className={`flex grow flex-col gap-y-5 overflow-y-auto border-r border-neutral-200 bg-white px-6 ${className}`}
      {...props}
    >
      <div className='flex h-16 shrink-0 items-center'>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul
          role='list'
          className='flex flex-1 flex-col gap-y-7'
        >
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-neutral-50'
                          : 'hover:bg-neutral-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-neutral-700'
                      )}
                    >
                      <item.icon
                        className='h-6 w-6 shrink-0 text-neutral-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-neutral-50'
                                : 'hover:bg-neutral-50',
                              'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-neutral-700'
                            )}
                          >
                            <item.icon
                              className='h-6 w-6 shrink-0 text-neutral-400'
                              aria-hidden='true'
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? 'rotate-90 text-neutral-500'
                                  : 'text-neutral-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            as='ul'
                            className='mt-1 px-2'
                          >
                            {item.children.map(
                              (subItem: any) => (
                                <Link
                                  href={subItem.href}
                                  key={subItem.name}
                                >
                                  {/* 44px */}
                                  <Disclosure.Button
                                    as='a'
                                    className={classNames(
                                      subItem.current
                                        ? 'bg-neutral-50'
                                        : 'hover:bg-neutral-50',
                                      'block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-neutral-700'
                                    )}
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </Link>
                              )
                            )}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className='-mx-6 mt-auto'>
            <a
              href='#'
              className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-neutral-900 hover:bg-neutral-50'
            >
              <img
                className='h-8 w-8 rounded-full bg-neutral-50'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <ToggleMode/>
              <span className='sr-only'>Your profile</span>
              <span aria-hidden='true'>YLVN</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
