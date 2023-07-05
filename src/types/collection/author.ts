import { DataCover, Image } from '../common';

export type Author = DataCover<{
  name: string;
  role: string;
  image: Image;
}>;
