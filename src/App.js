import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Karakterler from "./components/Karakterler.js";
import styled from "styled-components";
import "./header.css";
import axios from "axios";
import Page from "./components/Page.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [search, setSearch] = useState("");
  const [karakterListesi, setKarakterListesi] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const StyPage = styled.div`
    text-align: center;
  `;
  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=" + activePage)
      .then((response) => {
        setKarakterListesi(response.data.results);
        setPageNo(
          Math.ceil(response.data.count / response.data.results.length)
        );
        const searchResults = response.data.results.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setKarakterListesi(searchResults);
      })
      .catch((error) => error);
  }, [search, activePage]);

  const pageHandler = (p) => {
    console.log(p);
    if (p === "previous") {
      p = activePage - 1 < 1 ? 1 : activePage - 1;
    } else if (p === "next") {
      p = activePage + 1 > pageNo ? pageNo : activePage + 1;
    }
    setActivePage(p);
  };
  console.log(karakterListesi);
  return (
    <StyPage>
      <Header search={search} changeHandler={changeHandler} />
      <Karakterler karakterler={karakterListesi} />
      <Page pageHandler={pageHandler} pageNo={pageNo} />
    </StyPage>
  );
};

export default App;
