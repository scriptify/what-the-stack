/* This example requires Tailwind CSS v2.0+ */
import {
  RiBarricadeFill as LegacyCodeIcon,
  RiFileCodeFill as CodeIcon,
  RiMedal2Fill as PerformanceIcon,
  RiPhoneFindLine as CallIcon,
  RiServerFill as ServerIcon,
  RiTeamFill as HandoffIcon,
} from 'react-icons/ri';

const features = [
  {
    name: 'Analysecall',
    description: 'Erfassen des Status Quo und klare Zieldefinition',
    icon: CallIcon,
  },
  {
    name: 'Architect',
    description:
      '2-3 detaillierte Fullstack Architekturvorschläge, inklusive Developer Tools & CI/CD',
    icon: ServerIcon,
  },
  {
    name: 'Ready-to-use Codebase',
    description:
      'Umsetzen eines umfassenden Starter-Projektes mit ausführlicher Dokumentation jedes Aspektes',
    icon: CodeIcon,
  },
  {
    name: 'Legacy Migration',
    description:
      'Wenn zutreffend: Ausarbeiten eines klaren Migrations-Pfads von Legacy Applikationen',
    icon: LegacyCodeIcon,
  },
  {
    name: 'Handoff & Introduction',
    description:
      'Einführen des Entwicklerteams in das neue Paradigma und Verfügung stellen weiterführender Materialien',
    icon: HandoffIcon,
  },
  {
    name: 'Performance Evaluation',
    description:
      'Ebenfalls inklusive: 30min Performance Evaluation Call jede Woche, für einen Monat ab Handoff',
    icon: PerformanceIcon,
  },
];

export default function TheProcess() {
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-base font-semibold uppercase tracking-wider text-indigo-600'>
          So funktioniert&apos;s
        </h2>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          In zwei Wochen zum perfekten React Techstack
        </p>
        <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
          Hier wird nicht lange um den heißen Brei geredet. Was ich anbiete, ist
          keine klassische Zweitagesschulung oder ein videobasierter Onlinekurs.
          Ich führe direkt starke Engineering Standards mit einer fertig
          vorbereiteten Codebase und ausführlicher Dokumentation mit
          Codebeispielen im Unternehmen ein.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature, idx) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                  <div className='-mt-6'>
                    <div className='relative'>
                      <span className='inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                      {/* <span className='absolute top-0 left-0 text-4xl font-extrabold text-indigo-600'>
                        {idx + 1}
                      </span> */}
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {idx + 1}. {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
