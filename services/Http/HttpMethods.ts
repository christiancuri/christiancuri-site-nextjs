import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api as API } from '../api';

export async function getHeaders(): Promise<{ [s: string]: any }> {
  return {};
}

export async function getModule(
  url: string,
  config = {},
): Promise<AxiosResponse<any>> {
  return API.get(url, config);
}

export async function putModule(
  url: string,
  data: { [s: string]: any },
): Promise<AxiosResponse<any>> {
  return API.put(url, data);
}

export async function postModule(
  url: string,
  data: { [s: string]: any },
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  return API.post(url, data, config);
}

export async function deleteModule(url: string): Promise<AxiosResponse<any>> {
  return API.delete(url);
}

export async function patchModule(
  url: string,
  data: { [s: string]: any },
): Promise<AxiosResponse<any>> {
  return API.patch(url, data);
}
