// import { CallToAction } from '@/components/CallToAction';
// import { Faqs } from '@/components/Faqs';
// import { HeroComponent } from '@/components/Hero';
// import { Pricing } from '@/components/Pricing';
// import { PrimaryFeatures } from '@/components/PrimaryFeatures';
// import { SecondaryFeatures } from '@/components/SecondaryFeatures';
// import { Testimonials } from '@/components/Testimonials';
import axios from 'axios';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Sidebar2 } from '@/components/sections/navigation/sidebar/Sidebar2';
import { Sidebar5 } from '@/components/sections/navigation/sidebar/Sidebar5';
import { SidebarSection } from '@/sections/SidebarSection';

type Repo = {
  name: string;
  stargazers_count: number;
};

interface HomeProps {
  repo: Repo;
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Newbie template</title>
        <meta
          name='description'
          content='Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.'
        />
      </Head>
      <main className='grid grid-cols-[300px_1fr] min-h-screen'>
        <SidebarSection/>
      </main>
    </>
  );
};
export default Home;
