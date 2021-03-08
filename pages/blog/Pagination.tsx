import React, { ReactElement } from 'react';
import ReactPaginate from 'react-paginate';

import { Config } from '@/config';

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
};

export default function Pagination({
  page,
  setPage,
  total,
}: Props): ReactElement {
  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  return (
    <nav aria-label="Page navigation">
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(total / Config.POSTS_LIMIT)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination pagination-blog justify-content-center'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        forcePage={page}
      />
    </nav>
  );
}
