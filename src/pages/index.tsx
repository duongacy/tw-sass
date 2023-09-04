import { NextPage } from 'next';
import { Feature01 } from '@/components2/Marketing/PageSections/Feature/Feature01';

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
      <Feature01 />
    </>
  );
};
export default Home;
