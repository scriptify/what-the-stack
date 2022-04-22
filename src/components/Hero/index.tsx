/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { RiArrowRightSLine as ChevronRightIcon } from 'react-icons/ri';

import { BOOKING_URL } from '@/data';

export default function LandingHero() {
  return (
    <div className='relative overflow-hidden bg-gray-50'>
      <div
        className='hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full'
        aria-hidden='true'
      >
        <div className='relative mx-auto h-full max-w-7xl'>
          <svg
            className='absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
            />
          </svg>
        </div>
      </div>

      <div className='relative pt-24 pb-16 sm:pb-24 lg:pb-16'>
        <main className='mx-auto mb-20 max-w-7xl px-4 sm:mt-24 lg:mb-0'>
          <div className='mt-8 text-center lg:mt-0'>
            <a href='#' className='inline-flex space-x-1 lg:space-x-4'>
              <span className='rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600'>
                Follow me
              </span>
              <span className='inline-flex items-center space-x-1 text-sm font-medium text-indigo-600'>
                <span>
                  On LinkedIn für News rund um moderne Webapp Entwicklung
                </span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </span>
            </a>
          </div>
          <div className='mt-8 text-center'>
            <h1 className='mt-16 mb-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:my-0'>
              <span className=''>Moderne React Softwarearchitektur</span>
              <br />
              <span className='text-indigo-600'>für dein A-Team</span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
              Schluss mit ewig langen Release Cycles, umständlichen Developer
              Tools und klobiger User Experience! Sorge dafür, dass sich Dein
              Development Team auf das fokussiert, was es am besten kann:
              Shippen von neuen Features.
            </p>
            <div className='mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8'>
              <div className='rounded-md shadow'>
                <a
                  href={BOOKING_URL}
                  target='_blank'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
                  rel='noreferrer'
                >
                  Gratis Erstgespräch buchen
                </a>
              </div>
              {/* <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg'
                >
                  Live demo
                </a>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
