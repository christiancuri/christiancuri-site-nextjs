import React, { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import Link from 'next/link';

import PostPreviewMeta from './PostPreviewMeta';

type Props = {
  post: IPost;
};

export default function Post({ post }: Props): ReactElement {
  return (
    <Link href={`/blog/post/${post.uri}`} as={`/blog/post/${post.uri}`}>
      <div className="col-md-6 col-xl-4 mb-5">
        <a className="card post-preview lift h-100" href="#!">
          <img alt="" className="card-img-top" src={post.picture} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
          </div>
          <div className="card-footer">
            <PostPreviewMeta post={post} />
          </div>
        </a>
      </div>
    </Link>
  );
}
