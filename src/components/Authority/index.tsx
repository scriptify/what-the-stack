/* This example requires Tailwind CSS v2.0+ */
import { RiShieldUserFill as PersonIcon } from 'react-icons/ri';

export default function Authority() {
  return (
    <div className='relative bg-white'>
      <div className='h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2'>
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
          alt='Support team'
        />
      </div>
      <div className='relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16'>
        <div className='mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10'>
          <div>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
              <PersonIcon className='h-6 w-6' aria-hidden='true' />
            </div>
          </div>
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Hallo! Ich bin Maximilian
          </h2>
          <p className='mt-6 text-lg text-gray-500'>
            Ein Fullstack Software Developer mit{' '}
            {new Date().getFullYear() - 2016}+ Jahren professioneller Erfahrung.
            Ich habe zwei Tech Startups mitgegründet und vielen weiteren
            Unternehmen dabei geholfen, skalierbare Webanwendungen mit
            cutting-edge Technologien zu entwickeln.
            <br />
            <br />
            Nun gebe ich mein Wissen weiter, und helfe dabei, den Jungle an
            Technologien erfolgreich zu navigieren und den richtigen Techstack
            zu wählen.
          </p>
          {/* <div className='mt-8 overflow-hidden'>
            <dl className='-mx-8 -mt-8 flex flex-wrap'>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Delivery
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl'>
                  24/7
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Pepperoni
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl'>
                  99.9%
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Calories
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl'>
                  100k+
                </dd>
              </div>
            </dl>
          </div> */}
        </div>
      </div>
    </div>
  );
}
