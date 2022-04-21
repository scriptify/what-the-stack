/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import { RiCheckFill as CheckIcon } from 'react-icons/ri';

import techIllustration from '../../../public/images/success_alt.png';

const features = [
  {
    name: <>Mehr Engineering Zeit für Produktentwicklung</>,
    description: (
      <>
        Development Team kann sich auf das konzentrieren, was es am besten kann
        - Shippen und Implementieren von Features
      </>
    ),
  },
  {
    name: <>Der Konkurrenz einen Schritt voraus</>,
    description: (
      <>
        ...dank cutting-edge Technologien und optimierten Prozessen - werde zum
        Innovator Deiner Branche
      </>
    ),
  },
  {
    name: <>Überblick über das JavaScript Ecosystem</>,
    description: (
      <>
        Eine klare Vorstellung aller möglichen und passenden Technologien für
        Dein Unternehmen
      </>
    ),
  },
  {
    name: <>Effizientes Developer Onboarding</>,
    description: (
      <>Kein stundenlanges Einrichten von Entwicklungsumgebungen mehr</>
    ),
  },
  {
    name: <>Technical Debt? Technical Excellence!</>,
    description: (
      <>
        Sorge dafür, dass Deine Software nicht schon nächste Woche als „Legacy“
        gilt.
      </>
    ),
  },
];

export default function Solutions() {
  return (
    <div className='mt-16 bg-white'>
      <h2 className='mb-8 text-center text-2xl font-black uppercase tracking-wide text-gray-900'>
        <span>Die neue Ära</span>
        <span className='block text-indigo-600'>
          modernen Webapp Developments
        </span>
      </h2>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
        <div>
          <Image
            placeholder='blur'
            src={techIllustration}
            alt='The new era of web development'
          />
        </div>
        <div className='mt-12 lg:col-span-2 lg:mt-0'>
          <dl className='space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8'>
            {features.map((feature, idx) => (
              <div key={idx} className='relative'>
                <dt>
                  <CheckIcon
                    className='absolute h-6 w-6 text-green-500'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg font-medium leading-6 text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-9 text-base text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
