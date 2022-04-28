import React from 'react';

import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';
import alex from '../../../public/images/alex.png';
import franz from '../../../public/images/franz.jpg';
import jim from '../../../public/images/jim.jpg';
import peter from '../../../public/images/peter.jpg';

const HighlightText = ({ children }: { children: string }) => (
  <span className='font-medium'>{children}</span>
);

const testimonials: TestimonialCardProps[] = [
  {
    name: `Peter Aichner`,
    role: `CTO`,
    company: {
      name: `Crystal Design GmbH`,
      url: `https://www.diva-portal.de/`,
    },
    profilePicture: peter,
    content: (
      <>
        <HighlightText>
          Unsere in die Jahre gekommene Web-Anwendung
        </HighlightText>{' '}
        auf jQuery Basis verlangsamte den Entwicklungsprozess erheblich.
        <br />
        <br />
        Nach einer Analyse hat Maximilian einen Migrationsplan ausgearbeitet,
        mit welchem wir Schritt für Schritt auf React umgestiegen sind.
        <br />
        <br />
        Dank moderner Tools wurde die Produktivität unserer Entwickler extrem
        gesteigert.
        <br />
        <br />
        Die Zusammenarbeit hat uns viel Zeit und Komplikationen erspart. Ohne
        die externe Erfahrung und dem Knowhow hätten wir nicht das Zeug gehabt,
        überhaupt eine solche Migration zu starten.
        <br />
        <br />
        Maximilian ist super informiert und up to date, überhaupt in der Welt
        der Web-Anwendungen. Keep up the good work!
      </>
    ),
  },
  {
    name: `Alex Walder`,
    role: `CEO`,
    company: {
      name: `Photogram GmbH`,
      url: `https://www.photogram.pro/`,
    },
    profilePicture: alex,
    content: (
      <>
        <HighlightText>
          Die Kundenanforderungen an unser mittlerweile sehr komplexes Produkt
        </HighlightText>{' '}
        stiegen ständig. Auch unser Entwicklungsteam bekam stetigen Zuwachs.
        <br />
        <br />
        Dank der Architektur, die uns Maximilian mit eigens entwickelten
        Developer Tools aufgesetzt hat, konnten wir problemlos skalieren.
        <br />
        <br />
        Unsere Kunden waren überrascht, wie schnell wir neue Features auf den
        Markt bringen konnten!
      </>
    ),
  },
  {
    name: `Jim Unterweger`,
    role: `CEO`,
    company: {
      name: `Carlito GmbH`,
      url: `https://www.carlito-app.com/`,
    },
    profilePicture: jim,
    content: (
      <>
        <HighlightText>
          Als Startup mussten wir einen Techstack wählen
        </HighlightText>
        , mit dem wir so schnell wie möglich auf den Markt konnten und trotzdem
        eine effiziente Weiterentwicklung nach dem Launch möglich ist.
        <br />
        <br />
        Mit der Fülle an Tools und Technologien kann man schnell den Überblick
        verlieren.
        <br />
        <br />
        Maxi hat uns da geholfen und eine super Architektur samt Codebase
        aufgesetzt, die noch jetzt, über einem Jahr nach dem Launch, schnelles
        Arbeiten ermöglicht.
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
        <HighlightText>
          Unsere Codebase wurde über die Jahre immer unübersichtlicher
        </HighlightText>{' '}
        und sehr schwer zu verwalten. Des Weiteren kamen neue Anforderungen von
        Kunden dazu, welche für uns mit dem alten Stack nie zeitnah umsetzbar
        gewesen wären.
        <br />
        <br />
        Nach der Zusammenarbeit mit Maxi konnten ich und mein Team viel
        schneller arbeiten, auch weil wir genau in dieser Zeit angefangen haben,
        mit Scrum Sprints zu arbeiten. Da passte die neue Codebase perfekt dazu.
        <br />
        <br />
        Die Developer-Experience hat sich drastisch verbessert. Zu Beginn haben
        wir uns einleben müssen mit dem React Framework, dies ist aber bei
        Veränderungen immer der Fall.
        <br />
        <br />
        Nun haben wir einen erheblich übersichtlicheren und strukturierteren
        Code und viele alt-lastige Plagen bleiben uns nun erspart.
      </>
    ),
  },
];

const Testimonials = () => {
  return (
    <div className='mt-44'>
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
