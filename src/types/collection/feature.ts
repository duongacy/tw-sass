import { DataCover, Image } from '../common';

export type Feature = DataCover<{
  name: string;
  title: string;
  description: string;
  image: { data: Image };
}>;

export type GetAllFeatureParams = any;

export type PrimaryFeatures = DataCover<{
  title: string;
  description: string;
  features: {
    data: Feature[];
  };
}>;
