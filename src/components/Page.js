import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";

export default function Page(props) {
  const { pageHandler, pageNo } = props;
  const StyPaginate = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 1rem auto 0;
  `;
  return (
    <StyPaginate>
      <Pagination>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              pageHandler(1);
            }}
            first
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              pageHandler("previous");
            }}
            previous
          />
        </PaginationItem>
        {[...Array(pageNo)].map((page, i) => (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                pageHandler(i + 1);
              }}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              pageHandler("next");
            }}
            next
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              pageHandler(pageNo);
            }}
            last
          />
        </PaginationItem>
      </Pagination>
    </StyPaginate>
  );
}
