import React, { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import Link from 'next/link';
import styled from 'styled-components';

import PostPreviewMeta from './PostPreviewMeta';

type Props = {
  post: IPost;
};

const Container = styled.div``;

export default function LatestPost({ post }: Props): ReactElement {
  return (
    <Container>
      <h2>Latest post</h2>
      <Link href={`/blog/post/${post.uri}`} as={`/blog/post/${post.uri}`}>
        <a className="card post-preview post-preview-featured lift mb-5">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <div
                className="post-preview-featured-img"
                style={{
                  backgroundImage: `url(${post.picture})`,
                  backgroundSize: 'contain',
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
    </Container>
  );
}
