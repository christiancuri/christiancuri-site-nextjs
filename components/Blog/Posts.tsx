import React, { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import Post from './Post';

type Props = {
  posts: IPost[];
};

export default function Posts({ posts }: Props): ReactElement {
  return (
    <>
      {posts && posts.length
        ? posts.map((post, key) => <Post key={key} post={post} />)
        : null}
    </>
  );
}
