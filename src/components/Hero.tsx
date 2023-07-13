import { useQueryCustom } from '@/api';
import { Hero } from '@/types/single/hero';

export const HeroComponent = () => {
  const { data: heroQuery } = useQueryCustom<Hero>(
    '/hero',
    {
      populate: {
        companies: {
          populate: '*',
        },
      },
    }
  );
  const heroAttributes = heroQuery?.data.attributes;

  return (
    <></>
  );
};
