import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import MainCta from '@/components/MainCta';
import Seo from '@/components/Seo';

export default function ImprintPage() {
  const [seeDetails, setSeeDetails] = useState(false);

  return (
    <Layout>
      <Seo title='What The Stack - Impressum' />
      <main className='mt-16'>
        <MainCta
          title='Impressum'
          description={
            <>
              Maximilian Torggler
              <br />
              Software Consultant
              <br />
              Dorfstraße 43, 39040 Feldthurns, Südtirol, Italien
              <br />
              Mobil:{' '}
              {seeDetails ? (
                '+39 3407992998'
              ) : (
                <button
                  className='underline'
                  onClick={() => setSeeDetails(true)}
                >
                  Einblenden
                </button>
              )}
              <br />
              P. IVA: IT03115610218
              <br />
              Mail: hello@what-the-stack.com
            </>
          }
        />
      </main>
    </Layout>
  );
}
