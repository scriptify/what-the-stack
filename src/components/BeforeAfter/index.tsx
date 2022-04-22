import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import BeforeAfterCard from './BeforeAfterCard';
import arrowImg from '../../../public/images/arrow.png';
import arrowMobile from '../../../public/images/arrow_mobile.png';

const transformations = [
  {
    before: 'Mit jedem neuen Feature steigt der Zeitaufwand',
    after: 'Nahezu konstant bleibender Implementations-Aufwand',
  },
  {
    before:
      'Unvorhergesehene Nebenwirkungen jedes Mal, wenn etwas geändert wird',
    after: 'Strukturierte Codebase - alle Abhängigkeiten klar definiert',
  },
  {
    before:
      'Verwirrt über das unübersichtliche und sich ständig wandelnde JS Ecosystem',
    after: 'Klarheit über alle sinnvollen Tools für Dein Unternehmen',
  },
];

const BeforeAfter = () => {
  return (
    <div className='mx-auto mt-32 max-w-6xl'>
      <div className='relative mx-auto mb-12 hidden h-10 w-auto text-center lg:block'>
        <Image src={arrowImg} alt='' layout='fill' objectFit='contain' />
      </div>
      <div className='grid grid-cols-1 gap-x-16 gap-y-4 px-4 lg:grid-cols-2 lg:px-0'>
        {transformations.map((transformation, idx) => {
          return [
            <div key={`${idx}-before-spacing`} className='mt-8 lg:hidden' />,
            <BeforeAfterCard key={`${idx}-before`} displayMode='before'>
              {transformation.before}
            </BeforeAfterCard>,
            <div
              key={`${idx}-arrow-mobile`}
              className={clsx('relative -mt-4 -mb-4 h-10 w-auto lg:hidden', {
                'scale-x-[-1] scale-y-[1]': idx % 2 === 0,
              })}
            >
              <Image
                src={arrowMobile}
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>,
            <BeforeAfterCard key={`${idx}-after`} displayMode='after'>
              {transformation.after}
            </BeforeAfterCard>,
          ];
        })}
      </div>
    </div>
  );
};

export default BeforeAfter;
