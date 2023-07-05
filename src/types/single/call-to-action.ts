import { DataCover, Image } from '../common';

export type CallToAction = DataCover<{
  title: string;
  description: string;
  buttonText: string;
  background: {
    data: Image;
  };
}>;
