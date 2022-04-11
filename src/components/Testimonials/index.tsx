import React from 'react';

import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';
import franz from '../../../public/images/franz.jpg';

const testimonials: TestimonialCardProps[] = [
  {
    name: `Franz Aichner`,
    role: `Fullstack Developer`,
    company: {
      name: `Crystal Design GmbH`,
      url: `https://www.diva-portal.de/`,
    },
    profilePicture: franz,
    content: (
      <>
        Nach einer Analyse haben wir einen Migrationsplan ausarbeitet, mit
        welchem wir Schritt für Schritt die Umstellung auf React geplant haben.
      </>
    ),
  },
  {
    name: `Franz Aichner`,
    role: `Fullstack Developer`,
    company: {
      name: `Crystal Design GmbH`,
      url: `https://www.diva-portal.de/`,
    },
    profilePicture: franz,
    content: (
      <>
        Nach einer Analyse haben wir einen Migrationsplan ausarbeitet, mit
        welchem wir Schritt für Schritt die Umstellung auf React geplant haben.
      </>
    ),
  },
];

const Testimonials = () => {
  return (
    <div className='mt-32'>
      <h2 className='mb-8 text-center text-4xl font-black text-gray-900'>
        Don&apos;t take my word for it!
      </h2>
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard key={idx} idx={idx} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
