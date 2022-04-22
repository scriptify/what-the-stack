import Link from 'next/link';
import {
  RiFacebookCircleFill as FacebookIcon,
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri';

/* eslint-disable @typescript-eslint/no-explicit-any */
const navigation = {
  main: [
    // { name: 'Home', href: '#' },
    { name: 'Impressum', href: '/imprint' },
    { name: 'Datenschutz', href: '/privacy' },
    // { name: 'Blog', href: '#' },
    // { name: 'Fullstack Safari 🌴', href: '#' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/maximilian-torggler-a87051170/',
      icon: (props: any) => <LinkedinIcon {...props} />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/maximilian.torggler/',
      icon: (props: any) => <FacebookIcon {...props} />,
    },

    {
      name: 'Twitter',
      href: 'https://twitter.com/scriptifyjs',
      icon: (props: any) => <TwitterIcon {...props} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/scriptify',
      icon: (props: any) => <GithubIcon {...props} />,
    },
  ],
};

export default function Example() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <Link href={item.href}>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              className='text-gray-400 hover:text-gray-500'
              rel='noreferrer'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; {new Date().getFullYear()} What The Stack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
