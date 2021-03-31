import React, { ReactElement } from 'react';

import PostContent from '@/components/Blog/Post/PostContent';
import { Discussion } from '@/components/Discussion';
import Layout from '@/components/Layout';
import { IPost, IPostPath } from '@/interfaces';
import { HttpRequest } from '@/services';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatDistanceToNow } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

type Props = {
  post: IPost;
  error?: string;
};

export default function PostPage({ post }: Props): ReactElement {
  const updated = post.createdAt !== post.updatedAt;
  const date = updated ? post.createdAt : post.updatedAt;
  return (
    <Layout footerDark={true}>
      <section className="bg-light py-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="single-post">
                <h1>{post.title}</h1>
                <p className="lead">{post.description}</p>
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <div className="single-post-meta mr-4">
                    <img
                      className="single-post-meta-img"
                      src={post.author?.picture}
                      alt=""
                    />
                    <div className="single-post-meta-details">
                      <div className="single-post-meta-details-name">
                        {post.author?.name}
                      </div>
                      <div className="single-post-meta-details-date">
                        {updated ? 'Updated ' : 'Created '}
                        {formatDistanceToNow(new Date(date), {
                          includeSeconds: true,
                          addSuffix: true,
                        })}
                      </div>
                    </div>
                  </div>
                  {/* <div className="single-post-meta-links">
                    <a href="#!">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#!">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#!">
                      <FontAwesomeIcon icon={faBookmark} />
                    </a>
                  </div> */}
                </div>
                {/* <div className="small text-gray-500 text-center">
                  Photo Credit: Unsplash
                </div> */}
                <PostContent post={post} />
              </div>
              <hr className="my-5" />
              <Discussion post={post} />
              <hr className="my-5" />
              <div className="text-center">
                <Link href="/blog">
                  <a className="btn btn-transparent-dark">Back to Blog</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const postsPaths = await HttpRequest.getPostsPaths<IPostPath[]>();

  const paths = postsPaths.map(post => ({
    params: { id: post.uri },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id: string = params?.id as string;

    const post = await HttpRequest.getPost<IPost>(id);

    return { props: { post } };
  } catch (err) {
    return { props: { error: err.message } };
  }
};
