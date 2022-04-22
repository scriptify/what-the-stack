import Layout from '@/components/layout/Layout';
import PrivacyContent from '@/components/PrivacyContent';
import Seo from '@/components/Seo';

export default function PrivacyPage() {
  return (
    <Layout>
      <Seo title='What The Stack - Privacy' />
      <main className='mt-32 p-4'>
        <PrivacyContent />
      </main>
    </Layout>
  );
}
