import * as React from 'react';

import Authority from '@/components/Authority';
import Footer from '@/components/Footer';
import LandingHero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import MainCta from '@/components/MainCta';
import PainPoints from '@/components/PainPoints';
import Seo from '@/components/Seo';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
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
        <Solutions />
        <Testimonials />
        <MainCta />
        <Footer />
      </main>
    </Layout>
  );
}
