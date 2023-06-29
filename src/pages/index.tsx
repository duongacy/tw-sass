import { CallToAction } from '@/components/CallToAction';
import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';
import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

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
        <Hero />
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
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = (await res1).data;
  return { props: { repo } };
};
