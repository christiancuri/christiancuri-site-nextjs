/* eslint-disable react/no-children-prop */
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { IPost } from '@/interfaces';

const renderers = {
  code({ language, value }: { language: any; value: any }) {
    return (
      <SyntaxHighlighter
        style={codeStyle}
        language={language}
        children={value}
      />
    );
  },
  image({ alt, src, title }: { alt: string; src: string; title: string }) {
    return <img alt={alt} src={src} title={title} className="img-fluid" />;
  },
};

type Props = {
  post: IPost;
};

export default function PostContent({ post }: Props): ReactElement {
  return (
    <div className="single-post-text my-5">
      <ReactMarkdown renderers={renderers} children={post.body} />
    </div>
  );
}
