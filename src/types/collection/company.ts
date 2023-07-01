import { DataCover, Image } from '../common';

export type Company = DataCover<{
  name: string;
  logo: { data: Image };
}>;

export type GetAllCompanyParams = any;
