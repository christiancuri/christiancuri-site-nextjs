import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import { IPost } from '@/interfaces';
import { api } from '@/services';

import BlogHeader from './Header';
import LatestPost from './LatestPost';
import Pagination from './Pagination';
import Posts from './Posts';

export default function BlogHome(): ReactElement {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(0);
  const [latestPost, setLatestPage] = useState<IPost>();

  const fetchPosts = useCallback(async () => {
    const { data } = await api.get(`/posts?_page=${page}`);
    if (page === 0) {
      setLatestPage(data.shift());
    }
    setPosts(data);
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [page, fetchPosts]);

  return (
    <Layout footerDark={true}>
      <BlogHeader />
      <section className="bg-light py-10">
        <div className="container">
          {latestPost && <LatestPost post={latestPost} />}
          <div className="row">
            <Posts posts={posts} />
          </div>
          <Pagination />
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
