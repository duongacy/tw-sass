import { NextPage } from 'next';

type Repo = {
  name: string;
  stargazers_count: number;
};

interface HomeProps {
  repo: Repo;
}

const Home: NextPage<HomeProps> = () => {
  return <></>;
};
export default Home;
