import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { RiCloseFill as XIcon, RiMenuFill as MenuIcon } from 'react-icons/ri';

import { BOOKING_URL } from '@/data';

import logo from '../../../public/images/logo_font_long.png';
interface NavLink {
  name: string;
  href: string;
}

const navigation: NavLink[] = [
  // { name: 'Home', href: '#' },
  // { name: 'Blog 📚', href: '#' },
  // { name: 'Fullstack Safari 🌴', href: '#' },
];

const Header = () => {
  return (
    <Popover as='header' className='fixed top-0 z-50 w-full bg-gray-50 lg:py-6'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center md:absolute md:inset-y-0 md:left-0'>
            <div className='flex w-full items-center justify-between md:w-auto'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>what the stack</span>
                  {/* <SVGLogo className='h-44 w-auto' /> */}
                  <div className='relative h-24 w-56'>
                    <Image
                      objectFit='contain'
                      layout='fill'
                      src={logo}
                      alt='what the stack'
                    />
                  </div>
                </a>
              </Link>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:space-x-10'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='font-medium text-gray-500 hover:text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end'>
            <span className='inline-flex rounded-md shadow'>
              <a
                href={BOOKING_URL}
                target='_blank'
                className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700'
                rel='noreferrer'
              >
                Erstgespräch buchen
              </a>
            </span>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <Image
                  src={logo}
                  alt='what the stack'
                  className='h-8 w-auto'
                  placeholder='blur'
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              target='_blank'
              className='block w-full bg-indigo-600 px-5 py-3 text-center font-medium text-white hover:bg-indigo-700'
              rel='noreferrer'
            >
              Call buchen
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
