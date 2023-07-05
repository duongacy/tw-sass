import { Feature } from '../collection/feature';
import { DataCover } from '../common';

export type PrimaryFeatures = DataCover<{
  title: string;
  description: string;
  features: {
    data: Feature[];
  };
}>;
