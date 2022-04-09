import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import LandingHero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Authority from '@/components/Authority';
import TheProcess from '@/components/TheProcess';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <LandingHero />
        <PainPoints />
        <Authority />
        <TheProcess />
      </main>
    </Layout>
  );
}
