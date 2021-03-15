import React, { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import { formatDistanceToNow } from 'date-fns';

type Props = {
  post: IPost;
};

export default function PostPreviewMeta({ post }: Props): ReactElement {
  const updated = post.createdAt !== post.updatedAt;
  const date = updated ? post.createdAt : post.updatedAt;

  return (
    <div className="post-preview-meta">
      <img
        alt=""
        className="post-preview-meta-img"
        src={post.author?.picture}
      />
      <div className="post-preview-meta-details">
        <div className="post-preview-meta-details-name">
          {post.author?.name}
        </div>
        <div className="post-preview-meta-details-date">
          {updated ? 'Updated ' : 'Created '}
          {formatDistanceToNow(new Date(date), {
            includeSeconds: true,
            addSuffix: true,
          })}
        </div>
      </div>
    </div>
  );
}
