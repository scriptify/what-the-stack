import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { RiCloseCircleFill as XIcon } from 'react-icons/ri';

import logo from '../../../public/images/logo.png';

type Props = {
  displayMode: 'before' | 'after';
};

const BeforeAfterCard: React.FC<Props> = ({ children, displayMode }) => {
  return (
    <div className='flex items-center rounded-3xl bg-gray-50 p-4 shadow-lg'>
      <div className='relative h-10 w-10'>
        {displayMode === 'before' && (
          <XIcon className='h-full w-auto text-red-500' />
        )}
        {displayMode === 'after' && (
          <Image src={logo} alt='' layout='fill' objectFit='contain' />
        )}
      </div>
      <p
        className={clsx('ml-4 text-base font-black lg:text-lg', {
          'text-gray-500': displayMode === 'before',
          'text-indigo-600': displayMode === 'after',
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default BeforeAfterCard;
