import Pagination from "react-js-pagination";

export const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={7}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};
