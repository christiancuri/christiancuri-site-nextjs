import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import BlogHeader from '@/components/Blog/Header';
import LatestPost from '@/components/Blog/LatestPost';
import Pagination from '@/components/Blog/Pagination';
import Posts from '@/components/Blog/Posts';
import Layout from '@/components/Layout';
import { IPost, IPostResponse } from '@/interfaces';
import { HttpRequest } from '@/services';

import { useRouter } from 'next/router';

export default function BlogHome(): ReactElement {
  const router = useRouter();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(0);

  const [latestPost, setLatestPage] = useState<IPost>();
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchPosts = useCallback(async () => {
    const postResponse = await HttpRequest.getPosts<IPostResponse>(page);
    if (page === 0) {
      setLatestPage(postResponse.data[0]);
    }
    setPosts(postResponse.data);
    setTotalPages(postResponse.total);
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [page, fetchPosts]);

  useEffect(() => {
    if (router?.query?.page) {
      setPage(parseInt(String(router.query.page)) - 1);
    }
  }, [router]);

  return (
    <Layout footerDark={true}>
      <BlogHeader />
      <section className="bg-light py-10">
        <div className="container">
          {latestPost && <LatestPost post={latestPost} />}
          <div className="row">
            <Posts posts={posts} />
          </div>
          <Pagination page={page} setPage={setPage} total={totalPages} />
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
