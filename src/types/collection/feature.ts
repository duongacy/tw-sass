import { DataCover, Image } from '../common';

export type Feature = DataCover<{
  name: string;
  title: string;
  description: string;
  image: { data: Image };
}>;

export type GetAllFeatureParams = any;
