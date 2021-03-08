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
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit similique
        distinctio quidem blanditiis architecto ullam a itaque quisquam nihil!
        Unde ducimus deleniti exercitationem minima, molestiae ab saepe libero.
        Doloribus, a?
      </p>
      <p>
        Magnam amet labore exercitationem maxime consectetur molestias quas quia
        dicta, praesentium minus illum quis fuga, fugiat velit voluptate sed
        nostrum ipsam atque.
      </p>
      <p>
        Quaerat voluptas natus velit deleniti reprehenderit vero ad eos ab
        reiciendis. Libero dignissimos temporibus ipsam sint dolores voluptate
        consequatur debitis tempora doloremque.
      </p>
      <h4>Creating Something New</h4>
      <p>
        Laborum placeat quas accusantium vitae perferendis dolores possimus
        tempora, qui consectetur hic ullam autem. Enim, rerum obcaecati numquam
        quaerat necessitatibus voluptatem? Repellat!
      </p>
      <p>
        Quasi, quos quaerat? Sint at odit possimus ullam saepe suscipit officiis
        nobis eaque, laudantium ut earum tempore repellendus mollitia odio nam!
        Unde?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo
        unde perferendis reprehenderit ullam nobis? Laborum amet voluptatem sunt
        natus? Tempore commodi corporis accusamus laudantium assumenda
        blanditiis aut nobis culpa.
      </p>
      <h4>Its time to build your new project</h4>
      <p>
        Facilis enim voluptatibus qui voluptatum nemo non, facere, fugiat
        deserunt dicta ab sunt in sequi, assumenda nobis ipsam quidem corporis.
        Nemo, aliquam.
      </p>
      <p>
        Illum numquam sapiente debitis similique, a accusantium quisquam
        recusandae! Nihil quia nulla blanditiis. Nobis numquam iure facilis
        consequuntur beatae eos adipisci doloremque!
      </p>
      <p>
        Voluptate reiciendis nisi tempora laboriosam commodi sequi sapiente
        natus aut ab, cum aspernatur illo. Nobis laboriosam excepturi iste
        earum. Error, ab eius?
      </p>
      <p>
        Quam, nesciunt iusto, praesentium amet necessitatibus quod porro libero
        voluptates soluta nostrum quisquam delectus repellendus totam accusamus
        sint magni dolore atque qui.
      </p>
      <img
        className="img-fluid mb-2"
        src="https://source.unsplash.com/sv8oOQaUb-o/990x540"
        alt=""
      />
      <div className="small text-gray-500 text-center">
        Photo Credit: Unsplash
      </div>
      <h4>Its time to build your new project</h4>
      <p>
        Laborum placeat quas accusantium vitae perferendis dolores possimus
        tempora, qui consectetur hic ullam autem. Enim, rerum obcaecati numquam
        quaerat necessitatibus voluptatem? Repellat!
      </p>
      <p>
        Quasi, quos quaerat? Sint at odit possimus ullam saepe suscipit officiis
        nobis eaque, laudantium ut earum tempore repellendus mollitia odio nam!
        Unde?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo
        unde perferendis reprehenderit ullam nobis? Laborum amet voluptatem sunt
        natus? Tempore commodi corporis accusamus laudantium assumenda
        blanditiis aut nobis culpa.
      </p> */}
    </div>
  );
}
