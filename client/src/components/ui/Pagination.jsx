import React, { Component } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import usePaging from "../../store/PageStore";

const Paging = () => {
  const {pageInfo, setPageInfo} = usePaging();
  
  const handlePageChange = (page) => {
    setPageInfo(page)
    console.log(page)
  };

  return (
    <Container>
      <Pagination
        activePage={pageInfo}
        itemsCountPerPage={8}
        totalItemsCount={450}
        pageRangeDisplayed={3}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    /* border: 1px solid #e2e2e2; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child{
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child{
    border-radius: 0 5px 5px 0;
  }
  
  ul.pagination li a {
    text-decoration: none;
    color: #4da772;
    font-size: 1rem;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #4da772;
  }
  
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #eee;
  }
  
  .page-selection {
    width: 48px;
    height: 30px;
    color: #4da772;
  }
`;

export default Paging;
