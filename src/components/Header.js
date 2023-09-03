import React from "react";
import { Input } from "reactstrap";
import styled from "styled-components";

export default function Header(props) {
  const StyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 1rem auto;
  `;

  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 550;
    width: 45%;
    text-align: left;
    margin: auto 0;
  `;
  const { search, changeHandler } = props;
  return (
    <StyHeader>
      <H1>
        {"<"} STAR WARS {">"}
      </H1>
      <Input
        placeholder="Search"
        name="arama"
        onChange={changeHandler}
        autoFocus
        value={search}
      />
    </StyHeader>
  );
}
