/* This example requires Tailwind CSS v2.0+ */
import { RiCloseCircleFill as XIcon } from 'react-icons/ri';

const painPoints = [
  {
    content: (
      <>
        Next.js, Remix, CRA, Redwood, Deno, SSR, SSG, ISR, ...
        <br />
        Überblick über das JS/React Ecosystem verloren?
      </>
    ),
  },
  { content: 'Implementieren von Features dauert ewig und ist umständlich?' },
  {
    content:
      'Veralteter, ineffizienter Technologie Stack mit vielen Problemen?',
  },
  {
    content:
      'Das Team verbringt viel Zeit damit, Build Tools Fehler zu beheben und DevOps zu tweaken?',
  },
  { content: 'Das Onboarding von neuen Entwicklern braucht extrem lange?' },
];

export default function PainPoints() {
  return (
    <div className='bg-white'>
      {/* <div className='mt-8 text-center'>
        <h2 className='text-4xl font-extrabold text-gray-900'>
          Kennst du das:
        </h2>
      </div> */}
      <div className='mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <dl className='space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8'>
          {painPoints.map((painPoint, idx) => (
            <div key={idx} className='relative'>
              <dt>
                <XIcon
                  className='absolute h-6 w-6 text-red-500'
                  aria-hidden='true'
                />
                {/* <p className='ml-9 text-lg font-medium leading-6 text-gray-900'>
                  {painPoint.content}
                </p> */}
              </dt>
              <dd className='ml-9 text-base text-gray-500'>
                {painPoint.content}
              </dd>
            </div>
          ))}
        </dl>
        <div className='mx-auto mt-16 max-w-3xl text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>
            Dann kann ich helfen.
          </h2>
          <p className='mt-2 text-lg text-gray-500'>
            Lasst uns zusammen euren Entwicklungsprozess wieder auf
            Höchstleistung bringen
          </p>
        </div>
      </div>
    </div>
  );
}
