import React, { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import Link from 'next/link';

import PostPreviewMeta from './PostPreviewMeta';

type Props = {
  post: IPost;
};

export default function LatestPost({ post }: Props): ReactElement {
  return (
    <Link href={`/blog/post/${post._id}`} as={`/blog/post/${post._id}`}>
      <a className="card post-preview post-preview-featured lift mb-5">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <div
              className="post-preview-featured-img"
              style={{
                backgroundImage: `url(${post.picture})`,
              }}
            />
          </div>
          <div className="col-lg-7">
            <div className="card-body">
              <div className="py-5">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
              </div>
              <hr />
              <PostPreviewMeta post={post} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
