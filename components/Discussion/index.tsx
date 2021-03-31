import { ReactElement } from 'react';

import { IPost } from '@/interfaces';

import { DiscussionEmbed } from 'disqus-react';

type Props = {
  post: IPost;
};
export const Discussion = ({ post }: Props): ReactElement => {
  const shortname = 'christiancuri';

  const config = {
    url: `https://christiancuri.dev/blog/post/${post.uri}`,
    identifier: post._id,
    title: post.title,
  };

  return <DiscussionEmbed shortname={shortname} config={config} />;
};
