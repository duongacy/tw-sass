import { DataCover } from '../common';
import { Company } from '../collection/company';

export type Hero = DataCover<{
  titleSplit1: string;
  titleSplit2: string;
  titleEmphasis: string;
  describe: string;
  partnersDescribe: string;
  companies: { data: Company[] };
}>;

export type GetHeroParams = undefined;
