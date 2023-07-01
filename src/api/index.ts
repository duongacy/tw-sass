import { ResponseGetType } from '@/types/common';
import {
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
  timeout: 8000,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});

export const axiosGet = async <
  DataType = any,
  RequestType = any
>(
  path: string,
  params?: RequestType
) => {
  try {
    const response = await axiosInstance.get<
      string,
      AxiosResponse<ResponseGetType<DataType>>
    >(path, { params });
    return response.data;
  } catch (error) {
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};

export const useQueryCustom = <
  DataType = any,
  RequestType = any
>(
  path: string,
  params: RequestType,
  options?: UseQueryOptions<
    any,
    any,
    ResponseGetType<DataType>,
    string[]
  >
) => {
  return useQuery({
    queryFn: () =>
      axiosGet<DataType, RequestType>(path, params),
    queryKey: [path, JSON.stringify(params ?? '{}')],
    ...options,
  });
};
