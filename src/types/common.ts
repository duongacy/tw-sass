export type Pagination = {
  start: number;
  limit: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type DataCover<T> = {
  id: number;
  attributes: T;
};

export type ResponseGetType<T> = {
  data: T;
  meta: Meta;
};

export type Image = DataCover<{
  alternativeText: null | string;
  caption: null | string;
  createdAt: string;
  ext: string;
  formats: null | string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}>;
