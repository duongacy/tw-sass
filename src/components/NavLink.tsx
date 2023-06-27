import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface NavLinkProps {
  href: string
  children: ReactNode
}

export const NavLink: FC<NavLinkProps> = (props) => (
  <Link
    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    {...props}
  />
)

export const MobileNavLink: FC<NavLinkProps> = (props) => (
  <Popover.Button as={Link} className="block w-full p-2" {...props} />
)
