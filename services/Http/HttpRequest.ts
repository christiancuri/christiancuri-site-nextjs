import { Config } from '@/config';

import { AxiosResponse } from 'axios';

import * as HttpMethods from './HttpMethods';

/**
 * System section
 */

export async function getPosts<T>(page: number): Promise<T> {
  return HttpMethods.getModule(
    `/blog/posts?skip=${page * Config.POSTS_LIMIT}&limit=${Config.POSTS_LIMIT}`,
  ).then(({ data }: AxiosResponse<T>) => data);
}

export async function getPost<T>(postId: string): Promise<T> {
  return HttpMethods.getModule(`/blog/post/${postId}`).then(
    ({ data }: AxiosResponse<T>) => data,
  );
}

export async function getPostsPaths<T>(): Promise<T> {
  return HttpMethods.getModule(`/blog/posts/paths`).then(
    ({ data }: AxiosResponse<T>) => data,
  );
}
