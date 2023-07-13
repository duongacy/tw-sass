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
import { HeroComponent } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { CallToAction } from '@/components/CallToAction';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Faqs } from '@/components/Faqs';

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
        <title>YLVN template</title>
        <meta
          name='description'
          content='Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.'
        />
      </Head>
      <Header />
      <main>
        <HeroComponent />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<
  HomeProps
> = async () => {
  const res1 = axios.get(
    'https://api.github.com/repos/vercel/next.js'
  );
  const repo = (await res1).data;
  return { props: { repo } };
};
