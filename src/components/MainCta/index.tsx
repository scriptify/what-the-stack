import Image from 'next/image';
import { ReactNode } from 'react';

import { BOOKING_URL } from '@/data';

// import meImage from '../../../public/images/cta_image.png';
import ctaImg from '../../../public/images/cta_illustration.png';

type Props = {
  title?: string;
  description?: ReactNode;
  cta?: {
    text: string;
    href: string;
  };
};

export default function MainCta({
  title = 'Interesse?',
  description = 'Dann lass uns herausfinden, wie ich auch Deinem Unternehmen helfen kann, die Developer Produktivität zu optimieren!',
  cta = {
    text: 'Gratis 30min Call buchen',
    href: BOOKING_URL,
  },
}: Props) {
  return (
    <div className='relative bg-white py-16'>
      <div
        className='absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl bg-indigo-500 lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>
          <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
            <div
              className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden'
              aria-hidden='true'
            />
            <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
              <div className='sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                <div className='relative h-96 rounded-3xl object-cover object-center lg:h-auto'>
                  <Image
                    src={ctaImg}
                    layout='fill'
                    objectFit='contain'
                    alt='Maximilian Torggler'
                    placeholder='blur'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='relative rounded-3xl bg-indigo-500 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center'>
            <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
              <h2
                className='text-3xl font-extrabold text-white'
                id='join-heading'
              >
                {title}
              </h2>
              <p className='text-lg text-white'>{description}</p>
              {cta && (
                <a
                  className='block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto'
                  href={cta.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {cta.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
